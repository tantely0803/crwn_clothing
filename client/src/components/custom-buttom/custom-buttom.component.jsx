import React from 'react';

import './custom-buttom.styles.scss';

const CustomButtom = ({ children , isGoogleSignIn , inverted ,  ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''  }  ${isGoogleSignIn ? 'google-sign-in' : ''  } custom-buttom`} {...otherProps} >
            {children}
    </button>   
)

export default CustomButtom;