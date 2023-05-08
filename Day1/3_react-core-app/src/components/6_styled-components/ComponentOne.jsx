import React from 'react';
import StyledHTwoGreen from './StyledHTwoGreen';

const ComponentOne = () => {
    return (
        <>
            <h2 className="text-success">Hello from Component One</h2>
            <StyledHTwoGreen>From Component One</StyledHTwoGreen>
        </>
    );
};

export default ComponentOne;