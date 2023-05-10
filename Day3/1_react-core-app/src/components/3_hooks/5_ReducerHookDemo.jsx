import React, { useReducer } from 'react';

const counterActions = {
    increment: 'increment',
    decrement: 'decrement'
};

const counterState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
        case counterActions.increment:
            return { count: state.count + (action.payload || 1) };
        case counterActions.decrement:
            return { count: state.count - (action.payload || 1) };
        default:
            throw new Error("Invalid Action Executed....");
    }
}

const ReducerHookDemo = (props) => {
    const [state, dispatch] = useReducer(counterReducer, counterState);

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={state.count} readOnly />
                <button className="btn btn-info"
                    onClick={e => { dispatch({ type: counterActions.increment, payload: 10 }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={e => { dispatch({ type: counterActions.decrement, payload: 10 }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
};

export default ReducerHookDemo;