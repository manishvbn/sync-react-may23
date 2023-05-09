/* eslint-disable */

import React from 'react';
import PureImpureComponent from '../1_pure-vs-impure/PureImpureComponent';
import EventComponent from '../2_synthetic-event/EventComponent';
import CounterAssignment from '../3_counter-assignment/CounterAssignment';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <PureImpureComponent /> */}
            {/* <EventComponent /> */}
            <CounterAssignment />
        </div>
    );
};

export default RootComponent;