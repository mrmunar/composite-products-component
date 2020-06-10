import React from 'react';

const Title = (props: any) => {
    return (
        <h3 data-testid="title">{props.children}</h3>
    );
}

export default Title;