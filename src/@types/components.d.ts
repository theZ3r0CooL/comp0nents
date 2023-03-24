import { ComponentPropsWithoutRef, ReactNode } from 'react';

namespace BarGraph {

    interface Props extends ComponentPropsWithoutRef<'div'>{
        data: Array<number>,
        height?: string
    }
}

namespace Cursor {

    //  inWork: finish
    type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

    interface ToolTip {
        message: string;
    }

    interface InfoPane extends ToolTip {
        title: string;
        detail: string;
    }

    //  inWork: finish
    type ToolTipMessageContent = MessageOf<ToolTip>;

    type Position = {
        x: number;
        y: number;
    };

    type Style = 'persist' | 'pop' | 'fade';

    /*type E1<X> = <T>() => T extends X ? 0 : 1;
    type E2<X> = <T>() => T extends X ? 0 : 1;
    type IsEqual<X, Y> = E1<X> extends E2<Y> ? true : false;
    type Includes<T extends readonly unknown[], U> = true extends {
        [key in keyof T]: IsEqual<T[key], U>
    }[number] ? true : false;*/

    type Opacity = number;

    /*function assertOpacity(value: number): asserts value is Opacity {
        if (value < 0 || value > 1) {
            throw new Error(`Value ${value} is not a valid Percent ([0..1]).`);
        }
    }*/

    //  inWork: finish
    type Messages = {
        [key: string]: ToolTip | InfoPane;
    };

    interface Props extends ComponentPropsWithoutRef<'div'>{
        messages?: Map<string, ToolTip | InfoPane>;
        style?: Style;
        background?: string;
        border?: string;
        borderRadius?: string;
        color?: string;
        opacity?: Opacity
    }
}

namespace LoadingOverlay {
    import { ReactNode } from 'react';

    type Animation = 'none' | 'grid' | 'cmy';
    type Size = 'wrap' | 'full';

    interface Props extends ComponentPropsWithoutRef<'div'>{
        isLoading: boolean;
        animation?: Animation;
        size?: Size;
        children: ReactNode;
    }
}

namespace StyledButton {
    import { ReactNode } from 'react';

    type BuiltInClass = 'btn-small' | 'btn-large' | 'btn-round';

    interface Props extends ComponentPropsWithoutRef<'button'> {
        classNames?: Array<string | BuiltInClass> | string | BuiltInClass
        children: ReactNode;
    }
}

namespace StyledCheckbox {

    interface Props extends ComponentPropsWithoutRef<'input'> {
        onChecked: (checked: boolean) => void;
        portion?: boolean;
        isChecked?: boolean;
    }
}

namespace StyledInput {

    type InputType = 'text' | 'password';

    interface Props extends ComponentPropsWithoutRef<'input'> {
        id: string;
        classNames?: string;
        inputType?: InputType;
        placeholder?: string;
        initialValue?: string;
        hasError?: boolean;
    }
}
