import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import GenerateRecursiveComponentForm from '../../../components/compositeProducts/generateRecursiveComponentForm';
import { 
    addCompositeProducts, 
    getCompositeProduct, 
    editCompositeProduct
 } from '../../../redux/actions/compositeProducts';
import { validateCompositeProduct } from '../../../utils/validateCompositeProduct';
import ValidationMessage from '../../../components/base/form/validation/validationMessage';
import Button from '../../../components/base/form/button';

function AddEdit(props: any) {
    const dispatch = useDispatch();
    const history = useHistory();
    const loadStatus = useSelector((state: any) => {
        return state.compositeProducts
    });

    const compositeProductRecord = useSelector((state: any) => {
        return state.compositeProducts.record;
    });

    const [compositeProductState, setCompositeProductState] = useState({
        name: '',
        components: []
    });

    const [compositeProductName, setCompositeProductName] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleSetState = (state: any) => {
        setCompositeProductState(state);
        setIsValid(validateCompositeProduct(compositeProductState) && compositeProductName ? true : false);
    }

    const handleOnNameChange = (e: any) => {
        setCompositeProductName(e.target.value);
    }

    useEffect(() => {
        compositeProductState.name = compositeProductName;
        setIsValid(compositeProductName ? true : false);
    }, [compositeProductName, compositeProductState]);

    useEffect(() => {
        if (compositeProductRecord) {
            setCompositeProductState(compositeProductRecord);
            setCompositeProductName(compositeProductRecord.name);
        }
    }, [compositeProductRecord]);

    useEffect(() => {
        if (props.match.params.id) {
            dispatch(getCompositeProduct(props.match.params.id));
        }
    }, [dispatch, props]);
    
    const handleOnCancelClick = () => {
        history.push('/');
    }

    const handleOnSaveClick = () => {
        if (isValid) {
            if (!props.match.params.id) {
                dispatch(addCompositeProducts(compositeProductState));
            } else {
                dispatch(editCompositeProduct(props.match.params.id, compositeProductState));
            }
        }

        setTimeout(() => history.push('/'), 3000);
    }

    return (
        !loadStatus.isLoading ? 
        <div data-testid="add-edit-container">
            <div>Name</div>
            <input
                type="text"
                onChange={(e) => handleOnNameChange(e)}
                className="form-control"
                style={{ width: '50%' }}
                value={compositeProductName}
            />
            <GenerateRecursiveComponentForm
                onChange={(compositeProduct: any) => handleSetState(compositeProduct)}
                compositeProduct={compositeProductState} />
            <ValidationMessage valid={isValid} message="Please fill up all required fields" />
            <div className="text-right">
                <Button onClick={() => handleOnSaveClick()}label="Save" className="btn save-btn mr-2" />
                <Button onClick={() => handleOnCancelClick()} label="Cancel" className="btn cancel-btn" />
            </div>
        </div> : <div>Loading...</div>
    );
}

export default AddEdit;