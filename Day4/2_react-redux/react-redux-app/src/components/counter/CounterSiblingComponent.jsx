import React from 'react';

const CounterSiblingComponent = (props) => {
    return (
        <>
            <div className="text-center">
                <h1 className="text-warning">Counter Sibling Component</h1>
            </div>

            <div className="d-grid gap-2 mx-auto col-6">
                <h2 className="text-warning text-center">
                    {props.count}
                </h2>
            </div>
        </>
    );
};

export default CounterSiblingComponent;