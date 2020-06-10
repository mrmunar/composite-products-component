import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../../redux/actions/products';
import Select from '../../base/form/select';
import Button from '../../base/form/button';
import ValidationMessage from '../../base/form/validation/validationMessage';

const ProductItem = (props: any) => {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => {
        return state.products.records
    });
    const [isValid, setIsValid] = useState(true);
    const [selectDefaultValue, setSelectDefaultValue] = useState('');

    useEffect(() => {
        if (!selectDefaultValue) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [selectDefaultValue, isValid]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const onSelectChange = (e: any) => {
        setSelectDefaultValue(e.target.value);
        props.onSelectChange(e);
    }

    return (
        <div className="container">
            <div>Product</div>
            <div className="row">
                <div className="col-md-8">
                    <Select
                        data={products}
                        defaultValue={props.defaultValue}
                        defaultLabel="(Select a Product)"
                        onChange={(e: any) => onSelectChange(e)}
                    />
                </div>
                <div className="col-md-2 text-right">
                    <input
                        type="number"
                        defaultValue={props.defaultQuantity}
                        onChange={(e: any) => props.onNumberChange(e)}
                        className="form-control"
                    />
                </div>
                <div className="col-md-1 text-right">
                    <Button label="X" className="btn btn-danger" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ValidationMessage valid={isValid} message="Please choose a Product" />
                </div>
            </div>
        </div>
    );
}

export default ProductItem;