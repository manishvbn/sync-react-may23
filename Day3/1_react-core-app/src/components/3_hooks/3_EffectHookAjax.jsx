import React, { useState, useEffect } from 'react';
import LoaderAnimation from '../common/LoaderAnimation';
import DataTable from '../common/DataTable';
import postApiClient from '../../services/post-api-client';

const EffectHookAjax = () => {
    const [state, setState] = useState({ posts: [], message: "Loading Data, please wait...", flag: false });

    useEffect(() => {
        postApiClient.getAllPosts().then(data => {
            setState({ posts: [...data], message: "", flag: true });
        }).catch(eMsg => {
            setState({ posts: [], message: eMsg, flag: true });
        });
    }, []);

    return (
        <>
            <div className="row mt-5">
                <h4 className="text-warning text-center text-uppercase font-weight-bold">{state.message}</h4>
            </div>

            {
                !state.flag ? <LoaderAnimation /> : null
            }

            <DataTable items={state.posts}>
                <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
            </DataTable>
        </>
    );
};

export default EffectHookAjax;