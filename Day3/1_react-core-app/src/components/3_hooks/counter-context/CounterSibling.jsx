import React from 'react';
import { useCounter } from './CounterContext';

const CounterSibling = () => {
    const context = useCounter();

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Sibling Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6 text-center">
                <h2 className='text-primary'>
                    {context.counterState.count}
                </h2>
            </div>
        </>
    );
};

export default CounterSibling;