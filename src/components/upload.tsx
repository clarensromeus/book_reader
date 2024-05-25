import * as React from "react";
import "../styles/upload.css";
import { IUpload } from "../typings/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload, faTimes } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";
import uploadFile from "../service/upload";
import {
  storage,
  ref,
  uploadBytes,
  updateProfile,
  auth,
  getDownloadURL,
} from "../service/config";

const Upload: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPicture: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setOpen, setPicture }): JSX.Element => {
  const [image, setImage] = React.useState<File | undefined>();

  const [previewImage, setPreviewImage] = React.useState<string>("");
  const [isValid, setValid] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const validity = e.target.validity;
    const selectedFile = e.target.files as FileList;

    if (validity && validity.valid) {
      const FileData = uploadFile({
        FileInfo: { file: selectedFile, valid: validity.valid },
      }) satisfies IUpload;

      setValid(Boolean(FileData?.valid));
      setImage(FileData?.ImageInfo?.singleFile);
      setPreviewImage(`${FileData?.ImageInfo?.previewImage}`);
    }
  };

  // create a reference to a reference to cloud storage service
  const storageRef = ref(storage);

  // reference the bucket
  const userRef = ref(storageRef, `users/${image?.name + nanoid()}`);

  const uploadUserImage = async () => {
    try {
      if (image && auth.currentUser) {
        setLoading(true);
        const file = await uploadBytes(userRef, image);

        await updateProfile(auth.currentUser, {
          photoURL: file.metadata.fullPath,
        });
        setLoading(false);
        const url = await getDownloadURL(file.ref);
        setPicture(url);
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="frame">
        <div className="uploadFrame">
          <button
            className="backbutton"
            onClick={() => {
              setOpen(false);
              setValid(false);
            }}
          >
            <FontAwesomeIcon icon={faTimes} style={{ fontSize: "1.1rem" }} />
          </button>
          <div className="framecontent">
            <div className="divText">
              <strong className="uploadText">Choose your image</strong>
            </div>

            {isValid ? (
              <div className="image">
                <img
                  //src="https://ericajmitchell.com/wp-content/uploads/2023/06/Thumbnail-Portland-Headshot-Ali-Comfort-by-Erica-J-Mitchell-Photographer-010-Edit001.jpg"
                  src={previewImage}
                  alt="userImage"
                />
              </div>
            ) : (
              <div className="upload">
                <label className="button" htmlFor="input-file">
                  <FontAwesomeIcon
                    icon={faCloudUpload}
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  />
                </label>
                <input
                  type="file"
                  id="input-file"
                  onChange={upload}
                  style={{ display: "none" }}
                />
              </div>
            )}
            <div className="save">
              <button type="button" onClick={uploadUserImage}>
                {isLoading ? "Loading..." : "Upload"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
