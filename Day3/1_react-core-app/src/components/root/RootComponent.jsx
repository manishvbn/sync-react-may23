/* eslint-disable */

import React from 'react';
import ErrorHandler from '../common/ErrorHandler';
import CrudAssignment from '../1_crud-assignment/CrudAssignment';
import AjaxComponent from '../2_ajax/AjaxComponent';
import StateHookDemo from '../3_hooks/1_StateHookDemo';
import EffectHookDemo from '../3_hooks/2_EffectHookDemo';
import EffectHookAjax from '../3_hooks/3_EffectHookAjax';
import AssignmentComponent from '../3_hooks/4_Assignment';
import ReducerHookDemo from '../3_hooks/5_ReducerHookDemo';
import ContextHookDemo from '../3_hooks/6_ContextHookDemo';
import CustomHookDemo from '../3_hooks/7_CustomHookDemo';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <CrudAssignment /> */}
                {/* <AjaxComponent /> */}
                {/* <StateHookDemo /> */}
                {/* <EffectHookDemo /> */}
                {/* <EffectHookAjax /> */}
                {/* <AssignmentComponent /> */}
                {/* <ReducerHookDemo /> */}
                {/* <ContextHookDemo /> */}
                <CustomHookDemo />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;