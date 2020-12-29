import React, {Component} from 'react'
import './OrderPlaced.css'
import {Link} from 'react-router-dom'



class OrderPlaced extends Component{
    render(){
        return(
            <div className='flexed'>
                <Link to='/MealChoose'><button type="button" className='shadow'>Schedule Next Meal</button></Link>
                    <span title="Received" className='flexedMid'>
                        <img className="order" alt="orderReceived" src="https://lfuen.github.io/laCarte/images/Order.png"/>
                    </span>    
                    <Link to='/OrderHistory'><button type="button" className='shadow'>View/Edit Order</button></Link>
                    
                {/* <Link to='/Welcome'><button type="button" className='shadow'>Sign Out</button></Link> */}
            </div>
        )
    }
}


export default OrderPlaced