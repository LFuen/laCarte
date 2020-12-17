import React, {Component} from 'react'
import '../css/OrderPlaced.css'
class OrderPlaced extends Component{
    render(){
        return(
            <div>
                <a href='/MealChoose'><button type="button" className='shadow'>Schedule Next Meal</button></a>
                <span title="Received"><img className="order" alt="orderReceived" src="https://lfuen.github.io/laCarte/images/Order.png"/></span>
                <a href='/Welcome'><button type="button" className='shadow'>Sign Out</button></a>
            </div>
        )
    }
}


export default OrderPlaced