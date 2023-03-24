import { forwardRef, useEffect, useState } from 'react';
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
        persist = false,
        background = '#EFEFEF',
        border = '2px solid #0F0F0F',
        borderRadius = '10px',
        color = '#0F0F0F',
        opacity = 0.9
    }, ref) => {
    const [position, setPosition] = useState<NS.Position>({ x: 0, y: 0 });
    const [id, setId] = useState<string | undefined>(undefined);

    const handleMouseMove = (event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = (event: MouseEvent) => {
        if (event.currentTarget instanceof HTMLElement) {
            setId(event.currentTarget.id);
        }
    };

    const handleMouseLeave = () => {
        setId(undefined);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

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

    return (
        <div ref={ref} id='cCircle' style={{
            visibility: (id || persist) ? 'visible' : 'hidden',
            width: id ? 'auto' : '20px',
            height: id ? 'auto' : '20px',
            opacity: isOpacity(opacity) ? opacity : 0.9,
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
