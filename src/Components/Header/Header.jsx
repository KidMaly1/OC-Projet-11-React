import Logo from '../../assets/Images/argentBankLogo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header () {
    return (

        <div className="main-nav">

            <NavLink to="/">
                <div className="main-nav-logo">
                    <img className="main-nav-logo-image" src={Logo} alt="Logo Image"></img>
                </div>
            </NavLink>
                
            <NavLink to="/SignIn">
                <p className="main-nav-item"><i className="fa fa-user-circle"></i>Sign In</p>
            </NavLink>
            
        </div>
        
    )
}

export default Header