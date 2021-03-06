import React from 'react';
import './index.css';

const Button = (props: any) => {
    return (
        <button
            onClick={() => props.onClick?.()}
            className={props.className}
            data-testid="button"
        >
            {props.label}
        </button>
    );
}

export default Button;