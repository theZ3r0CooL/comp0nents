import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BarGraph } from '../index';
import { useRef } from '@storybook/addons';

export default {
    title: 'Components/BarGraph',
    component: BarGraph,
    args: {
        data: [10, 10, 20, 25, 35, 40, 20],
        height: '100px'
    }
} as ComponentMeta<typeof BarGraph>;

const Template: ComponentStory<typeof BarGraph> = ({ data }, args) => {

    const barGraphRef = useRef<HTMLDivElement | null>(null);

    return(
        <BarGraph ref={barGraphRef} data={data} {...args} />
    );
};

export const Default = Template.bind({});
