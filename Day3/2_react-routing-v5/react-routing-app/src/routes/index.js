import { Route, Switch, Link, useLocation } from "react-router-dom";

import AboutComponent from '../components/about/AboutComponent';
import HomeComponent from '../components/home/HomeComponent';
import ProductsComponent from "../components/products/ProductsComponent";

const img404 = require('../assets/http-404.jpg');

export default (
    <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/products" component={ProductsComponent} />

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