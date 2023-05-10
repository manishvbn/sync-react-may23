/* eslint-disable */

import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import fetchIntercept from 'fetch-intercept';

import ErrorHandler from '../common/ErrorHandler';
import NavigationComponent from '../bs-nav/NavigationComponent';
import authenticatorClient from '../../services/authenticator-api-client';

const unregister = fetchIntercept.register({
    request: function (url, config) {
        // Modify the url or config here
        if (new RegExp('api/products').test(url)) {
            config.headers['x-access-token'] = authenticatorClient.getToken();
        }
        return [url, config];
    },

    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        return Promise.reject(error);
    },

    response: function (response) {
        // Modify the reponse object
        return response;
    },

    responseError: function (error) {
        // Handle an fetch error
        return Promise.reject(error);
    }
});

const RootComponent = () => {
    useEffect(() => {
        return () => {
            unregister();
        }
    }, []);

    return (
        <div className='container'>
            <ErrorHandler>
                <Router>
                    <NavigationComponent />
                </Router>
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;