import React from 'react';

import classes from './ComponentTwo.module.css';

const ComponentTwo = () => {
    return (
        <>
            <h2 className="text-primary">Hello from Component Two</h2>
            <h2 className={classes.card}>Hello from Component Two</h2>
        </>
    );
};

export default ComponentTwo;