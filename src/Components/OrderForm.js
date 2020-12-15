import React, {Component} from 'react'
import '../css/OrderForm.css'

class OrderForm extends Component{
    render(){
        return(
            <div className="container">
                <div className="title">
                    <h2>Delivery Form</h2>
                </div>
                
                <div className="d-flex">
                    <form action="" method="">
                        <label>
                        <span>Street Address *</span><br/>
                        <input type="text" name="houseadd" placeholder="House number and street name" required/>
                        </label>
                        <label>
                        <span>Address 2</span><br/>
                        <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)"/>
                        </label>
                        <label>
                        <span>City *</span><br/>
                        <input type="text" name="city" placeholder='City'/> 
                        </label>
                        <label>
                        <span>State / County *</span><br/>
                        <input type="text" name="state" placeholder='State'/> 
                        </label>
                        <label>
                        <span>Postcode / ZIP *</span><br/>
                        <input type="text" name="zip" placeholder='Zip Code'/> 
                        </label>
                        <label>
                        <span>Phone *</span><br/>
                        <input type="tel" name="tel" placeholder='(000) 000-000'/> 
                        </label>
                        <a href='/OrderPlaced'><button type="button" className='shadow'>Place Order</button></a>
                    </form>
                </div>

            </div>
        )
    }
}


export default OrderForm