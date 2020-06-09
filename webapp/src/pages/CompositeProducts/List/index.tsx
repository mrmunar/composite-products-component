import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { getProducts } from '../../../redux/actions/products';
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
        dispatch(getProducts());
    });

    const transformForList = (data: any) => {
        return data.map((item: any) => {
            return {
                id: item.id,
                label: item.name
            }
        });
    }

    return (
        <div className="text-left">
            <Title>List Composite Products</Title>
            <div className="mb-3">
                <Button label="Create" />
            </div>
            <CompositItemList withLinks items={transformForList(dummyData)} />
        </div>
    );
}

export default List;