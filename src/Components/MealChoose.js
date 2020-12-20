import React, {Component} from 'react'
import '../css/MealChoose.css'


class MealChoose extends Component{
    render(){
        return(
            <div className='choices'>

                <div className='option'>
                <h2>Meals:</h2>
                <a href='/Cuisine'><h3>Asian</h3></a>
                <a href='/Cuisine'><h3>French</h3></a>
                <a href='/Cuisine'><h3>Greek</h3></a>
                <a href='/Cuisine'><h3>Indian</h3></a>
                <a href='/Cuisine'><h3>Latin American</h3></a>
                <a href='/Cuisine'><h3>Mexican</h3></a>
                <a href='/Cuisine'><h3>Middle Eastern</h3></a>
                <a href='/Cuisine'><h3>Italian</h3></a>
                <a href='/Cuisine'><h3>Spanish</h3></a>
                <a href='/Cuisine'><h3>Thai</h3></a>
                <a href='/Cuisine'><h3>U.S.</h3></a>
                <br/>
                <a href='/MealList'><h3>ALL Meals</h3></a>
                </div>

                <div className='option'>
                    <label>Search By Ingredient(s):
                        <input type='text' placeholder='Chicken, tomatoes, etc.'/>
                    </label>
                    <span title="Dinner is Served!"><img className="mainImage" alt="served" src="https://lfuen.github.io/laCarte/images/served.png"/></span> 
                    
                </div>

                <div className='option'>

                    <h2>Chef:</h2>
                    <a href='/ChefBio'><h3>Johnathan</h3></a>
                    <a href='/ChefBio'><h3>Francesca</h3></a>
                    <a href='/ChefBio'><h3>Joaquin</h3></a>
                    <a href='/ChefBio'><h3>Christian</h3></a>
                    <a href='/ChefBio'><h3>Madelyn</h3></a>

                </div>
            </div>
        )
    }
}



export default MealChoose