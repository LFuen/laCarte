import React, {Component} from 'react'
import LaCarteContext from '../../context/LaCarteContext'
import './Cuisine.css'
import {Link} from 'react-router-dom'


class Cuisine extends Component{

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = LaCarteContext;

    render(){

        const {meals, cuisines} = this.context;
        const originParameter = this.props.match.params.origin;
        const cuisineOrg = cuisines.length > 0 ? cuisines.find(cuisine => cuisine.origin === originParameter) : '';
        const cuisineMeals = meals.filter(meal => meal.cuisine_id === cuisineOrg.id);

        if(cuisineOrg){
        return(
            <div className='dishes' key={cuisineOrg.id}>

                <h1 className='cuisineName'>{cuisineOrg.origin} Dishes</h1>

                {cuisineMeals.map(meal => {
                    return (
                    <div key={meal.id}>
                        <Link to={`/meals/${meal.id}`}>
                            <h4>{meal.meal_name}</h4>
                        </Link>
                    </div>
                )})}
                
            </div>
        )
        } else {
            return (<h3>Sorry, we don't offer that dish just yet!</h3>)
        }
    }
}


export default Cuisine