import React, { useState, useEffect, Fragment } from 'react';
import Button from '../../base/form/button';
import ProductItem from '../productItem';
import Select from '../../base/form/select';

const GenerateRecursiveComponentForm = (props: any) => {
    const [data] = useState(props.compositeProduct);
    const [components, setComponents] = useState([{}]);
    const [componentName, setComponentName] = useState('');

    const addActionOptions = [
        { id: 'add-product', name: 'Add Product' },
        { id: 'add-group', name: 'Add Group' },
    ]

    const addProduct = () => {
        const item = {
            type: 'PRODUCT',
            quantity: 0,
            productId: ''
        };
        setComponents(Object.keys(components[0]).length === 0 ? [item] : [...components, item]);
    }

    const addGroup = () => {
        const item = {
            type: 'GROUP',
            name: '',
            components: []
        };
        setComponents(Object.keys(components[0]).length === 0 ? [item] : [...components, item]);;
    }

    const handleOnNameChange = (e: any) => {
        setComponentName(e.target.value);
    }

    useEffect(() => {
        if (Object.keys(components[0]).length > 0) {
            data.components = components;
            props.onChange(data);
        }
    }, [components]);

    useEffect(() => {
        data.name = componentName;
        props.onChange(data);
    }, [componentName]);

    const handleOnListChange = (compositeProduct: any) => {
        data.components = components;
        props.onChange(data);
    }

    const handleOnSelectChange = (e: any, key: number) => {
        data.components[key].productId = e.target.value;
        props.onChange(data);

    }

    const handleOnNumberChange = (e: any, key: number) => {
        data.components[key].quantity = e.target.value;
        props.onChange(data);
    }

    const handleOnSelectActionOptionsChange = (e: any) => {
        if (e.target.value === 'add-product') {
            addProduct();
        } else if (e.target.value === 'add-group') {
            addGroup();
        }

        e.target.value = '';
    }

    return (
        <div className="m-2 p-3 card">
            {components.length > 0 ? components.map((item: any, key: number) => {
                if (item.type === 'PRODUCT') {
                    return (
                        <ProductItem
                            key={`product-${props.level}-${key}`}
                            defaultItemValue={item.id}
                            defaultQuantity={item.quantity}
                            onSelectChange={(e: any) => handleOnSelectChange(e, key)}
                            onNumberChange={(e: any) => handleOnNumberChange(e, key)}
                        />
                    );
                } else if (item.type === 'GROUP') {
                    return (
                        <div className="mt-2" key={`group-${props.level}-${key}`}>
                            <label>
                                <div>Group Label</div>
                                <input
                                    key={`groupname-${props.level}-${key}`}
                                    type="text"
                                    onChange={(e) => handleOnNameChange(e)}
                                    className="form-control"
                                />
                            </label>
                            <GenerateRecursiveComponentForm
                                key={`component-${props.level}-${key}`}
                                onChange={(compositeProduct: any) => handleOnListChange(compositeProduct)}
                                compositeProduct={item}
                                level={`0-${props.level}`}
                            />
                        </div>
                    );
                }

            }) : null}
            <div className="mb-2 mt-2">
                <Select
                    data={addActionOptions}
                    defaultLabel="(Add +)"
                    onChange={(e: any) => handleOnSelectActionOptionsChange(e)}
                />
            </div>
        </div>
    );
}

export default GenerateRecursiveComponentForm;