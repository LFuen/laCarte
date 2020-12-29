import React, {Component} from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'


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

                    </div>
                    <div className='buttons'>
                    <Link to='/MealPlan'><button className='shadow' name="back" value="cancel">Change</button></Link>
                    <div className='spacing'/>
                    <Link to='/MealChoose'><button className='shadow' name="signup_submit" value="Sign me up">Sign Up</button></Link>                        
                    </div>

                </div>
            </div>
        )
    }
}



export default SignUp


//CHECK OUT SOCIAL LOGINS https://auth0.com/learn/social-login/