import React, {Component} from 'react'
import '../css/OrderForm.css'

class OrderForm extends Component{
    render(){
        return(
            <div class="container">
                <div class="title">
                    <h2>Product Order Form</h2>
                </div>
                
                <div class="d-flex">
                    <form action="" method="">
                        <label>
                        <span>Street Address</span><span class="required">*</span>
                        <input type="text" name="houseadd" placeholder="House number and street name" required/>
                        </label>
                        <label>
                        <span>&nbsp;</span>
                        <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)"/>
                        </label>
                        <label>
                        <span>Town / City</span> <span class="required">*</span>
                        <input type="text" name="city"/> 
                        </label>
                        <label>
                        <span>State / County</span> <span class="required">*</span>
                        <input type="text" name="city"/> 
                        </label>
                        <label>
                        <span>Postcode / ZIP</span> <span class="required">*</span>
                        <input type="text" name="city"/> 
                        </label>
                        <label>
                        <span>Phone</span> <span class="required">*</span>
                        <input type="tel" name="city"/> 
                        </label>
                    </form>
                </div>


                <div class="Yorder">
                    <table>
                    <tr>
                        <th colspan="2">Your order</th>
                    </tr>
                    <tr>
                        <td>Product Name x 2(Qty)</td>
                        <td>$88.00</td>
                    </tr>
                    <tr>
                        <td>Subtotal</td>
                        <td>$88.00</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Free shipping</td>
                    </tr>
                    </table>
                    <br/>
                    <div>
                        <input type="radio" name="dbt" value="dbt" checked/> Direct Bank Transfer
                    </div>
                    <p>
                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                    <div>
                        <input type="radio" name="dbt" value="cd"/> Cash on Delivery
                    </div>
                    <div>
                        <input type="radio" name="dbt" value="cd"/> Paypal
                        <span>
                        <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50"/>
                        </span>
                    </div>
                
                <button type="button">Place Order</button>

                </div>
            </div>
        )
    }
}


export default OrderForm