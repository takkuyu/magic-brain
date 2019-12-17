import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageURL, box}) => {
    return (
        
            <div className="picture-container br3">
                <img id ='inputImage' alt='' src={imageURL} />
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
    );
}

export default FaceRecognition;