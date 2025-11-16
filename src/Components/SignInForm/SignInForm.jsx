import './SignInForm.css';

function SignInForm () {
    return (
        <div className="form-container">

            <div className="form">
                <h1>Sign In</h1>

                <div class="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                </div>

                <div class="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>

            </div>

                <div class="input-remember">
                    <label for="remember-me">Remember me</label>
                    <input type="checkbox" id="remember-me" />
                </div>

                <a href="./user.html" class="sign-in-button">Sign In</a>
            
        </div>
    )
}

export default SignInForm