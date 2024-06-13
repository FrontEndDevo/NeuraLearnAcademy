// ImageViewer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ImageViewer = ({ url, onClose }) => {
    return (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-200 shadow mx-5 ">
            <div className="relative w-full h-full flex items-center justify-center">
                <button className="absolute top-4 right-4 text-black z-30" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} size="2x" className='text-red-600' />
                </button>
                <img src={url} alt="Displayed content" className="max-w-full max-h-full" />
            </div>
        </div>
    );
};

export default ImageViewer;
