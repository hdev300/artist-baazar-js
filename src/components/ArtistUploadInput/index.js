import React, { useCallback, useState } from "react";
// import { UploadFieldProps } from "../../types/components.types";
import { FormHelperText, Grid } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { Close } from "@mui/icons-material";

const MyUploadField = (props) => {
  const [fileError, setFileError] = useState("");
  const {
    file,
    preview,
    error,
    onSelectFile,
    onDeleteFile,
    uploadType,
    label,
  } = props;
  const MAX_FILE_SIZE_IMAGE = 5242880; // 5mb
  const MAX_FILE_SIZE_VIDEO = 5242880; // 5mb
  const ACCEPTED_IMAGES = { "image/*": [".jpg", ".jpeg", ".png"] };
  const ACCEPTED_VIDEOS = { "video/*": [".mpeg", ".mp4", ".mov"] };

  const videoValidation = (file) => {
    const video = document.createElement("video");
    video.src = URL?.createObjectURL(file);
    video.onloadedmetadata = () => {
      const duration = video.duration;
      if (file.size > MAX_FILE_SIZE_VIDEO) {
        setFileError("File Size Limit Exceeded");
        return {
          code: "file-too-large",
          message: `File Size Limit Exceeded`,
        };
      } else if (duration > 15) {
        setFileError("File Duration Limit Exceeded");
        return {
          code: "file-duration-large",
          message: `File Duration Limit Exceeded`,
        };
      }
      setFileError("");
      return null;
    };
    return null;
  };

  const imageValidation = (file) => {
    if (file.size > MAX_FILE_SIZE_IMAGE) {
      setFileError("File Size Limit Exceeded");
      return {
        code: "file-too-large",
        message: `File Size Limit Exceeded`,
      };
    }
    setFileError("");
    return null;
  };

  const onDrop = useCallback((acceptedFiles) => {
    onSelectFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: uploadType === "video" ? ACCEPTED_VIDEOS : ACCEPTED_IMAGES,
    validator: uploadType === "video" ? videoValidation : imageValidation,
  });

  const getPreview = (url) => {
    return uploadType === "video" && url.includes("http") ? (
      <video width="100%" height="240" controls src={url} autoPlay />
    ) : (
      <img
        src={url || "/images/filedropIcon.jpg"}
        draggable="false"
        alt="preview"
        style={{
          //   padding: "5px",
          objectFit: "contain",
          width: "100%",
          height: 90,
        }}
      />
    );
  };

  return (
    <Grid container>
      <Grid item xs={12} pb={1}>
        {label}
      </Grid>
      <Grid
        item
        xs={12}
        md={2}
        {...getRootProps()}
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <input {...getInputProps()} />
        {file ? (
          <div style={{ width: "100%", position: "relative" }}>
            <div
              onClick={(e) => {
                e.stopPropagation();
                onDeleteFile();
              }}
              style={{ zIndex: 9999, position: "absolute", right: 0 }}
            >
              <Close sx={{ color: "red" }} />
            </div>

            {getPreview(typeof file === "string" ? file : URL?.createObjectURL(file))}
          </div>
        ) : (
          getPreview(preview ? preview : "")
        )}
      </Grid>

      {(fileError || error) && (
        <Grid item xs={12}>
          <FormHelperText sx={{ marginLeft: "10px", color: "#D32F2F" }}>
            {fileError || error}
          </FormHelperText>
        </Grid>
      )}
    </Grid>
  );
};

export default MyUploadField;

