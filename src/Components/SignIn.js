import React, {Component} from 'react'
import '../css/SignIn.css'


class SignIn extends Component{
    render(){
        return(
            <div className="main">
                <p className="sign" align="center">Sign in</p>
                <form className="form1">
                    <input className="un" type="text" placeholder="Username" required/>
                    <input className="pass" type="password" placeholder="Password" required/>
                    <button type="submit" formAction='/MealChoose' className='signIn'>Sign in</button>
                </form>
            </div>
        )
    }
}



export default SignIn

// GET call to find user and allow entry