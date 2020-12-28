import React, {Component} from 'react'
import '../css/OrderHistory.css'
import api from '../config'
import LaCarteContext from '../context/LaCarteContext'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


class OrderHistory extends Component{

    static defaultProps = {
        match: {
            params: {}
        },
        onDeleteOrder: () => {}
    }

    static propTypes = {
        onClick: PropTypes.func,
        order: PropTypes.shape({
            id: PropTypes.number.isRequired,
            prim_add: PropTypes.string.isRequired,
            sec_add: PropTypes.string,            
            city: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            zip: PropTypes.number.isRequired,
            phone: PropTypes.number.isRequired,
            meal: PropTypes.string.isRequired
        })
    }

    static contextType = LaCarteContext

    state = {
        error: null
    }

    clickDelete = e => {
        e.preventDefault()
        
        const orderID = this.context.orders.id
        console.log('context is', this.context.orders[0].id)

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
            this.props.onDeleteOrder(orderID)
        })
        .catch(error => {
            console.error({error})
            this.setState({error})
        })
    }

    // clickEdit() {
    //     e.preventDefault()

    //     const orderID = this.context.id

    //     fetch(`${api.API_ENDPOINT}/api/orders/${orderID}`, {
    //         method: 'PATCH',
    //         headers: {'content-type': 'application/json'},
    //         body: JSON.stringify({
    //             "prim_add": PropTypes.string.isRequired,
    //             "sec_add": PropTypes.string,            
    //             "city": PropTypes.string.isRequired,
    //             "state": PropTypes.string.isRequired,
    //             "zip": PropTypes.number.isRequired,
    //             "phone": PropTypes.number.isRequired,
    //             "meal": PropTypes.string.isRequired
    //         })
    //     })
    // }

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
                <Link to={`/orders/${order.id}`}><button type='button' className='shadow' onClick={this.clickEdit}>Edit</button></Link>
                <button type='button' className='shadow' onClick={this.clickDelete}>
                        Delete
                </button>
                </div>
                )})}            
            </div>
        </div>
        )
    }
}



export default OrderHistory