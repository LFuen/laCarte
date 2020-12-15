import React, {Component} from 'react'
import '../css/SignIn.css'


class SignIn extends Component{
    render(){
        return(
            <div className="main">
                <p className="sign" align="center">Sign in</p>
                <form className="form1">
                    <label>Username
                        <input className="un" type="text" required/>
                    </label>
                    <label>Password
                        <input className="pass" type="password" required/>
                    </label>
                    <button type="submit" formAction='/MealChoose' className='shadow'>Sign in</button>
                </form>
            </div>
        )
    }
}



export default SignIn

// GET call to find user and allow entry