import React, { Suspense, lazy } from "react";
import { Route, Switch, Link, useLocation } from "react-router-dom";

import LoaderAnimation from '../components/common/LoaderAnimation';
import FCounterRoot from "../components/f-counter/FCounterRoot";

const AboutComponent = lazy(() => import('../components/about/AboutComponent'));
const HomeComponent = lazy(() => import('../components/home/HomeComponent'));
const CCouterContainer = lazy(() => import("../containers/counter/CCouterContainer"));
const FCounterContainer = lazy(() => import("../containers/counter/FCounterContainer"));

const img404 = require('../assets/http-404.jpg');

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/counter" component={CCouterContainer} />
            <Route path="/fcounter" component={FCounterContainer} />
            <Route path="/fcounterroot" component={FCounterRoot} />
            <Route path="*">
                <NoMatch />
            </Route>
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