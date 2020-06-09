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
        // title
        // add button
        // list
            <ul className="list-group text-center">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
    );
}

export default List;