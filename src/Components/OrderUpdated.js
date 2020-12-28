import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class OrderUpdated extends Component{

    render(){
        return(
            <div className='flexed'>
                    <span title="Received" className='flexedMid'>
                        <img className="order" alt="orderReceived" src="https://lfuen.github.io/laCarte/images/mealUpdated.png"/>
                    </span>    
                <Link to='/OrderHistory'><button type="button" className='shadow'>View Orders</button></Link>
            </div>
        )
    }
}


export default OrderUpdated