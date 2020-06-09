import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../../../components/base/form/button';
import Title from '../../../components/base/title';
import CompositItemList from '../../../components/base/list';
import { getCompositeProducts } from '../../../redux/actions/compositeProducts';

const List = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const compositeProducts = useSelector((state: any) => {
        return state.compositeProducts.records
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getCompositeProducts());
    }, [dispatch]);

    useEffect(() => {
        console.log(compositeProducts);
        if (compositeProducts.length > 0) {
            setIsLoading(false);
        }
    }, [compositeProducts]);

    return (
        <div className="text-left">
            <Title>List Composite Products</Title>
            <div className="mb-3">
                <Button label="Create" onClick={() => history.push('/add')} />
            </div>
            {
                !isLoading
                    ? <CompositItemList withLinks items={compositeProducts} />
                    : 'Loading...'
            }
        </div>
    );
}

export default List;