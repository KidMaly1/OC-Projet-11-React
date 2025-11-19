import Logo from '../../assets/Images/argentBankLogo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../store/user/authSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header () {

    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logOut());
        navigate("/SignIn");
    }


    let authButton;

        if (token) {
            authButton = (
                <p className="main-nav-item" onClick={handleLogout} style={{ cursor: "pointer" }}>
                    <i className="fa fa-user-circle"></i> Sign Out 
                </p> 
            );
        } else {
            authButton = (
                <NavLink to="/SignIn">
                    <p className="main-nav-item">
                        <i className="fa fa-user-circle"></i> Sign In
                    </p>
                </NavLink>
            );
        }

    return (

        <div className="main-nav">

            <NavLink to="/">
                <div className="main-nav-logo">
                    <img className="main-nav-logo-image" src={Logo} alt="Logo Image"></img>
                </div>
            </NavLink>
                
            {authButton}
            
        </div>
        
    )
}

export default Header