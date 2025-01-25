import { useState } from "react"
import axios from 'axios'
import './styles.css'

function UploadImage() {

    const [image, setImage] = useState(null)   

    const handleFileChange = (e) =>{
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (image === null) return;

        const formData = new FormData()
        formData.append('file', image)

        try {
            const response = await axios.post("http://localhost:8080/upload", formData, {
              headers: {"Content-Type": "multipart/form-data"},
            });
            alert("Image uploaded successfully!");
          } 
          catch (error) {
            console.error("Error uploading image:", error);
            alert("Upload failed!");
          }

    }

    return (
        <form onSubmit={handleSubmit} style={{margin:'5px', padding:'10px', border: '1px solid #121212'}}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button type="submit" className="btn btn-dark btn-sm">Upload</button>
        </form>
    )

}

export default UploadImage
