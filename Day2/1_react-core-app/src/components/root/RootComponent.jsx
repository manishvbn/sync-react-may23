import React from 'react';
import PureImpureComponent from '../1_pure-vs-impure/PureImpureComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            <PureImpureComponent />
        </div>
    );
};

export default RootComponent;