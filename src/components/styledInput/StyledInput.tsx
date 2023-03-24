import { forwardRef, useCallback, useState } from 'react';
import './StyledInput.css';
import { StyledInput as NS } from '../../@types/components';

import { IconHide, IconShow } from '../../assets';

/** text input supporting plaintext and password fields and provides user facing error reporting */
const StyledInput = forwardRef<HTMLInputElement, NS.Props>(
    ({ id, classNames = '', inputType = 'text', placeholder = '',
         initialValue = '', hasError = false }, ref) => {
        const [inputValue, setInputValue] = useState<string>(initialValue);
        const [showPassword, setShowPassword] = useState<boolean>(false);

        /*const updateInputValue = useCallback((event: Event) => {
            // inWork: fix alignment
            console.debug('event', event);
            // setInputValue(currentValue => {
            //     return event.target.value ?? currentValue;
            // });
        }, [setInputValue]);*/

        const toggleShowPassword = useCallback(() => {
            setShowPassword(currentShowPassword => {
                return !currentShowPassword;
            });
        }, [setShowPassword]);

        return ((inputType !== 'password') ?
            <input ref={ref} className={`styled-input${hasError ? ' input-err' : ''} ${classNames}`} type={inputType}
                   defaultValue={inputValue} onChange={e => setInputValue(e.currentTarget.value)} placeholder={placeholder} id={id}/> :
                   // defaultValue={inputValue} onChange={() => updateInputValue} placeholder={placeholder} id={id}/> :
            <div className='password-wrapper'>
                <input className={`styled-input${hasError ? ' input-err' : ''} ${classNames}`}
                       type={showPassword ? 'text' : 'password'}
                       defaultValue={inputValue} onChange={e => setInputValue(e.currentTarget.value)}
                       // defaultValue={inputValue} onChange={() => updateInputValue}
                       placeholder={placeholder} id={id}/>
                {showPassword ?
                    <IconHide className='password-button' onClick={toggleShowPassword}/> :
                    <IconShow className='password-button' onClick={toggleShowPassword}/>
                }
            </div>
        );
    }
);

StyledInput.displayName = 'StyledInput';

export default StyledInput;
