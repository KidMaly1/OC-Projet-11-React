import Logo from '../../assets/Images/argentBankLogo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header () {
    return (

        <div className="main-nav">

            <NavLink to="/">
                <a className="main-nav-logo">
                    <img className="main-nav-logo-image" src={Logo} alt="Logo Image"></img>
                </a>
            </NavLink>
                
            <NavLink to="/SignIn">
                <p className="main-nav-item"><i class="fa fa-user-circle"></i>Sign In</p>
            </NavLink>
            
        </div>
        
    )
}

export default Header