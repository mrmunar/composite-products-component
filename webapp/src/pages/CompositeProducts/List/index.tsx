import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { getCompositeProducts } from '../../../redux/actions/compositeProducts';
import Button from '../../../components/base/form/button';
import Title from '../../../components/base/title';
import CompositItemList from '../../../components/base/list';

const dummyData = [
    { id: '1', name: 'abc' }, 
    { id: '2', name: 'def' }
];

const List = () => {
    const dispatch = useDispatch();

    //get composite products on render
    useEffect(() => {
        dispatch(getCompositeProducts());
    });

    return (
        <div className="text-left">
            <Title>List Composite Products</Title>
            <div className="mb-3">
                <Button label="Create" />
            </div>
            <CompositItemList withLinks items={dummyData} />
        </div>
    );
}

export default List;