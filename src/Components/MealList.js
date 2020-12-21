import React, {Component} from 'react'
import '../css/MealList.css'
import meals from './mockData'  // this info comes from DB/API and NOT from js
import LaCarteContext from '../context/LaCarteContext';

// a higher file... maybe like App.js, you will setup the API base routes...
// you will do a request to the API, to get the list of meals with all its contents
// you can potentially pass this down through parent component as props, or you can use context
// response you're going to get back, will look pretty much identical to the mockMeals array (JSON)

class MealList extends Component {

    static contextType = LaCarteContext;

    render() {
        const {meals} = this.context;
        return (
            <div className='mealList'>
                {meals.map(meal => { return (
                <a href='/Ingredients'>
                    <div className='polaroid'>
                            <span title="La Carte"><img className="chefMoji" alt={meal.meal_name} src={meal.img_url} /></span>
                            <div className='container'>{<p>{meal.meal_name}</p>}</div>
                    </div>
                </a>
                )})}
            </div>
        )
    }
}

export default MealList




// http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx



