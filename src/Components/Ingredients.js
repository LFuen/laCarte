import React, {Component} from 'react'
import '../css/Ingredients.css'
import LaCarteContext from '../context/LaCarteContext';

class Ingredients extends Component{
    
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = LaCarteContext;

    render(){
        const {meals} = this.context
        const ingID = this.props.match.params.id
        const ingr = meals.length ? meals.find(ing => ing.id === Number(ingID)) : ''
        // GET INDIVIDUAL ITEMS FOR INGREDIENTS AND INDIVIDUAL CHEFS FOR RADIO BUTTONS

        if (ingr) {
            return (
            <div>
                <div>
                <h1>{ingr.meal_name}</h1>
                <h2>Ingredients:</h2>
                <p>{ingr.ingredients}</p>
                <br/>
                    <h2>Chefs</h2>             
                <div className='chefs'>
                    <p>Choose a chef:</p>                
                    <label>

                        <input type="radio" value="chef" required/>
                        {ingr.chef.split(',')[0]}
                    </label> 
                </div>
                </div>
                <a href='/OrderForm'><button type="submit" className='shadow'>Order</button></a>
            </div>)
        } else {
            return (<h3>Sorry, we don't cook that yet!</h3>)
        }
    }
}

export default Ingredients

