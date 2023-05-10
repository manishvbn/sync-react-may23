/* eslint-disable */

import React from 'react';
import ErrorHandler from '../common/ErrorHandler';
import CrudAssignment from '../1_crud-assignment/CrudAssignment';
import AjaxComponent from '../2_ajax/AjaxComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <CrudAssignment /> */}
                <AjaxComponent />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;