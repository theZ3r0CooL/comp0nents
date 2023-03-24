import { forwardRef, useEffect, useState } from 'react';
import './LoadingOverlay.css';

import { LoadingOverlay as NS } from '../../@types/components';

const Animation = (animation: NS.Animation, size: NS.Size) => {

    const randomTime = () => {
        return Math.floor(Math.random() * 1000);
    };

    const Square = (index: number) => {
        const [isFlipped, setIsFlipped] = useState(false);
        useEffect(() => {
            const intervalId = setInterval(() => {
                setIsFlipped(prev => {
                    return !prev;
                });
            }, randomTime() * 10);
            return () => clearInterval(intervalId);
        }, [isFlipped, setIsFlipped]);

        return (
            <div key={index} className='loading-square'>
                <div className={`sq-front ${isFlipped ? 'flipped' : ''}`}/>
                <div className={`sq-back ${isFlipped ? 'flipped' : ''}`}/>
            </div>
        );

    };

    switch (animation) {
        case 'grid':
            return (
                <div className='loading-grid'>
                    {Array.from(Array(25).keys()).map((i) => Square(i))}
                </div>
            );
        case 'cmy':
            return (
                <div className={`cube ${size}`}>
                    <div className='cyan'></div>
                    <div className='magenta'></div>
                    <div className='yellow'></div>
                </div>
            );
        default:
            return;
    }
}

const LoadingOverlay = forwardRef<HTMLDivElement, NS.Props>((
    { isLoading, animation = 'grid', size = 'full', children }, ref
) => {
    // inWork: stagger showing animation when loading completes then fade out animation before removing blur
    /*const [showAnimation, setShowAnimation] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);

    useEffect(() => {
        if (isLoading) {
            const timeout = setTimeout(() => {
                setShowOverlay(true);
            }, 500);
            setTimer(timeout);
        } else {
            setShowOverlay(false);
            if (timer !== undefined) {
                clearTimeout(timer);
            }
        }
    }, [isLoading, timer]);*/

    return (
        <div ref={ref} className={`loading-wrapper ${isLoading ? 'show' : 'hide'} ${size}`}>
            {children}
            <div className='loading-anim-container' style={{ display: isLoading ? 'block' : 'none' }}>
                {Animation(animation, size)}
            </div>
        </div>

    );
});

LoadingOverlay.displayName = 'LoadingOverlay';

export default LoadingOverlay;
