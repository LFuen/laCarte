import React, {Component} from 'react'
import '../css/OrderHistory.css'
import api from '../config'
import LaCarteContext from '../context/LaCarteContext'


class OrderHistory extends Component{
    static defaultProps = {
        onDeleteOrder: () => {}
    }

    static contextType = LaCarteContext

    clickDelete = e => {
        e.preventDefault()
        
        const orderID = this.props.id

        fetch(`${api.API_ENDPOINT}/api/orders/${orderID}`, {
            method: 'DELETE',
            headers: {
                'Authorization' : 'Bearer c3f5a85c-2f9d-11eb-adc1-0242ac120002',
                'content-type' : 'application/json'
            }
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then(() => {
            this.context.deleteOrder(orderID)
            this.props.onDeleteOrder(orderID)
        })
        .catch(error => {
            console.error({error})
        })
    }

    render() {

        const {orders} = this.context
        

        return(
        <div className='list'>
            <div className='allOrders'>
                {orders.map(order => { return (
                <div>
                <h4>{order.meal}</h4>
                <p className='order'>Address: {order.prim_add}</p>
                <p className='order'>Phone: {order.phone}</p>
                <a href={`/orders/${order.id}`}><button type='button' className='shadow'>Edit</button></a>
                <a href={`/OrderDeleted`}><button type='button' className='shadow' onClick={this.clickDelete}>Delete</button></a>
                </div>
                )})}            
            </div>
        </div>
        )
    }
}



export default OrderHistory