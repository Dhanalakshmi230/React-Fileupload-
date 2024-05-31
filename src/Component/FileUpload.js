import React, { useState } from 'react';
import axios from "axios";

export default function FileUpload() {
  const [image, setImages] = useState([]);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState("");

  const uploadFiles = (formData, retries = 3, delay = 3000) => {
    axios.post('http://localhost:8080/image/fileSystem', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent) => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress({ started: true, pc: percentCompleted });
      }
    })
      .then(res => {
        setMsg("Upload successful");
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
        if (err.response) {
          console.log('Error response:', err.response.data);
        }
        if (err.response && err.response.status === 503 && retries > 0) {
          setMsg(`Service unavailable, retrying in ${delay / 1000} seconds... (${retries} retries left)`);
          setTimeout(() => uploadFiles(formData, retries - 1, delay * 2), delay); // Retry with exponential backoff
        } else {
          setMsg("Upload failed");
        }
      });
  }

  function handleUpload(event) {
    event.preventDefault();
    if (!image || image.length === 0) {
      setMsg("No file selected");
      return;
    }
    const formData = new FormData();
    Array.from(image).forEach((file, index) => {
      formData.append(`image`, file); // Set the key as "image" for each file
    });
  
    setMsg("Uploading...");
    setProgress({ started: true, pc: 0 });
    uploadFiles(formData);
  }
  

  return (
    <div>
      <h2>File Uploading in React Js</h2>
      <form onSubmit={handleUpload}>
        <input type='file' multiple onChange={(e) => setImages(e.target.files)} />
        <button type="submit">Upload</button>
        {progress.started && <progress max="100" value={progress.pc}></progress>}
        {msg && <span>{msg}</span>}
      </form>
    </div>
  );
}
