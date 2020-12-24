import React, {Component} from 'react'
import '../css/OrderHistory.css'
import LaCarteContext from '../context/LaCarteContext'


class OrderHistory extends Component{
    static contextType = LaCarteContext

    render() {

        const {orders, meals} = this.context

        return(
        <div className='list'>
            <div className='allOrders'>
                {orders.map(order => { return (
                <div><h4>{order.id}</h4>
                <p className='order'>Address: {order.prim_add}</p>
                <p className='order'>Phone: {order.phone}</p>
                </div>
                )})}
                <a href={`/orders/${meal.id}/${order.id}`}><button type="button" className='shadow'>Edit</button></a>
                <a href={`/orders/${order.id}`}><button type="button" className='shadow'>Delete</button></a>
            </div>

        </div>
        )
    }
}



export default OrderHistory