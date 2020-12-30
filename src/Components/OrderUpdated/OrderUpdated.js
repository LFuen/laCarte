import React, {Component} from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import '../OrderUpdated/OrderUpdated.css'


class OrderUpdated extends Component{

    render(){
        return(
            <BrowserRouter>
                <div className='flexed'>
                    <span title='Received' className='flexedMid'>
                        <img className='order' alt='orderReceived' src='https://lfuen.github.io/laCarte/images/mealUpdated.png'/>
                    </span>    
                    <Link to='/OrderHistory'><button type='button' className='shadow'>View Orders</button></Link>
                </div>
            </BrowserRouter>
        )
    }
}


export default OrderUpdated