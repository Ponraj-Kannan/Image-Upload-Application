import { useState, useEffect } from "react"
import axios from 'axios'

function getSingleImage(props) {

    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
      if (props.id) {
        fetchImage(props.id);
      }
    }, [props.id]);
  
    const fetchImage = async (id) => {
      try {
        const response = await axios.get(`http://localhost:8080/upload/${id}`, {
          responseType: "arraybuffer", // Ensure the response is handled as binary data
        });
  
        const blob = new Blob([response.data], { type: response.headers["content-type"] });
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
      } 
      catch (error) {
        console.error("Error fetching image:", error);
      }
    };
  

    return (
        <div style={{display:'flex', flex:'wrap', gap:'10px'}}>
            <div>
                {imageSrc ? <img src={imageSrc} alt="Uploaded" style={{ maxWidth: "100%" }} /> : <p>Loading image...</p>}
            </div>
        </div>
    )

}

export default getSingleImage
