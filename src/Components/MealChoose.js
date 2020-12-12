import React, {Component} from 'react'
import '../css/MealChoose.css'


class MealChoose extends Component{
    render(){
        return(
            <div className='choices'>

                <div className='option'>
                <h2>Meals:</h2>
                <a href='/laCarte/origins/asian.html'><h3>Asian</h3></a>
                <a href='/laCarte/origins/french.html'><h3>French</h3></a>
                <a href='/laCarte/origins/greek.html'><h3>Greek</h3></a>
                <a href='/laCarte/origins/indian.html'><h3>Indian</h3></a>
                <a href='/laCarte/origins/latin.html'><h3>Latin American</h3></a>
                <a href='/laCarte/origins/mexican.html'><h3>Mexican</h3></a>
                <a href='/laCarte/origins/mideast.html'><h3>Middle Eastern</h3></a>
                <a href='/laCarte/origins/italian.html'><h3>Italian</h3></a>
                <a href='/laCarte/origins/spanish.html'><h3>Spanish</h3></a>
                <a href='/laCarte/origins/thai.html'><h3>Thai</h3></a>
                <a href='/laCarte/origins/us.html'><h3>U.S.</h3></a>
                <br/>
                <a href='/laCarte/allMeals.html'><h3>ALL Meals</h3></a>
                </div>

                <div className='option'>
                    <h2>Search By Ingredient(s):</h2>
                    <input type='text' placeholder='Chicken, tomatoes, etc.'/>
                </div>

                <div className='option'>

                    <h2>Chef:</h2>
                    <a href='/laCarte/chefs/johnathan.html'><h3>Johnathan</h3></a>
                    <a href='/laCarte/chefs/francesca.html'><h3>Francesca</h3></a>
                    <a href='/laCarte/chefs/joaquin.html'><h3>Joaquin</h3></a>
                    <a href='/laCarte/chefs/christian.html'><h3>Christian</h3></a>
                    <a href='/laCarte/chefs/madelyn.html'><h3>Madelyn</h3></a>

                </div>
            </div>
        )
    }
}



export default MealChoose