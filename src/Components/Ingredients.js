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

        if(meals.length > 0){
            const ingID = this.props.match.params.id
            const ingr = meals.length ? meals.find(ing => ing.id === Number(ingID)) : ''
            // GET INDIVIDUAL ITEMS FOR INGREDIENTS AND INDIVIDUAL CHEFS FOR RADIO BUTTONS
            
            let i = ingr.ingredients.substring(1);
            i = i.slice(0, -1);
            let ingredients = i.split(',');
            let chef = ingr.chef.split(',')

            if (ingr) {
                return (
                <div>
                    <div>
                    <h1>{ingr.meal_name}</h1>
                    <h2>Ingredients:</h2>
                        {ingredients.map(i => { return (
                            <p>{i}</p>
                        )})}
                    <br/>
                        <h2>Chefs</h2>             
                    <div className='chefs'>
                        <p>Choose a chef:</p>                
                        <label>
                            {chef.map(j => {return (
                                <div><input type="radio" value={j} required/> <p>{j}</p></div>
                            )})}
                        </label> 
                    </div>
                    </div>
                    <a href={`/orders/${ingr.id}`}><button type="submit" className='shadow'>Order</button></a>
                </div>)
            } else {
                return (<h3>Sorry, we don't cook that yet!</h3>)
            }
        } else {
            return (<h3> Loading... </h3>)
        }
    }
}

export default Ingredients

