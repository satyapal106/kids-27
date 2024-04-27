import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
export default VideoPlayer => {
    return (
        <Player
            playsInline
            poster="images/poster.webp"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
    );
};

