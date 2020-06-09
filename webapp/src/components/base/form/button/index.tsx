import React from 'react';

const Button = (props: any) => {
    return (
    <button onClick={() => props.onClick?.()}>{props.label}</button>
    );
}

export default Button;