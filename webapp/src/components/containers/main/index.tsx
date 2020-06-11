import React from 'react';
import './index.css';

function Main(props: any) {
    return (
        <div className="main-container" data-testid="main-container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="text-left">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;