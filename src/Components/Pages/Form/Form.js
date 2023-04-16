import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormData } from '../../../features/form/formSlice';

const Form = () => {
    const state = useSelector((state) => state.form);
    const dispatch = useDispatch();
    console.log(state);

    const handleSubmit = e => {
        dispatch(getFormData({ shakib: "Say My Name" }))
    }

    return (
        <div className='mt-10'>
            <h3 className='text-center text-2xl font-barlow font-medium text-primary'>Hi Stranger! Welcome back to Geeks for Gurukul</h3>
        </div>
    );
};

export default Form;