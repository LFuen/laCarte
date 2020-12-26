import React, {Component} from 'react'
import LaCarteContext from '../context/LaCarteContext'
import '../css/OrderForm.css'

class OrderForm extends Component{

    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = LaCarteContext

    render(){

        const {meals} = this.context

        if(meals.length > 0){
            const idParam = this.props.match.params.id
            const order = meals.find(meal => meal.id === Number(idParam));
            console.log("HIT ORDER FORM");
            console.log(meals);
            console.log(idParam);
            console.log(order);
        return(
            <div className="container">
                <div className="title">
                    <h2>Delivery Form</h2>
                    <div className="d-flex">
                    <form action="" method="" className='orderForm'>
                        <label>
                        <h3>{order.meal_name}</h3>
                        <span>Street Address *</span><br/>
                        <input type="text" name="houseadd" placeholder="House number and street name" required/>
                        </label>
                        <label>
                        <span>Address 2</span><br/>
                        <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)"/>
                        </label>
                        <label>
                        <span>City *</span><br/>
                        <input type="text" name="city" placeholder='City'/> 
                        </label>
                        <label>
                        <span>State / County *</span><br/>
                        <input type="text" name="state" placeholder='State'/> 
                        </label>
                        <label>
                        <span>Postcode / ZIP *</span><br/>
                        <input type="text" name="zip" placeholder='Zip Code'/> 
                        </label>
                        <label>
                        <span>Phone *</span><br/>
                        <input type="tel" name="tel" placeholder='(000) 000-000'/> 
                        </label>
                        <a href='/MealChoose'><button type="button" className='shadow'>Change Meal</button></a>
                        <a href='/OrderPlaced'><button type="button" className='shadow'>Place Order</button></a>
                    </form>
                </div>
                </div>
            </div>
        )} else {
            return (<h2>Loading..</h2>)
        }
    }
}


export default OrderForm