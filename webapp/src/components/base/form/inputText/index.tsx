import React, { useState } from 'react';

const InputText = (props: any) => {
    const [value, setValue] = useState(props.value);

    const handleOnChange = (e: any) => {
        setValue(e.target.value);
        props.onChange(e);
    }
    return (
        <input
            type="text"
            value={value}
            onChange={(e: any) => handleOnChange(e)}
            className="form-control"
            data-testid="input-text"
        />
    );
}

export default InputText;