import { useState, useEffect } from "react"
import axios from 'axios'

function getImage() {

    const [images, setImages] = useState([])

    useEffect(() => {
        fetchImages();
      }, []);    

    const fetchImages = async () => {
        try {
            const response = await axios.get("http://localhost:8080/upload/images")
            setImages(response.data)
            // console.log(response.data)
        }
        catch(error){
            console.log("Error while fetching : " + error)
        }
    }

    const getImageUrl = (id) => `http://localhost:8080/upload/${id}`

    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', width:'100%', height:'90vh', flexWrap:'wrap'}}>{
            images.map((image) => (
                <div key={image.id} style={{border: '1px solid #121212', padding:'10px', margin:'5px'}}>
                    <img src={getImageUrl(image.id)} alt={image.name} style={{ width:'150px', height:'150px', objectFit:'cover'}}/>
                    <p>{image.name}</p>
                </div>
            ))
        }</div>
    )

}

export default getImage
