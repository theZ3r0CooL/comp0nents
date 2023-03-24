import { forwardRef } from 'react';
import './StyledCheckbox.css';
import { StyledCheckbox as NS } from '../../@types/components';

/** checkbox component styled to represent brand */
const StyledCheckbox = forwardRef<HTMLInputElement, NS.Props>(
    ({ onChecked, portion = false, isChecked = false }, ref) => {
        return (
            // inWork: finish
            // <div className={`checkbox-body ${portion ? 'checkbox-portion' : ''}`} unselectable='on'>
            //     <input ref={ref} type='checkbox' onChange={onChecked} checked={isChecked} unselectable='on'/>
            <div className={`checkbox-body ${portion ? 'checkbox-portion' : ''}`} >
                <input ref={ref} type='checkbox' onChange={(e) => onChecked(e.currentTarget.checked)} checked={isChecked} />
                <div className='checkbox-check'>
                    {portion ?
                        <span className='check-portion'/> :
                        <>
                            <span className='check-top'/>
                            <span className='check-bottom'/>
                        </>}
                </div>
            </div>
        );
    }
);

StyledCheckbox.displayName = 'StyledCheckbox';

export default StyledCheckbox;
