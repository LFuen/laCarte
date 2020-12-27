import React, {Component} from 'react'
import '../css/MealList.css'
import LaCarteContext from '../context/LaCarteContext'
import {Link} from 'react-router-dom'


class MealList extends Component {

    static contextType = LaCarteContext

    render() {
        const {meals} = this.context
        return (
            <div className='mealList'>
                {meals.map(meal => { return (
                <Link to={`/meals/${meal.id}`} key={meal.id}>
                    <div className='polaroid'>
                        <span title="La Carte">
                            <img className="chefMoji" alt={meal.meal_name} src={meal.img_url} />
                        </span>
                        <div className='container'>
                            {<p>{meal.meal_name}</p>}
                        </div>
                    </div>
                </Link>
                )})}
            </div>
        )
    }
}

export default MealList




// http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx



