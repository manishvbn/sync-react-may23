import React, { useContext, useReducer } from 'react';

const CounterContext = React.createContext();

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

const CounterSibling = (props) => {
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

const Counter = (props) => {
    const context = useCounter();

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={context.counterState.count} readOnly />
                <button className="btn btn-info"
                    onClick={e => { context.counterDispatch({ type: counterActions.increment, payload: 10 }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={e => { context.counterDispatch({ type: counterActions.decrement, payload: 10 }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
};

// Custom Hook
function useCounter() {
    const context = useContext(CounterContext);

    if(!context) {
        throw new Error("useCounter Hook must be used within CounterProvider");
    }

    return context;
}

function CounterProvider({ children }) {
    const [state, dispatch] = useReducer(counterReducer, counterState);

    const providerValue = { counterState: state, counterDispatch: dispatch };

    return (
        <CounterContext.Provider value={providerValue}>
            {children}
        </CounterContext.Provider>
    );
}

const CustomHookDemo = () => {
    return (
        <CounterProvider>
            <Counter />
            <hr />
            <CounterSibling />
        </CounterProvider>
    );
};

export default CustomHookDemo;