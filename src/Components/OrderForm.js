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
                        <span>Street Address</span><span className="required">*</span>
                        <input type="text" name="houseadd" placeholder="House number and street name" required/>
                        </label>
                        <label>
                        <span>&nbsp;</span>
                        <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)"/>
                        </label>
                        <label>
                        <span>Town / City</span> <span className="required">*</span>
                        <input type="text" name="city"/> 
                        </label>
                        <label>
                        <span>State / County</span> <span className="required">*</span>
                        <input type="text" name="city"/> 
                        </label>
                        <label>
                        <span>Postcode / ZIP</span> <span className="required">*</span>
                        <input type="text" name="city"/> 
                        </label>
                        <label>
                        <span>Phone</span> <span className="required">*</span>
                        <input type="tel" name="city"/> 
                        </label>
                        <button type="button">Place Order</button>
                    </form>
                </div>

            </div>
        )
    }
}


export default OrderForm