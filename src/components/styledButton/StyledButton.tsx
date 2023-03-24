import { forwardRef } from 'react';
import './StyledButton.css';
import { StyledButton as NS } from '../../@types/components';

const StyledButton = forwardRef<HTMLButtonElement, NS.Props>(
    ({ classNames = [], children }, ref) => {

        return (
            <button ref={ref} className={Array.isArray(classNames) ? classNames.join(' ') : classNames}>
                {children}
            </button>
        );
    }
);

StyledButton.displayName = 'StyledButton';

export default StyledButton;
