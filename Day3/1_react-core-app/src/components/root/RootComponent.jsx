/* eslint-disable */

import React from 'react';
import ErrorHandler from '../common/ErrorHandler';
import CrudAssignment from '../1_crud-assignment/CrudAssignment';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                <CrudAssignment />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;