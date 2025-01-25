import GetImage from './Image component/getImage'
import GetSingleImage from './Image component/getSingleImage'
import UploadImage from './Image component/uploadImage'

function App() {
  return (
    <>
      <UploadImage />
      <GetImage/>
      {/* <GetSingleImage id={2}/> */}
    </>
  )
}

export default App
