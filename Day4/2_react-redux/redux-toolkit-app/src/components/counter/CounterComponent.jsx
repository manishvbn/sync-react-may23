import React from 'react';

const CounterComponent = (props) => {
    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <h2 className="text-primary text-center">
                    {props.count}
                </h2>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        props.inc(5);
                    }
                }>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        props.dec(5);
                    }
                }>
                    <span className='fs-4'>-</span>
                </button>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        props.mul(5);
                    }
                }>
                    <span className='fs-4'>*</span>
                </button>
            </div>
        </>
    );
};

export default CounterComponent;