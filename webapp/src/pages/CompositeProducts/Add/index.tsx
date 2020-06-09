import React, { Fragment, useState, useEffect } from 'react';

import GenerateRecursiveComponentForm from '../../../components/compositeProducts/generateRecursiveComponentForm';
import { validateCompositeProduct } from '../../../utils/validateCompositeProduct';
import ValidationMessage from '../../../components/base/form/validation/validationMessage';

let i = 0;

function Add() {
    const [compositeProductState, setCompositeProductState] = useState({
        name: '',
        components: []
    });
    const [compositeProductName, setCompositeProductName] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleSetState = (state: any) => {
        setCompositeProductState(state);
        console.log('compositeProduct', compositeProductState);

            console.log('validateCompositeProduct', validateCompositeProduct(compositeProductState));
            setIsValid(validateCompositeProduct(compositeProductState));
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
                <input
                    type="text"
                    onChange={(e) => handleOnNameChange(e)}
                    className="form-control"
                />
            </label>
            <GenerateRecursiveComponentForm
                onChange={(compositeProduct: any) => handleSetState(compositeProduct)}
                compositeProduct={compositeProductState} />
            <ValidationMessage valid={isValid} message="Please fill up all Products" />
        </Fragment>
    );
}

export default Add;