import React, {Component} from 'react'
import '../css/MealPlan.css'


class MealPlan extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>LA CARTE</h1>
                    <h3>The Healthy-Meal-Alternative App for the Busy Professional.</h3>
                    <h5>(We didn't say workaholic, you did.)</h5>
                </div>
            <div className='mealBox'>
                <div class="columns">
                    <ul class="price">
                        <li class="header">Late Nights</li>
                        <li class="grey">$ 300.00 / Month</li>
                        <li>10 Meals</li>
                        <li>`Same-Day Scheduling (Up to 2 hours before)`</li>
                        <li class="grey"><a href="#" class="button">Sign Up</a></li>
                    </ul>
                </div>

                <div class="columns">
                    <ul class="price">
                        <li class="header">Most Late Nights</li>
                        <li class="grey">$ 500.00 / Month</li>
                        <li>20 Meals</li>
                        <li>`Same-Day Scheduling (Up to 2 hours before)`</li>
                        <li class="grey"><a href="#" class="button">Sign Up</a></li>
                    </ul>
                </div>

                <div class="columns">
                    <ul class="price">
                        <li class="header">Straight Up Always Working</li>
                        <li class="grey">$ 1,000.00 / Month</li>
                        <li>Unlimited Amount of Meals</li>
                        <li>`Same-Day Scheduling (Up to 2 hours before)`</li>
                        <li>`<b>NO</b> cancellation fee (Up tp two hours before)`</li>
                        <li class="grey"><a href="#" class="button">Sign Up</a></li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}



export default MealPlan