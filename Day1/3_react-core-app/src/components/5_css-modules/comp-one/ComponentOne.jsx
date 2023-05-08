import React from 'react';

import classes from './ComponentOne.module.css';

const ComponentOne = () => {
    return (
        <>
            <h2 className="text-success">Hello from Component One</h2>
            <h2 className={classes.card}>Hello from Component One</h2>
        </>
    );
};

export default ComponentOne;