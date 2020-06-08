import React from 'react';
import './index.css';

function Main(props: any) {
    return (
        <div className="main-container">{props.children}</div>
    );
}

export default Main;