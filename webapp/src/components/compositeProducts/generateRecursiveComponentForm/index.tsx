import React, { useState, useEffect } from 'react';
import Button from '../../base/form/button';
import ProductItem from '../productItem';
import Select from '../../base/form/select';
import InputText from '../../base/form/inputText';

const GenerateRecursiveComponentForm = (props: any) => {
    const [data, setData] = useState(props.compositeProduct);
    const [components, setComponents] = useState([{}]);

    const addActionOptions = [
        { id: 'add-product', name: 'Add Product' },
        { id: 'add-group', name: 'Add Group' },
    ]

    const addProduct = () => {
        const item = {
            type: 'PRODUCT',
            quantity: 1,
            productId: ''
        };

        setComponents(
            typeof components[0] !== 'undefined' &&
                Object.keys(components[0]).length === 0
                ? [item]
                : [...components, item]
        );
    }

    const addGroup = () => {
        const item = {
            type: 'GROUP',
            label: '',
            components: []
        };

        setComponents(
            typeof components[0] !== 'undefined' &&
                Object.keys(components[0]).length === 0
                ? [item]
                : [...components, item]
        );;
    }

    const handleOnNameChange = (e: any, key: number) => {
        data.components[key].label = e.target.value;
        props.onChange(data);
    }

    
    useEffect(() => {
        if (
            typeof components[0] !== 'undefined' &&
            Object.keys(components[0]).length > 0
        ) {
            data.components = components;
            props.onChange(data);
        }

        // Cannot include deps due to recursive nature of this component and
        // we might get caught in an infinite loop of useEffect triggers

        // eslint-disable-next-line
    }, [components]);

    useEffect(() => {
        setData(props.compositeProduct);
        setComponents(data.components);

    }, [props.compositeProduct, data]);

    const handleOnListChange = (compositeProduct: any) => {
        data.components = components;
        props.onChange(data);
    }

    const handleOnSelectChange = (e: any, key: number) => {
        data.components[key].productId = e.target.value;
        props.onChange(data);
    }

    const handleOnQuantityChange = (e: any, key: number) => {
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

    const handleOnDelete = (key: number) => {
        components.splice(key, 1);

        setComponents(components.filter((item: any) => {
            return item !== null;
        }));

        data.components = components;
        props.onChange(data);
    }

    return (
        <div className="m-2 p-3 card">
            {components.length > 0 ? components.map((item: any, key: number) => {
                if (item.type === 'PRODUCT') {
                    return (
                        <ProductItem
                            key={`product-${props.level}-${key}`}
                            defaultItemValue={item.productId}
                            defaultQuantity={item.quantity}
                            onSelectChange={(e: any) => handleOnSelectChange(e, key)}
                            onNumberChange={(e: any) => handleOnQuantityChange(e, key)}
                            onProductDelete={() => handleOnDelete(key)}
                        />
                    );
                } else if (item.type === 'GROUP') {
                    return (
                        <div className="mt-2" key={`group-${props.level}-${key}`} data-testid="group-container">
                            <div>Group Label</div>
                            <div className="row">
                                <div className="col-sm-8 text-left">
                                    <InputText
                                        key={`groupname-${props.level}-${key}`}
                                        value={item.label}
                                        onChange={(e: any) => handleOnNameChange(e, key)}
                                        data-testid="input-text"
                                    />
                                </div>
                                <div className="col-sm-4 text-right">
                                    <Button
                                        onClick={() => handleOnDelete(key)}
                                        label="X"
                                        className="btn btn-danger"
                                        data-testid="delete-button"
                                    />
                                </div>
                            </div>
                            <GenerateRecursiveComponentForm
                                key={`component-${props.level}-${key}`}
                                onChange={(compositeProduct: any) => handleOnListChange(compositeProduct)}
                                compositeProduct={item}
                                level={`0-${props.level}`}
                            />
                        </div>
                    );
                }

                return null;
            }) : null}
            <div className="mb-2 mt-2">
                <Select
                    data={addActionOptions}
                    defaultLabel="(Add +)"
                    onChange={(e: any) => handleOnSelectActionOptionsChange(e)}
                    data-testid="select"
                />
            </div>
        </div>
    );
}

export default GenerateRecursiveComponentForm;