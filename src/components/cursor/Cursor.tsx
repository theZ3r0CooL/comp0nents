import { forwardRef, useCallback, useEffect, useState } from 'react';
import './Cursor.css';
import { Cursor as NS } from '../../@types/components';

function isInfoPane(message: any): message is NS.InfoPane {
    return message.title !== undefined;
}

const isOpacity = (value: NS.Opacity): boolean => {
    return value as number >= 0 && value as number <= 1;
};

const Content = (content: NS.ToolTip | NS.InfoPane) => {
    return (isInfoPane(content)
        ? <div className='info-pane'>
                <p>{content.title}</p>
                <div className='pane-details'>
                    <p>{content.message}</p>
                    <p>{content.detail}</p>
                </div>
            </div>
            :  content.message
    );
}

const Cursor = forwardRef<HTMLDivElement, NS.Props>((
    {
        messages = new Map(),
        style = 'persist',
        background = '#EFEFEF',
        border = '2px solid #0F0F0F',
        borderRadius = '10px',
        color = '#0F0F0F',
        opacity = 0.9
    }, ref) => {
    const [position, setPosition] = useState<NS.Position>({ x: 0, y: 0 });
    const [id, setId] = useState<string | undefined>(undefined);
    const [isVisible, setIsVisible] = useState<boolean>(style === 'persist');
    const [isEntered, setIsEntered] = useState<boolean>(false);

    const handleMouseMove = (event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
        setIsVisible(style === 'fade');
    };

    const handleMouseEnter = (event: MouseEvent) => {
        if (event.currentTarget instanceof HTMLElement) {
            setId(event.currentTarget.id);
            setIsEntered(true);
        }
    };

    const handleMouseLeave = () => {
        setId(undefined);
        setIsEntered(false);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timer;
        if (isVisible && style === 'fade') {
            interval = setInterval(() => {
                setIsVisible(false);
            }, 3000);
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, [isVisible, style]);

    useEffect(() => {
        if (messages.size > 0) {
            messages.forEach((_, key) => {
                const element = document.getElementById(key);
                if (element) {
                    element.addEventListener('mouseenter', handleMouseEnter);
                    element.addEventListener('mouseleave', handleMouseLeave);
                }
            });

            return () => {
                messages.forEach((_, key) => {
                    const element = document.getElementById(key);
                    if (element) {
                        element.removeEventListener('mouseenter', handleMouseEnter);
                        element.removeEventListener('mouseleave', handleMouseLeave);
                    }
                });
            }
        }
    }, [messages]);

    const getOpacity = useCallback((): number => {
        return (style === 'persist' || isEntered || isVisible)
            ? isOpacity(opacity)
                ? opacity
                : 0.9
            : 0;
    }, [style, opacity, isEntered, isVisible]);

    return (
        <div ref={ref} id='cCircle'
             style={{
                width: id ? 'auto' : '20px',
                height: id ? 'auto' : '20px',
                opacity: getOpacity(),
                borderRadius: id ? borderRadius : '15px',
                backgroundColor: background,
                border: border,
                color: color,
                padding: id ? '10px' : '0px',
                top: position.y,
                left: position.x
            }}>
            {id &&
                Content(messages.get(id))
            }
        </div>
    );
});

Cursor.displayName = 'Curs0r';

export default Cursor;
