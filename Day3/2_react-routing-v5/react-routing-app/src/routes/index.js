import React, { Suspense, lazy } from "react";
import { Route, Switch, Link, useLocation, Redirect } from "react-router-dom";

import authenticatorClient from "../services/authenticator-api-client";

// Eager Loading
import LoaderAnimation from '../components/common/LoaderAnimation';
// import AboutComponent from '../components/about/AboutComponent';
// import HomeComponent from '../components/home/HomeComponent';
// import ProductsComponent from "../components/products/ProductsComponent";
// import AdminComponent from "../components/admin/AdminComponent";
// import LoginComponent from "../components/login/LoginComponent";

// Lazy Loading
const AboutComponent = lazy(() => import('../components/about/AboutComponent'));
const HomeComponent = lazy(() => import('../components/home/HomeComponent'));
const ProductsComponent = lazy(() => import("../components/products/ProductsComponent"));
const AdminComponent = lazy(() => import("../components/admin/AdminComponent"));
const LoginComponent = lazy(() => import("../components/login/LoginComponent"));

const img404 = require('../assets/http-404.jpg');

const SecuredRoute = ({ component: Component, ...args }) => {
    return (
        <Route {...args} render={
            (props) => authenticatorClient.isAuthenticated === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        } />
    );
}

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/products" component={ProductsComponent} />
            <SecuredRoute path="/admin" component={AdminComponent} />
            <Route path="/login" component={LoginComponent} />

            <Route path="*">
                <NoMatch />
            </Route>
            {/* <Route path="*" render={() => {
            return (
                <div className="text-center">
                    <article>
                        <h1 className="text-danger">No match Found!</h1>
                        <h4 className="text-danger">Please check your Route Configuration</h4>
                        <div className="mt-5">
                            <img src={img404} alt="Not Found" className="rounded" />
                        </div>
                        <h2 className="mt-5">
                            <Link className="nav-link" to="/">Back to Home</Link>
                        </h2>
                    </article>
                </div>
            );
        }} /> */}
        </Switch>
    </Suspense>
);

function NoMatch() {
    let location = useLocation();
    return (
        <div className="text-center">
            <article>
                <h1 className="text-danger">No match found for <code>{location.pathname}</code></h1>
                <h4 className="text-danger">Please check your Route Configuration</h4>
                <div className="mt-5">
                    <img src={img404} alt="Not Found" className="rounded" />
                </div>
                <h2 className="mt-5">
                    <Link className="nav-link" to="/">Back to Home</Link>
                </h2>
            </article>
        </div>
    );
}