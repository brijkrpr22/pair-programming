import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "../Home";
import Cart from "../Carts"

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/cart" exact render={() => <Cart />} />
            </Switch>
        </div>
    )
}


export default Routes