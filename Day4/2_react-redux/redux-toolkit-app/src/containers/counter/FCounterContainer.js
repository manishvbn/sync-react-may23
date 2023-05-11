import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as counterActions from '../../actions/counterActions';
import CounterComponent from '../../components/counter/CounterComponent';
import CounterSiblingComponent from '../../components/counter/CounterSiblingComponent';

const FCounterContainer = () => {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const incCounter = (by) => { dispatch(counterActions.incCounter(by)); };
    const decCounter = (by) => { dispatch(counterActions.decCounter(by)); };
    const mulCounter = (by) => { dispatch(counterActions.mulCounter(by)); };

    return (
        <>
            <CounterComponent count={count}
                inc={incCounter}
                dec={decCounter}
                mul={mulCounter} />
            <hr />
            <CounterSiblingComponent count={count} />
        </>
    );
};

export default FCounterContainer;