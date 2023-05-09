/* eslint-disable */

import React from 'react';
import MyImpureComponent from './MyImpureComponent';
import MyPureComponent from './MyPureComponent';

const PureImpureComponent = () => {
    return (
        <div>
            {/* <MyImpureComponent /> */}
            <MyPureComponent />
        </div>
    );
};

export default PureImpureComponent;