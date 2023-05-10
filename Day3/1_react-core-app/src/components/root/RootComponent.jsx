/* eslint-disable */

import React from 'react';
import ErrorHandler from '../common/ErrorHandler';
import CrudAssignment from '../1_crud-assignment/CrudAssignment';
import AjaxComponent from '../2_ajax/AjaxComponent';
import StateHookDemo from '../3_hooks/1_StateHookDemo';
import EffectHookDemo from '../3_hooks/2_EffectHookDemo';
import EffectHookAjax from '../3_hooks/3_EffectHookAjax';
import AssignmentComponent from '../3_hooks/4_Assignment';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <CrudAssignment /> */}
                {/* <AjaxComponent /> */}
                {/* <StateHookDemo /> */}
                {/* <EffectHookDemo /> */}
                {/* <EffectHookAjax /> */}
                <AssignmentComponent />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;