import App from "../App";
import HomePage from "../pages/homepage";

function Auth(props) {
    return ( 
        <>
            <App text={<HomePage/>}/>
        </>
     );
}

export default Auth;