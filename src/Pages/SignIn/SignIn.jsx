import { Form } from 'react-router-dom';
import SignInForm from '../../Components/SignInForm/SignInForm';
import './SignIn.css';

function SignIn () {
    return (
        <div className="sign-in-container">

            <main className="main bg-dark">
                <section className="sign-in-content">
                    <SignInForm />
                </section>
            </main>

        </div>
        
    )
}

export default SignIn