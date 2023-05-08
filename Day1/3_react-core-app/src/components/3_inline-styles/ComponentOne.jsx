import React from 'react';

const ComponentOne = () => {
    const card = { margin: '1em', paddingLeft: 0, border: '2px dashed green' };
    
    return (
        <>
            <h2 className="text-success">Hello from Component One</h2>
            <h2 style={{ margin: '1em', paddingLeft: 0, border: '2px dashed green' }}>Hello from Component One</h2>
            <h2 style={card}>Hello from Component One</h2>
        </>
    );
};

export default ComponentOne;