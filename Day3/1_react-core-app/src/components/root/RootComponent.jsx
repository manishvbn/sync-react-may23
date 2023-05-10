/* eslint-disable */

import React from 'react';
import ErrorHandler from '../common/ErrorHandler';
import CrudAssignment from '../1_crud-assignment/CrudAssignment';
import AjaxComponent from '../2_ajax/AjaxComponent';
import StateHookDemo from '../3_hooks/1_StateHookDemo';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <CrudAssignment /> */}
                {/* <AjaxComponent /> */}
                <StateHookDemo />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;