import { ComponentStory, Meta } from '@storybook/react';

import { LoadingOverlay } from '../index';

const animations = ['none', 'grid', 'cmy'];
const sizes = ['full', 'wrap'];

const argTypes = {
    animation: {
        options: animations,
        control: 'select',
        mapping: animations,
        description: 'Selection of built-in loading animations',
        defaultValue: 'grid'
    },
    size: {
        options: sizes,
        control: 'select',
        mapping: sizes,
        description: 'Fill the parent or wrap the content.',
        defaultValue: 'full'
    }
};

export default {
    title: 'Components/LoadingOverlay',
    component: LoadingOverlay,
    args: {
        children:
            <div style={{
                height: '100%', width: '100%', background: '#909090', display: 'flex', margin: 0,
                flexDirection: 'column', padding: '4rem 0', placeContent: 'center', placeItems: 'center'
            }}>
                <h1>This is a header for some content</h1>
                <p>This is some content right here.</p>
                <p>This is some more content right here.</p>
                <p>And here's a little more content right here.</p>
                <img src='https://raw.githubusercontent.com/theZ3r0CooL/comp0nents/main/src/assets/icon.svg' alt='comp0nents logo'/>
                <caption>That's the logo for this lib just for a splash of vibrancy and color.</caption>
            </div>
    },
    argTypes: {
        isLoading: {
            type: 'boolean',
            defaultValue: true,
            description: 'enable/disable the loading overlay'
        }
    }
} as Meta;

const TemplateEntireView: ComponentStory<typeof LoadingOverlay> = ({ isLoading, animation, size, children }, args) => {
    return(
        <LoadingOverlay isLoading={isLoading} animation={animation} size={size} {...args}>
            {children}
        </LoadingOverlay>
    );
};

export const EntireView = TemplateEntireView.bind({});
EntireView.argTypes = argTypes;

const TemplateSingleComponent: ComponentStory<typeof LoadingOverlay> = ({ isLoading, animation, size, children }, args) => {
    return(
        <div style={{
            height: '100%', width: '100%', display: 'flex', placeContent: 'center',
            placeItems: 'center', justifyContent: 'space-evenly'
        }}>
            <h1>Some Other Content</h1>
            <LoadingOverlay isLoading={isLoading} animation={animation} size={size} {...args}>
                {children}
            </LoadingOverlay>
        </div>
    );
};

export const SingleComponent = TemplateSingleComponent.bind({});
SingleComponent.argTypes = argTypes;
