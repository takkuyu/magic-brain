import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ celebrity, onInputChange, onButtonSubmit }) => {

    return (
        <div className="form-container">
            <p className='f3'>
                {'This Magic Brain detects celebrity in your pictures and returns probability score.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-black'
                        onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;