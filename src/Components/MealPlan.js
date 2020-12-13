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
                <div className='columns'>
                    <ul className='price'>
                        <li className='header'>Late Nights</li>
                        <li className='grey'>$ 300.00 / Month</li>
                        <li>10 Meals</li>
                        <li>`Same-Day Scheduling (Up to 2 hours before)`</li>
                        <li>`Free Delivery (Driver Tip Not Included)`</li>
                        <li className='grey'><a href='/SignUp' className='button'>Sign Up</a></li>
                    </ul>
                </div>

                <div className='columns'>
                    <ul className='price'>
                        <li className='header'>Most Late Nights</li>
                        <li className='grey'>$ 500.00 / Month</li>
                        <li>20 Meals</li>
                        <li>`Same-Day Scheduling (Up to 2 hours before)`</li>
                        <li>`Free Delivery (Driver Tip Not Included)`</li>
                        <li className='grey'><a href='/SignUp' className='button'>Sign Up</a></li>
                    </ul>
                </div>

                <div className='columns'>
                    <ul className='price'>
                        <li className='header'>Straight Up Always Working</li>
                        <li className='grey'>$ 1,000.00 / Month</li>
                        <li>Unlimited Amount of Meals</li>
                        <li>`Same-Day Scheduling (Up to 2 hours before)`</li>
                        <li>`Free Delivery (Driver Tip Not Included)`</li>
                        <li>`<b>NO</b> cancellation fee (Up tp two hours before)`</li>
                        <li className='grey'><a href='/SignUp' className='button'>Sign Up</a></li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}



export default MealPlan


// transitioning effect : https://blog.bitsrc.io/how-to-implement-smooth-transitions-in-react-bd0497b06b8