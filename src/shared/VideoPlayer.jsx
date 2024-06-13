// VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const VideoPlayer = ({ url, onClose }) => {
    return (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white">
            <div className="relative w-full h-full flex items-center justify-center">
                <button className="absolute top-4 right-4 text-black z-30" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} size="2x" className='text-red-600' />
                </button>
                <ReactPlayer url={url} controls width="80%" height="80%" />
            </div>
        </div>
    );
};

export default VideoPlayer;
