import React, {Component} from 'react'
import LaCarteContext from '../context/LaCarteContext'
import '../css/Cuisine.css'


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

        if(cuisineOrg && cuisineMeals.length > 0){
        return(
            <div>
                <br/>
                <h1>{cuisineOrg.origin} Dishes</h1>
                <br/>
                {cuisineMeals.map(meal => {
                    return (<a href={`/meals/${meal.id}`} key={meal.id}>{meal.meal_name}</a>)
                })}
                
                <br/>
            </div>
        )
        } else {
            return (<h3>Sorry, we don't offer that dish just yet!</h3>)
        }
    }
}





export default Cuisine