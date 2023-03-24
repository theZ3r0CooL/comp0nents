import { useEffect, useState } from 'react';

type Size = {
    width?: number,
    height?: number
};

export const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined,
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};
