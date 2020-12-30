import React, {Component} from 'react'
import LaCarteContext from '../../context/LaCarteContext'
import '../OrderForm/OrderForm.css'
import PropTypes from 'prop-types'
import api from '../../config'



class OrderEdit extends Component{

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object
        }),
        history: PropTypes.object
    }
    static contextType = LaCarteContext

    state = {
        error: null,
    }

    handleSubmit = event => {
        event.preventDefault()

        const idParam = this.props.match.params.id

        const {houseadd, apartment, city, state, zip, tel, meal} = event.target
        
        const order = {
            prim_add: houseadd.value,
            sec_add: apartment.value,
            city: city.value,
            state: state.value,
            zip: zip.value,
            phone: tel.value,
            meal: meal.value
        }
        this.setState({error: null})
        fetch(`${api.API_ENDPOINT}/api/orders/${idParam}`, {
            method: 'PATCH',
            body: JSON.stringify(order),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${api.API_KEY}`
            }
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
        })
        .then(() => {
            order.id = Number(idParam)
            this.context.updateOrder(order)
            this.props.history.push('/OrderUpdated')
        })
        .catch(error => {

            this.setState({error})
        })
    }


    render(){

        const {orders} = this.context

        if(orders.length > 0){
            const idParam = this.props.match.params.id
            const order = orders.find(order => order.id === Number(idParam));

            return(
            <div className='container'>
                <div className='title'>
                    <h2>Change Order</h2>
                    <div className='d-flex'>
                    <form onSubmit={this.handleSubmit} method='' className='orderForm'>
                        <label>
                        <span>Meal</span><br/>
                        <input id='meal' type='text' name='meal' value={order.meal} required readOnly/>
                        </label>
                        <label>
                        <span>Street Address *</span><br/>
                        <input id='houseadd' type='text' name='houseadd' placeholder='House number and street name' required/>
                        </label>
                        <label>
                        <span>Address 2</span><br/>
                        <input id='apartment' type='text' name='apartment' placeholder='Apartment, suite, unit etc. (optional)'/>
                        </label>
                        <label>
                        <span>City *</span><br/>
                        <input id='city' type='text' name='city' placeholder='City'/> 
                        </label>
                        <label>
                        <span>State / County *</span><br/>
                        <input id='state' type='text' name='state' placeholder='State'/> 
                        </label>
                        <label>
                        <span>Postcode / ZIP *</span><br/>
                        <input id='zip' type='text' name='zip' pattern='[0-9]{5}' placeholder='Zip Code'/> 
                        </label>
                        <label>
                        <span>Phone *</span><br/>
                        <input id='tel' type='tel' name='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='000-000-000'/>
                        </label>
                        <button type='submit' className='shadow'>
                            Save Order
                        </button>
                    </form>
                </div>
                </div>
            </div>
        )} else {
            return (<h2>Loading..</h2>)
        }
    }
}


export default OrderEdit