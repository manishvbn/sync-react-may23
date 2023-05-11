import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, decrementBy, increment, incrementBy, selectCount } from '../../features/counter/counterSlice';

const CounterComponent = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <h2 className="text-primary text-center">
                    {count}
                </h2>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        dispatch(increment())
                    }
                }>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        dispatch(decrement())
                    }
                }>
                    <span className='fs-4'>-</span>
                </button>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        dispatch(incrementBy(5))
                    }
                }>
                    <span className='fs-4'>+ by 5</span>
                </button>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        dispatch(decrementBy(5))
                    }
                }>
                    <span className='fs-4'>- by 5</span>
                </button>
            </div>
        </>
    );
};

export default CounterComponent;