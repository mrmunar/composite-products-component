import React, { Fragment, useState, useEffect } from 'react';

import GenerateRecursiveComponentForm from '../../../components/compositeProducts/generateRecursiveComponentForm';

let i = 0;

function Add() {
    const [compositeProductState, setCompositeProductState] = useState({
        name: '',
        components: []
    });
    const [compositeProductName, setCompositeProductName] = useState('');

    const handleSetState = (state: any) => {
        setCompositeProductState(state);
        console.log('compositeProduct', compositeProductState);
        console.log('i', i++);
    }

    const handleOnNameChange = (e: any) => {
        setCompositeProductName(e.target.value);
    }

    useEffect(() => {
        compositeProductState.name = compositeProductName;
    }, [compositeProductName]);

    return (
        <Fragment>
            <label>
                <div>Name</div>
                <input type="text" onChange={(e) => handleOnNameChange(e)} />
            </label>
            <GenerateRecursiveComponentForm
                onChange={(compositeProduct: any) => handleSetState(compositeProduct)}
                compositeProduct={compositeProductState} />
        </Fragment>
    );
}

export default Add;