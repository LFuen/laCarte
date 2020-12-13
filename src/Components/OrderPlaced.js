import React, {Component} from 'react'

class OrderPlaced extends Component{
    render(){
        return(
            <div>
                <span title="Received"><img className="order" alt="orderReceived" src="https://lfuen.github.io/laCarte/images/Order.png"/></span>
                <a href='/OrderPlaced'><button type="button">Sign Out</button></a>
            </div>
        )
    }
}


export default OrderPlaced