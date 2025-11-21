import './SignInForm.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAndFetchProfile } from '../../store/Reducers/userReducer/userActions.js'; 

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(loginAndFetchProfile({ email, password }));
      console.log(`✅ Connexion et chargement profil réussis pour ${email}`);
      navigate('/User');
    } catch (error) {
      console.error('Erreur lors de la connexion ou du chargement du profil :', error);
    }
  };

  return (
    <div className="content">
      {user && <p className="welcome-message">✅ Bienvenue, {user.email} !</p>}

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form">
          <h1>Sign In</h1>

          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="username"
              value={email}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              value={password}
            />
          </div>
        </div>

        <div className="input-remember">
          <label htmlFor="remember-me">Remember me</label>
          <input type="checkbox" id="remember-me" />
        </div>

        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;