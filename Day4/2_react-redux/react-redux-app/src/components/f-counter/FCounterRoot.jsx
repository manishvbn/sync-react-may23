import React from 'react';
import FCounterComponent from './FCounterComponent';
import FCounterSiblingComponent from './FCounterSiblingComponent';

const FCounterRoot = () => {
    return (
        <>
            <FCounterComponent />
            <hr />
            <FCounterSiblingComponent />
        </>
    );
};

export default FCounterRoot;