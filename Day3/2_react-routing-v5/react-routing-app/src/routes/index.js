import { Route, Switch, Link, useLocation, Redirect } from "react-router-dom";

import AboutComponent from '../components/about/AboutComponent';
import HomeComponent from '../components/home/HomeComponent';
import ProductsComponent from "../components/products/ProductsComponent";
import AdminComponent from "../components/admin/AdminComponent";
import authenticatorClient from "../services/authenticator-api-client";
import LoginComponent from "../components/login/LoginComponent";

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