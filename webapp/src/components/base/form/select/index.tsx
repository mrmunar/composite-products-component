import React from 'react';

interface Item {
    id: string,
    name: string
}

const Select = (props: any) => {
    return (
        <select
            style={{ width: '100%' }}
            defaultValue={props.defaultValue}
            onChange={(e: any) => props.onChange(e)}
        >
            <option value="">(Select a Product)</option>
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