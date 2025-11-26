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
  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = async (e) => {
      e.preventDefault();
      setErrorMessage('');

      try {
        const result = await dispatch(loginAndFetchProfile({ email, password }));

        if (result?.success) {
          console.log(`✅ Connexion réussie pour ${email}`);
          navigate('/User');
        } else {
          setErrorMessage('Identifiants incorrects. Veuillez réessayer.');
        }
      } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
      }
  };

  return (
    <div className="content">
      {user && <p className="welcome-message">✅ Bienvenue, {user.email} !</p>}
    {/* Message d'erreur si les identifiants sont incorrects*/}
      {errorMessage && <p className="error-message">{errorMessage}</p>}


      <form onSubmit={handleSubmit} className="form-container">
        <div className="form">
          <i className="fa fa-user-circle"></i>
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