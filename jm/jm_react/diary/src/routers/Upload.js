import React, { useRef, useState } from 'react'
import Axios from 'axios'

const Upload = () => {
  const fileRef = useRef()
  const [payload, setPayload] = useState(null)

  const onChangeFile = (ev) => {
    const {
      target: { files },
    } = ev
    setPayload(files)
  }
  const upload = async () => {
    try {
      const formData = new FormData()
      for (let i in payload) {
        formData.append('file', payload[i])
      }
      const { data } = await Axios.post(
        'http://localhost/api/upload',
        formData,
        { withCredentials: true }
      )
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ margin: '100px' }}>
      <h1>Upload Page</h1>
      <input
        type="file"
        ref={fileRef}
        multiple
        onChange={onChangeFile}
        accept="*"
      />
      <button onClick={upload}>업로드</button>
    </div>
  )
}
export default Upload
