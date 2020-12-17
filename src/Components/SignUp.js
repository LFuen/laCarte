import React, {Component} from 'react'
import '../css/SignUp.css'


class SignUp extends Component {
    // construct(props) {
    //     super(props)
    // }

    render() {
        return(
            <div id="login-box">
                <div className="signup">
                    <h1>Sign up</h1>
                    <div className='inputs'>
                    <label>Username<br/>
                        <input type="text" name="username" placeholder="Username" />
                    </label>
                    <label>E-Mail<br/>
                        <input type="text" name="email" placeholder="E-mail" />
                    </label>
                    <label>Password<br/>
                        <input type="password" name="password" placeholder="Password" />
                    </label>
                    <label>Confirm Password<br/>
                        <input type="password" name="password2" placeholder="Retype password" />
                    </label>
                    <p>Subscription Selected:</p>
                    </div>
                    <a href='/MealPlan'><button className='shadow' name="back" value="cancel">Change</button></a>
                    <div className='spacing'/>
                    <a href='/MealChoose'><button className='shadow' name="signup_submit" value="Sign me up">Sign Up</button></a>
                </div>
            </div>
        )
    }
}



export default SignUp


//CHECK OUT SOCIAL LOGINS https://auth0.com/learn/social-login/