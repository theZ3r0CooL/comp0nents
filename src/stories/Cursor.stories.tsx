import { ChangeEvent } from 'react';
import { ComponentStory, Meta, Story } from '@storybook/react';
import { useEffect, useState } from '@storybook/addons';
import { action } from '@storybook/addon-actions';

import { Cursor } from '../index';
import { Cursor as NS } from '../@types/components';

export default {
    title: 'Components/Cursor',
    component: Cursor
} as Meta;

const Template: ComponentStory<typeof Cursor> = (
    { messages, persist, background, border, borderRadius, color, opacity}, args) => {
    const boxStyle = {
        display: 'inline-block',
        width: '8%',
        height: '8%',
        margin: '1%',
        padding: '2%',
        fontFamily: 'Arial Bold',
        color: 'cornflowerblue',
        background: 'darkslategrey',
        borderRadius: '1rem',
        border: 'solid 1px black',
        zIndex: '1'
    };

    return(
        <div style={{ zIndex: '0' }}>
            <Cursor messages={messages} persist={persist} background={background} border={border} borderRadius={borderRadius} color={color} opacity={opacity} {...args} />
            <div id='box0' style={boxStyle}><span>This is box 0</span></div>
            <div id='box1' style={boxStyle}><span>This is box 1</span></div>
            <div id='box2' style={boxStyle}><span>This is box 2</span></div>
        </div>
    );
};

export const Default = Template.bind({});
Default.argTypes = {
    messages: {
        control: {
          type: 'object'
        },
        defaultValue: new Map<string, NS.ToolTip>([
            ['box0', { message: 'Checkout box 0?' }],
            ['box1', { message: 'Learn more about box 1?' }],
            ['box2', { message: 'I don\'t have any more questions, but here\'s box 2!' }]
        ]),
        description: 'a map of messages to display; the key of each should be the <code>id</code> of the element that should show the given message'
    }
};

export const Persist = Template.bind({});
Persist.argTypes = {
    ...Default.argTypes,
    persist: {
        type: 'boolean',
        defaultValue: true,
        description: `always show the cursor; even when not expanded`
    }
};

export const CustomStyle = Template.bind({});
CustomStyle.argTypes = {
    ...Persist.argTypes,
    background: {
        type: 'string',
        defaultValue: '#EFEFEF',
        description: 'the background of the cursor'
    },
    border: {
        type: 'string',
        defaultValue: '2px solid #0F0F0F',
        description: 'the size, style and color of the cursor border'
    },
    borderRadius: {
        type: 'string',
        defaultValue: '10px',
        description: 'the radius of the cursor border while expanded'
    },
    color: {
        type: 'string',
        defaultValue: '#0F0F0F',
        description: 'the color of the cursor text'
    },
    opacity: {
        control: {
            type: 'range',
            min: 0,
            max: 1,
            step: 0.05
        },
        defaultValue: 0.9,
        description: 'the opacity of the cursor'
    }

};

export const Dynamic: Story<NS.Props> = ({messages, persist}, args) => {
    const [fileInfo, setFileInfo] = useState<Map<string, NS.ToolTip | NS.InfoPane> | undefined>(messages);

    function formatFileSize(fileSize: number): string {
        const units = ['B', 'KB', 'MB', 'GB', 'TB'];
        let unitIndex = 0;
        while (fileSize >= 1024 && unitIndex < units.length - 1) {
            fileSize /= 1024;
            unitIndex++;
        }
        return `${fileSize.toFixed(2)} ${units[unitIndex]}`;
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.debug('onChange', event);
        if (event.currentTarget.files && event.currentTarget.files.length > 0) {
            const selectedFile = event.currentTarget.files[0];
            const details = selectedFile.name.split('.');
            setFileInfo((prevMap) => {
                const newMap = prevMap ?? new Map();
                return newMap.set(event.currentTarget.id, {
                    detail: details.pop() ?? 'Error getting filetype',
                    title: details.pop() ?? 'Error getting filename',
                    message: formatFileSize(selectedFile.size)
                });
            });
            action(`File selected: ${selectedFile.name}`)();
        } else {
            setFileInfo(undefined);
        }
    };

    useEffect(() => {
        if (!fileInfo) {
            setFileInfo(
                new Map<string, NS.InfoPane>([
                    ['file-in', {
                        title: 'no file selected',
                        message: '0 B',
                        detail: ''
                    }]
                ])
            );
        }
    }, []);

    return (
        <>
            <Cursor messages={fileInfo} persist={persist} {...args} />
            <div style={{
                height: '200px', width: '100%', alignSelf: 'center', display: 'flex',
                placeContent: 'center', placeItems: 'center', border: '1px solid black',
                borderRadius: '10px', background: 'lightgrey'
            }}>
                <label htmlFor='file-in' style={{ opacity: '0' }}>Selected File:</label>
                <input id='file-in' type='file' onChange={handleFileChange}/>
            </div>
        </>
    );
};
Dynamic.argTypes = {
    persist: {
        type: 'boolean',
        defaultValue: true,
        description: `always show the cursor; even when not expanded`
    }
}
