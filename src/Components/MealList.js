import React, {Component} from 'react'
import '../css/MealList.css'
import meals from './mockData'  // this info comes from DB/API and NOT from js

// a higher file... maybe like App.js, you will setup the API base routes...
// you will do a request to the API, to get the list of meals with all its contents
// you can potentially pass this down through parent component as props, or you can use context
// response you're going to get back, will look pretty much identical to the mockMeals array (JSON)

class MealList extends Component {
    render() {
        return (
            <div className='mealList'>
                <a href='/Ingredients'><div className='polaroid'>
                    <span title="La Carte"><img className="chefMoji" alt="argVeal" src="https://lfuen.github.io/laCarte/images/meals/orzo.jpg"/></span>
                    {/* {this.state.meals.map((meal, index) => (
                        <h4 key={index}> {meal.name}</h4>  
                    ))} */}
                    {/* <span title="Food"><img className="meal" alt="argVeal" src="https://lfuen.github.io/laCarte/images/meals/argVeal.jpg"/></span> */}
                    <div className='container'>{<p>{meals[0].meal_name}</p>}</div>
                </div></a>
                <a href='/Ingredients'><div className='polaroid'>
                    <span title="La Carte"><img className="chefMoji" alt="bibimbap" src="https://lfuen.github.io/laCarte/images/meals/bibimbap.jpg"/></span>
                    <div className='container'>{<p>{meals[1].meal_name}</p>}</div>
                </div></a>
                <a href='/Ingredients'><div className='polaroid'>
                    <span title="La Carte"><img className="chefMoji" alt="argVeal" src="https://lfuen.github.io/laCarte/images/meals/butterChicken.jpg"/></span>
                    <div className='container'>{<p>{meals[2].meal_name}</p>}</div>
                </div></a>
            </div>
        )
    }
}

export default MealList




// http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx



