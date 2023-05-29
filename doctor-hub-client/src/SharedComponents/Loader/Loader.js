import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Loader = ({children}) => {
    return (
        <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_Zus25A5BNo.json"
            className="h-screen w-full p-16"
        >
            {children}
        </Player>
    );
};

export default Loader;