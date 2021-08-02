import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";

function Routes(){
    return (  <BrowserRouter>
    <Navbar />
        <Switch>
            <Route path="/orders">
                <Orders></Orders>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;