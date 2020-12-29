import React, {Component} from 'react'
import './Welcome.css'
// import {Link} from 'react-router-dom'



class Welcome extends Component {
    render() {
        return (
            <div className='welcomePage'>
                <span title="La Carte"><img className="titleImage" alt="LaCarte" src="https://lfuen.github.io/laCarte/images/laCarteFont.png"/></span> 
                <h3 className='worked'>The Healthy-Meal-Alternative App for the Busy Professional.</h3>
                <h5>(We didn't say workaholic, you did.)</h5>
                <div className='flexed'>
                    {/* <Link to='/MealPlan'><button className='shadow' id="newuser">Sign Me Up</button></Link> */}
                    <span title="Bon Apetit!"><img className="mainImage" alt="laCarte" src="https://lfuen.github.io/laCarte/images/laCarte.png"/></span> 
                    {/* <Link to='/SignIn'><button className='shadow' id="returning">Returning User</button></Link> */}
                </div>
            </div>
        )
    }
}



export default Welcome