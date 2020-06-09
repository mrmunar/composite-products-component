import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { getProducts } from '../../../redux/actions/products';

const List = () => {
    const dispatch = useDispatch();

    //get composite products on render
    useEffect(() => {
        dispatch(getProducts());
    });

    return (
        // add button
        // list
        <div>list</div>
    );
}

export default List;