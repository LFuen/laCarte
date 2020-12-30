import React, {Component} from 'react'
import api from '../../config'
import LaCarteContext from '../../context/LaCarteContext'
import {Link} from 'react-router-dom'
import './OrderHistory.css'


class OrderHistory extends Component{

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = LaCarteContext

    state = {
        error: null
    }


    clickDelete = id => {

        this.setState({error: null})
        fetch(`${api.API_ENDPOINT}/api/orders/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${api.API_KEY}`,
                'content-type' : 'application/json'
            }
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(e => Promise.reject(e))
        })
        .then(() => {
            this.context.deleteOrder(id)
        })
        .catch(error => {
            console.error({error})
            this.setState({error})
        })
    }

    render() {

        const {orders} = this.context
        
        if(orders.length > 0){
        return(
            <div className='list'>
                <div className='allOrders'>
                    {orders.map(order => { return (
                    <div key={order.id} className='eachOrder'>
                        <h4>{order.meal}</h4>
                        <p className='order'>Address: {order.prim_add}</p>
                        <p className='order'>Phone: {order.phone}</p>
                        <Link to={`/orders/${order.id}/${order.meal}`}><button type='button' className='shadow'>Edit</button></Link>
                        <button type='button' className='shadow' onClick={() => this.clickDelete(order.id)}>
                                Delete
                        </button>
                    </div>
                    )})}            
                </div>
            </div>
        )}else if(orders.length <= 0){
            return (<img alt='No Orders' className='noOrder' src='https://lfuen.github.io/laCarte/images/noOrder.png'/>)
        }
    }
}



export default OrderHistory