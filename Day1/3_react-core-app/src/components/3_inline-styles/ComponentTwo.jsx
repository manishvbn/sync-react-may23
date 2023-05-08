import React from 'react';

const ComponentTwo = () => {
    const card = { margin: '1em', paddingLeft: 0, border: '2px solid blue' };

    return (
        <>
            <h2 className="text-primary">Hello from Component Two</h2>
            <h2 style={{ margin: '1em', paddingLeft: 0, border: '2px solid blue' }}>Hello from Component Two</h2>
            <h2 style={card}>Hello from Component Two</h2>
        </>
    );
};

export default ComponentTwo;