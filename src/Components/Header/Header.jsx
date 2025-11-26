import Logo from '../../assets/Images/argentBankLogo.png';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/Reducers/authSlice';

function Header() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate('/');
    
  };

  return (
    <div className="main-nav">
      <NavLink to="/">
        <div className="main-nav-logo">
          <img className="main-nav-logo-image" src={Logo} alt="Logo Argent Bank" />
        </div>
      </NavLink>

      {token && user ? (
        <div className="main-nav-auth">
          <NavLink to="/User" className="main-nav-item">
            <i className="fa fa-user-circle"></i> {user.userName}
          </NavLink>

          <p className="main-nav-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
            <i className="fa fa-sign-out"></i> Sign Out
          </p>
        </div>
      ) : (
        <NavLink to="/SignIn" className="main-nav-item">
          <i className="fa fa-user-circle"></i> Sign In
        </NavLink>
      )}
    </div>
  );
}

export default Header;