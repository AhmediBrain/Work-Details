import React from 'react'
import styled from 'styled-components'
import { useState, useRef } from "react";
import { Button } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1%;

`

// const ViewTransferTable = () => {
//   return (
//     <Container>
//       <h1>View Transfer Table</h1>

     
export default function FilePreviewer() {
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const filePicekerRef = useRef();
  function previewFile(e) {
    // Reading New File (open file Picker Box)
    const reader = new FileReader();
    // Gettting Selected File (user can select multiple but we are choosing only one)
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
    // As the File loaded then set the stage as per the file type
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("image")) {
        setImagePreview(readerEvent.target.result);
      } else if (selectedFile.type.includes("video")) {
        setVideoPreview(readerEvent.target.result);
      }
    };
  }

  function clearFiles() {
    setVideoPreview(null);
  }
  
  return (
    <Container>
      <h1>Preview Image/Video</h1>
      <div className="btn-container">
        <input ref={filePicekerRef} accept="image/*, video/*" onChange={previewFile} type="file" hidden />
        <Button className="btn" onClick={() => filePicekerRef.current.click()}>Choose Video File</Button>
        <Button className="btn" onClick={clearFiles}>x</Button>
      </div>
      <div className="preview">
        {imagePreview != null && <img src={imagePreview} alt="" />}
        {videoPreview != null && <video controls src={videoPreview}></video>}
      </div>
    </Container>
  );
}

//     </Container>
//   )
// }

// export default ViewTransferTable