import { Route, redirect } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/homepage";

function PrivateRoute({children, ...rest}) {
    console.log('private working')
    return ( 
        <Route {...rest}>{children}</Route>
    );
}

export default PrivateRoute;