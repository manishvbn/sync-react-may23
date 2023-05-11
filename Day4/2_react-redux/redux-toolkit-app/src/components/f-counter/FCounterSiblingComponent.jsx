import React from 'react';
import { useSelector } from 'react-redux';

const FCounterSiblingComponent = () => {
    const count = useSelector(state => state.counter);

    return (
        <>
            <div className="text-center">
                <h1 className="text-warning">Counter Sibling Component - Without Container Component</h1>
            </div>

            <div className="d-grid gap-2 mx-auto col-6">
                <h2 className="text-warning text-center">
                    {count}
                </h2>
            </div>
        </>
    );
};

export default FCounterSiblingComponent;