import { forwardRef } from 'react';
import './BarGraph.css';
import { BarGraph as NS } from '../../@types/components';

const BarGraph = forwardRef<HTMLDivElement, NS.Props>(({ data, height = '100%' }, ref) => {

    const maxDataValue = Math.max(...data);

    return (
        <div className='bar-graph' ref={ref} style={{ height: height }}>
            {data.map((value, index) => (
                <div key={index} className='bar-bar' style={{ height: `${(value / maxDataValue) * 100}%` }}/>
            ))}
        </div>
    );
});

export default BarGraph
