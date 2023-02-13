import { BsCloudUpload } from 'react-icons/bs';

const PhotoUpload = () => {
    return ( 
        <div className="photo-upload-btn d-flex flex-column align-items-center justify-content-center mb-3">
                           <BsCloudUpload className="xxl-icon" />
                           <p>Browse to upload photo</p>
                           <input type="file" className="d-none" />
                           </div>
     );
}
 
export default PhotoUpload;