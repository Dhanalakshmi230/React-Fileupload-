
import React, { useState } from 'react'

export default function FileUpload() {
    const [file, setFile] = useState()
    function handleFile(event) {
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }
  return (
    <div>
          <h2>File Uploading in React Js</h2>
          <form>
              <input type='file' name='file' onChange={handleFile} />
         <button>Upload</button>
          </form>
    </div>
  )
}
