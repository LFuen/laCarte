import React, {Component} from 'react'
import '../css/OrderPlaced.css'
class OrderPlaced extends Component{
    render(){
        return(
            <div className='flexed'>
                <a href='/MealChoose'><button type="button" className='shadow'>Schedule Next Meal</button></a>
                    <span title="Received" className='flexedMid'>
                        <img className="order" alt="orderReceived" src="https://lfuen.github.io/laCarte/images/Order.png"/>
                        <a href='/OrderHistory'><button type="button" className='shadow'>View/Edit Order</button></a>
                    </span>    
                <a href='/Welcome'><button type="button" className='shadow'>Sign Out</button></a>
            </div>
        )
    }
}


export default OrderPlaced