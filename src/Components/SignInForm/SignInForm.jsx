import './SignInForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../store/user/authSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignInForm () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    // 📡 Fonction de soumission
        const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log('Réponse brute de l’API :', data);

            if (response.ok) {
            dispatch(setCredentials({
                user: { email },
                token: data.body.token,
            }));
            console.log(`✅ Bienvenue, ${email} ! Connexion réussie.`);
            navigate('/User'); // Redirection vers le Dashboard
            } else {
            console.error('Échec de la connexion :', data.message);
            }
        } catch (error) {
            console.error('Erreur réseau :', error);
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
                    <input onChange={e => setEmail(e.target.value)} type="email" id="username" value={email} />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" id="password" value={password} />
                </div>

            </div>

                <div className="input-remember">
                    <label htmlFor="remember-me">Remember me</label>
                    <input type="checkbox" id="remember-me" />
                </div>

                <button type="submit" className="sign-in-button">Sign In</button>
            
        </form>

        </div>
    )
}

export default SignInForm