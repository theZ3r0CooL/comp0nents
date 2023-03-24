import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useRef } from '@storybook/addons';

import { StyledInput } from '../index';

export default {
    title: 'Components/StyledInput',
    component: StyledInput
} as ComponentMeta<typeof StyledInput>;

const Template: ComponentStory<typeof StyledInput> = (args) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    return(
        <div>
            <StyledInput ref={inputRef} {...args} />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    id: 'demo-input'
};

export const Password = Template.bind({});
Password.args = {
    id: 'demo-input',
    inputType: 'password'
};
