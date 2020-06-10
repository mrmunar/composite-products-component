import React from 'react';

interface Item {
    id: string,
    name: string
}

const Select = (props: any) => {
    return (
        <select
            className="custom-select"
            defaultValue={props.defaultValue}
            onChange={(e: any) => props.onChange(e)}
            data-testid="select"
        >
            <option value="">{props.defaultLabel}</option>
            {props.data.map((item: Item) => {
                return <option
                    key={`${item.id}-${item.name}`}
                    value={item.id}
                >
                    {item.name}
                </option>
            })}
        </select>
    );
}

export default Select;