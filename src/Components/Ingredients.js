import React, {Component} from 'react'
import '../css/Ingredients.css'
import meals from './mockData'

class Ingredients extends Component{
    constructor(){
        super()

        this.state = {
            meals: meals
        }
    }

    render(){
        return(
            <div>
                <h1>{meals[0].meal_name}</h1> {/*use props for meal name*/}
                <h2>Ingredients:</h2>
                <p>{meals[0].ingredients}</p>
                <br/>
                    <h2>Chefs</h2>             {/*use props for chefs name*/}
                <div className='chefs'>
                    <p>Choose a chef:</p>
                    <label>
                        <input type="radio" value="chef" required/>
                            {meals[0].chef[0]}
                    </label>  
                    <label>
                        <input type="radio" value="chef"/>
                            {meals[0].chef[1]}
                    </label>
                    <label>
                        <input type="radio" value="chef"/>
                            {meals[0].chef[2]}
                    </label>
                    <label>
                        <input type="radio" value="chef"/>
                            {meals[0].chef[3]}
                    </label>
                </div>
                <a href='/OrderForm'><button type="submit" className='shadow'>Order</button></a>
            </div>
        )
    }
}

/*
CHEFS
ID, NAME, FIELD1, FIELD2

ORDERS
ID, PRIM_ADDRESS, SEC_ADDRESS, CITY, STATE, ZIP, PHONE, CHEF_ID

MEALS
ID, FIELD1, FIELD2, Array<Chef_ID>
*/
export default Ingredients