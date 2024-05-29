
import React, { useState } from 'react'
import axios from "axios";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  function handleUpload() {
    if (!file) {
      setMsg("No file selected");
      return;
    }
    const fd = new FormData();
    fd.append('file', file);
    setMsg("uploading...");
    setProgress(prevState => {
      return {...prevState,started: true}
    })
    axios.post('https://63cfb761e52f587829a384e5.mockapi.io/Project-Delta', fd, {
      onUploadProgress: (ProgressEvent) => {
        setProgress(prevState => {
          return {
            ...prevState, pc: ProgressEvent.progress * 100
          }
        })
      },
      headers: {
        "Custom-Header": "value",
      }
    })
      .then(res => {
        setMsg("Upload successful");
        console.log(res.data)
      })
      .catch(err => {
        setMsg("Upload failed");
        console.error(err);
  })
    }
  return (
    <div>
          <h2>File Uploading in React Js</h2>
          <form>
              <input type='file' name='file' onChange={(e) =>{setFile(e.target.files[0])} } />
        <button onClick={handleUpload}>Upload</button>
        {progress.started && <progress max="100" value={progress.pc}></progress>}
        {msg && <span max="100" value={msg}></span>}
          </form>
    </div>
  )
}
