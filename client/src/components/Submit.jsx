import React, { useState } from 'react';
import '../css/submit.css';
import aa from '../public/house-solid (1).svg';

const ImageUpload = () => {
    const [imageSrc, setImageSrc] = useState(aa);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="image-upload">
            <label htmlFor="file-input">
                <img id="upload-image" src={imageSrc} alt="Click to upload image" />
            </label>
            <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default ImageUpload;
