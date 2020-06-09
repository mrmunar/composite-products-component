import React from 'react';

const Button = (props: any) => {
    return (
        <button
            onClick={() => props.onClick?.()}
            className={props.className}
        >
            {props.label}
        </button>
    );
}

export default Button;