import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getProducts } from '../../../redux/actions/products';
import Select from '../../base/form/select';
import Button from '../../base/form/button';

const ProductItem = (props: any) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const products = useSelector((state: any) => {
        return state.products.records
    });

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
            <div>Product</div>
            <div className="row">
                <div className="col-8">
                    <Select
                        data={products}
                        defaultValue={props.defaultValue}
                        onChange={(e: any) => props.onSelectChange(e)}
                    />
                </div>
                <div className="col-2">
                    <input
                        type="number"
                        defaultValue={props.defaultQuantity}
                        onChange={(e: any) => props.onNumberChange(e)}
                        style={{width: '50px'}}
                    />
                </div>
                <div className="col-2">
                    <Button label="X" />
                </div>
            </div>
        </div>
    );
}

export default ProductItem;