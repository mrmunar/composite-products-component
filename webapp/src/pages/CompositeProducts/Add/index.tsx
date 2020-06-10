import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import GenerateRecursiveComponentForm from '../../../components/compositeProducts/generateRecursiveComponentForm';
import { addCompositeProducts } from '../../../redux/actions/compositeProducts';
import { validateCompositeProduct } from '../../../utils/validateCompositeProduct';
import ValidationMessage from '../../../components/base/form/validation/validationMessage';
import Button from '../../../components/base/form/button';

function Add() {
    const dispatch = useDispatch();
    const history = useHistory();
    const addStatus = useSelector((state: any) => {
        return state.compositeProducts.add
    });

    const [compositeProductState, setCompositeProductState] = useState({
        name: '',
        components: []
    });
    const [compositeProductName, setCompositeProductName] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleSetState = (state: any) => {
        setCompositeProductState(state);
        console.log('state', state);
        setIsValid(validateCompositeProduct(compositeProductState) && compositeProductName ? true : false);
    }

    const handleOnNameChange = (e: any) => {
        setCompositeProductName(e.target.value);
    }

    useEffect(() => {
        compositeProductState.name = compositeProductName;
        setIsValid(compositeProductName ? true : false);
    }, [compositeProductName]);
    
    const handleOnCancelClick = () => {
        history.push('/');
    }

    const handleOnSaveClick = () => {
        if (isValid) {
            dispatch(addCompositeProducts(compositeProductState));
        }
    }

    return (
        <Fragment>
            <div>Name</div>
            <input
                type="text"
                onChange={(e) => handleOnNameChange(e)}
                className="form-control"
                style={{ width: '50%' }}
            />
            <GenerateRecursiveComponentForm
                onChange={(compositeProduct: any) => handleSetState(compositeProduct)}
                compositeProduct={compositeProductState} />
            <ValidationMessage valid={isValid} message="Please fill up all required fields" />
            <div className="text-right">
                <Button onClick={() => handleOnSaveClick()}label="Save" className="btn save-btn mr-2" />
                <Button onClick={() => handleOnCancelClick()} label="Cancel" className="btn cancel-btn" />
            </div>
        </Fragment>
    );
}

export default Add;