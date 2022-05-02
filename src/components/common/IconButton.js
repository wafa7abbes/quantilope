import React, { useState } from "react";
import { IconButton as Icon } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ImageUploading from "react-images-uploading";
import "./styles.css";

export const IconButton = (
  {
    imageList,
    onImageUpload,
    onImageRemoveAll,
    onImageUpdate,
    onImageRemove,
    isDragging,
    dragProps,
  },
  props
) => {
  const { disabled = false, theme = "default", action, isMedia } = props;
  const [image, setImage] = useState([]);
  const [isImage, setIsImage] = useState(false);

  console.log("I am the media");
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImage(imageList);
    setIsImage(true);
  };

  console.log("image.data_url", image[0]?.data_url);
  return (
    <ImageUploading value={image} onChange={onChange} dataURLKey="data_url">
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <>
          {isImage ? (
            <div className="upload__image-wrapper">
              <div className="image-item">
                <img src={image[0]?.data_url} alt="" width="100" />
              </div>
            </div>
          ) : (
            <Icon
              aria-label="add"
              disabled={disabled}
              color={theme}
              onClick={onImageUpload}
            >
              <AddBoxOutlinedIcon />
            </Icon>
          )}
        </>
      )}
    </ImageUploading>
  );
};

export const AddButton = (props) => {
  const { disabled = false, theme = "default", action } = props;

  console.log("I am not the media");

  return (
    <Icon
      aria-label="add"
      disabled={disabled}
      color={theme}
      onClick={() => action()}
    >
      <AddBoxOutlinedIcon />
    </Icon>
  );
};
