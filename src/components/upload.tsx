import * as React from "react";
import "../styles/upload.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload, faTimes } from "@fortawesome/free-solid-svg-icons";

const Upload: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }): JSX.Element => {
  console.log(open);

  const [isLoaded, setImage] = React.useState<boolean>(true);

  return (
    <>
      <div className="frame">
        <div className="uploadFrame">
          <button className="backbutton" onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faTimes} style={{ fontSize: "1.1rem" }} />
          </button>
          <div className="framecontent">
            <div className="divText">
              <strong className="uploadText">Choose your image</strong>
            </div>

            {isLoaded ? (
              <div className="image">
                <img
                  src="https://ericajmitchell.com/wp-content/uploads/2023/06/Thumbnail-Portland-Headshot-Ali-Comfort-by-Erica-J-Mitchell-Photographer-010-Edit001.jpg"
                  alt="userImage"
                />
              </div>
            ) : (
              <div className="upload">
                <div className="button">
                  <FontAwesomeIcon
                    icon={faCloudUpload}
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  />
                </div>
              </div>
            )}
            <div className="save">
              <button type="button">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
