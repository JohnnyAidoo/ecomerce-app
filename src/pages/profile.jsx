import { useNavigate } from "react-router-dom";

function Profile() {

    const navigate = useNavigate()

    const logout = () =>{
        localStorage.removeItem('token')
        navigate('/auth/login')
    }

    return ( 
        <>
        <a href="/">Go To Home</a>
        <br />
        <h1>Site in progress</h1>
        <button onClick={logout}>LOG OUT</button>
        </>
     );
}

export default Profile;