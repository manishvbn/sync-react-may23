/* eslint-disable */

import React from 'react';
import PureImpureComponent from '../1_pure-vs-impure/PureImpureComponent';
import EventComponent from '../2_synthetic-event/EventComponent';
import CounterAssignment from '../3_counter-assignment/CounterAssignment';
import SiblingCommunicationRoot from '../4_sibling-communication/SiblingCommunication';
import ControlledVsUncontrolledComponent from '../5_controlled-vs-uncontrolled/ControlledVsUncontrolledComponent';
import CalculatorAssignment from '../6_calculator-assignment/CalculatorAssignment';
import ListRoot from '../7_list/ListRoot';
import ErrorHandler from '../common/ErrorHandler';
import ContextComponent from '../8_context-api/ContextComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <PureImpureComponent /> */}
                {/* <EventComponent /> */}
                {/* <CounterAssignment /> */}
                {/* <SiblingCommunicationRoot /> */}
                {/* <ControlledVsUncontrolledComponent /> */}
                {/* <CalculatorAssignment /> */}
                {/* <ListRoot /> */}
                <ContextComponent />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;