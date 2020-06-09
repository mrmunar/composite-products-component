import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getProducts } from '../../../redux/actions/products';
import Select from '../../base/form/select';
import Button from '../../base/form/button';
import ValidationMessage from '../../base/form/validation/validationMessage';

const ProductItem = (props: any) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const products = useSelector((state: any) => {
        return state.products.records
    });
    const [isValid, setIsValid] = useState(true);
    const [selectDefaultValue, setSelectDefaultValue] = useState('');

    useEffect(() => {
        if(!selectDefaultValue) {
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
        <div className="p-2 pr-4">
            <div>Product</div>
            <div className="row">
                <div className="col-md-9">
                    <Select
                        data={products}
                        defaultValue={props.defaultValue}
                        onChange={(e: any) => onSelectChange(e)}
                    />
                </div>
                <div className="col-md-2">
                    <input
                        type="number"
                        defaultValue={props.defaultQuantity}
                        onChange={(e: any) => props.onNumberChange(e)}
                        className="form-control"
                    />
                </div>
                <div className="col-md-1">
                    <Button label="X" className="btn btn-danger" />
                </div>
            </div>
            <ValidationMessage valid={isValid} message="Please choose a Product" />
        </div>
    );
}

export default ProductItem;