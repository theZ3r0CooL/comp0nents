# comp0nents

<hr style='border-top: 3px solid #bbb;'/>

<div align='center'>

<img src='src/assets/icon.svg' alt='comp0nents' width='100%' height='auto' style='max-width: 20rem'/>
<h3 style='margin: 0;'>A Library of Beautiful React Components.</h3>

[//]: # ([![JavaScript Style Guide]&#40;https://img.shields.io/badge/code_style-standard-brightgreen.svg&#41;]&#40;https://standardjs.com&#41;)

![GitHub package.json version](https://img.shields.io/github/package-json/v/theZ3r0CooL/comp0nents)
[![NPM](https://img.shields.io/npm/v/phot0s.svg)](https://www.npmjs.com/package/comp0nents)
![GitHub](https://img.shields.io/github/license/theZ3r0CooL/comp0nents)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](Link to pages)

![GitHub Sponsors](https://img.shields.io/github/sponsors/theZ3r0CooL?logo=GitHub)
[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/theZ3r0CooL)

</div>

<hr style='border-top: 3px solid #bbb;'/>

Just a few styled **Components** for convenience and inspiration.<br/>
View their code in `COMPONENTS` section of the [***Storybook***](Link to pages) to learn how they work and start using [***comp0nents***](https://www.github.com/theZ3r0CooL/comp0nents#readme) in your project as soon as possible.

## Install

```bash
npm install --save comp0nents
```

## Usage

```tsx
import React, { useRef } from 'react';

import { StyledInput } from 'comp0nents';

const App = () => {
    
    const imgRef = useRef(null);

    return (
        <div className='app'>
            <StyledInput ref={imgRef} />
        </div>
    );
};

export default App;
```

## License

Apache-2.0 © 

## Contributors
>### theZ3r0CooL
>[GitHub](https://github.com/theZ3r0CooL)<br/>
>[Portfolio](https://theZ3r0CooL.github.io)
