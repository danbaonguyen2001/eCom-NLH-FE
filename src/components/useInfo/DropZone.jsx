import React, { useCallback, useMemo, useState } from "react";

import { useDropzone } from "react-dropzone";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "@material-ui/core";
import userController from "../../features/user/function";
const DropZone = ({ userDataAvatar }) => {
  //
  //
  const [avatar, setAvatar] = useState(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const onDrop = useCallback((acceptFiles) => {
    if (acceptFiles.length > 0) {
      const url = acceptFiles[0];
      const binaryData = [];
      binaryData.push(url);
      //   show up
      setAvatar(
        URL.createObjectURL(new Blob(binaryData, { type: "application/zip" }))
      );
      //   upload to DB
      setFile(acceptFiles[0]);
      setFileName(acceptFiles[0].name);
    } else {
      alert("File này không hợp lệ");
    }
  }, []);
  //#region drop zone style
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    acceptedFiles,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
      "image/webp": [".webp"],
    },
    maxFiles: 1,
  });
  //   style
  const baseStyle = {
    flex: 0.7,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 0",
    borderWidth: 2,
    borderRadius: "2%",
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    transition: "all .24s ease-in-out",
    cursor: "crosshair",
  };

  const focusedStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
    color: "#00e676",
  };

  const rejectStyle = {
    borderColor: "white",
    color: "white",
    backgroundColor: "#ff1744",
  };
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  //   #endregion
  // Ours
  //   Handler for update img bt click
  const handleUploadImg = async () => {
    let formData = new FormData();
    formData.append("img", file, fileName);
    const urlImg = avatar;
    const res = await userController.updateAvatar({ formData, urlImg });

    const { status, data } = res;
    if (status) {
      setAvatar(data);
      alert("Cập nhật ảnh đại diện thành công");
    } else {
      console.log("Cant update avatar");
    }
  };
  return (
    <div className="user-infor-img">
      {/* Avt res */}
      <LazyLoadImage
        className="user-infor-img__img"
        style={{ borderRadius: "50%", height: "20rem" }}
        src={avatar || userDataAvatar}
        alt="Đang tải"
      />
      {/* Drop zone */}
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          isDragAccept ? (
            <p>Tải ảnh</p>
          ) : (
            <p>File này không hợp lệ</p>
          )
        ) : acceptedFiles.length > 0 ? (
          <p>{acceptedFiles[0].name.concat(".").slice(-25, -1)}</p>
        ) : (
          <p>Chọn hoặc kéo thả ảnh đại diện</p>
        )}
      </div>
      {acceptedFiles.length > 0 ? (
        <Button
          onClick={handleUploadImg}
          className="drop__button"
          variant="contained"
        >
          {" "}
          Xác nhận{" "}
        </Button>
      ) : null}
    </div>
  );
};

export default DropZone;
