import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StyledButton } from '../index';

export default {
    title: 'Components/StyledButton',
    component: StyledButton,
    args: {
        children: 'My Button!'
    },
    argTypes: {
        enabled: {
            type: 'boolean',
            defaultValue: true,
            description: 'enable/disable styling'
        }
    }
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = ({children, classNames}, args) => {
    return(
        <StyledButton classNames={classNames} {...args}>
            {children}
        </StyledButton>
    );
};

export const BuiltIn = Template.bind({});
BuiltIn.argTypes = {
    classNames: {
        control: 'inline-check',
        options: ['btn-small', 'btn-large', 'btn-round'],
        description: 'built in style classes'
    }
};


export const Small = Template.bind({});
Small.args = {
    classNames: 'btn-small'
};

// inWork: style sidebar titles, add stuff like parenthesis
export const MediumDefault = Template.bind({});

export const Large = Template.bind({});
Large.args = {
    classNames: 'btn-large'
};

export const Rounded = Template.bind({});
Rounded.args = {
    classNames: 'btn-round'
};
