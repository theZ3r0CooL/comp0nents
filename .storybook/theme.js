import { create } from '@storybook/theming';

export default create({
    base: 'dark',
    brandTitle: 'comp0nents',
    // inWork: change to pages url
    brandUrl: 'https://www.github.com/theZ3r0CooL/comp0nents#readme',
    brandImage: 'https://raw.githubusercontent.com/theZ3r0CooL/comp0nents/main/src/assets/icon.svg',
    // brandImage: 'https://github.com/theZ3r0CooL/comp0nents/blob/main/src/assets/icon.svg?raw=true',
    brandTarget: '_self',

    colorSecondary: '#006280',
    textColor: '#00C3FF',
    barSelectedColor: 'hotpink',
    barTextColor: '#32A8CD',
    inputTextColor: 'hotpink',
    // inputTextColor: '#99d9fc',

    appBg: '#333333',
    appContentBg: '#363636',
    barBg: '#434343',
    inputBg: '#434343',
    appBorderColor: '#636363',
    textMutedColor: '#A3A3A3',

    /*textInverseColor: 'red',
    colorPrimary: 'lime',*/
});
