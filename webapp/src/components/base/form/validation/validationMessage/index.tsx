import React from 'react';

const ValidationMessage = (props: any) => {
    if (!props.valid) {
        return (
            <div className="p-1 m-2 alert alert-danger" data-testid="validation-msg">{props.message}</div>
        )
    }
    return null;
}

export default ValidationMessage;