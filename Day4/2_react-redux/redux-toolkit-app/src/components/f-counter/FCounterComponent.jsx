import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as counterActions from '../../actions/counterActions';

const FCounterComponent = () => {
    const count = useSelector(state=>state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component - Without Container Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <h2 className="text-primary text-center">
                    {count}
                </h2>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        dispatch(counterActions.incCounter(2));
                    }
                }>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        dispatch(counterActions.decCounter(2));
                    }
                }>
                    <span className='fs-4'>-</span>
                </button>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        dispatch(counterActions.mulCounter(2));
                    }
                }>
                    <span className='fs-4'>*</span>
                </button>
            </div>
        </>
    );
};

export default FCounterComponent;