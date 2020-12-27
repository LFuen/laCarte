import React, {Component} from 'react'
import {BrowserRouter, Link} from 'react-router-dom'


class OrderDeleted extends Component{
    render(){
        return(
            <div className='flexed'>
                    <span title="Received" className='flexedMid'>
                        <img className="order" alt="orderReceived" src="https://lfuen.github.io/laCarte/images/mealDelete.png"/>
                    </span>    
                <Link to='/MealChoose'><button type="button" className='shadow'>New Order</button></Link>
            </div>
        )
    }
}


export default OrderDeleted