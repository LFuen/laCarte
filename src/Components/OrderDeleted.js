import React, {Component} from 'react'


class OrderDeleted extends Component{
    render(){
        return(
            <div className='flexed'>
                    <span title="Received" className='flexedMid'>
                        <img className="order" alt="orderReceived" src="https://lfuen.github.io/laCarte/images/mealDelete.png"/>
                    </span>    
                <a href='/MealChoose'><button type="button" className='shadow'>New Order</button></a>
            </div>
        )
    }
}


export default OrderDeleted