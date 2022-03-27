import React, { useState } from "react";
import Modal from "react-modal";
function VideoModal({ url, openModal, setIsOpen }) {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setIsOpen(false)}
      style={{
        content: {
          backgroundColor: "transparent",
          border: "none",
          width: "70%",
          height: "70%",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      contentLabel="Video Demo"
    >
      <video src={url} width={"100%"} height={"100%"} controls></video>
    </Modal>
  );
}

export default VideoModal;
