import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect, useRef, useState } from '@storybook/addons';

import { StyledCheckbox } from '../index';

export default {
    title: 'Components/StyledCheckbox',
    component: StyledCheckbox
} as ComponentMeta<typeof StyledCheckbox>;

const Template: ComponentStory<typeof StyledCheckbox> = (args) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        console.log('checked', checked);
    }, [checked]);

    return(
        <div>
            <StyledCheckbox ref={inputRef} onChecked={setChecked} isChecked={checked} {...args} />
        </div>
    );
};

export const Default = Template.bind({});
/*Default.args = {
    onChecked: console.log
};*/

export const Partial = Template.bind({});
Partial.args = {
    portion: true
}
