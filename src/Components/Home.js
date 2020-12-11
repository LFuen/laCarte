import React, {Component} from 'react'
import '../css/Home.css'



class Home extends Component {
    render() {
        return (
            <div>
                <span title="La Carte"><img className="titleImage" alt="LaCarte" src="https://lfuen.github.io/laCarte/images/laCarteFont.png"/></span> 
                <h3 className='worked'>The Healthy-Meal-Alternative App for the Busy Professional.</h3>
                <h5>(We didn't say workaholic, you did.)</h5>
                <div className='flexed'>
                    <a href='/MealPlan'><button className='shadow' id="newuser">Sign Me Up</button></a>
                    <span title="Bon Apetit!"><img className="mainImage" alt="laCarte" src="https://lfuen.github.io/laCarte/images/laCarte.png"/></span> 
                    <a href='/Meals'><button className='shadow' id="returning">Returning User</button></a>
                </div>
            </div>
        )
    }
}



export default Home

// NEED TO ADD METHOD FOR onClick to route to Sign In or Sign Up