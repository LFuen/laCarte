import React, {Component} from 'react'
import './Ingredients.css'
import LaCarteContext from '../../context/LaCarteContext'
import {Link} from 'react-router-dom'

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
            
            let listing = ingr.ingredients.substring(1)
            listing = listing.slice(0, -1)
            let ingredients = listing.split(',')
            console.log(ingredients)

            let chefList = ingr.chef.substring(1)
            chefList = chefList.slice(0, -1)
            let chefs = chefList.split(',')

            if (ingr) {
                return (
                <div className='page'>
                    <h1>{ingr.meal_name}</h1>
                    <img src={ingr.img_url} className='mealIng' alt={ingr.meal_name} title={ingr.meal_name}/>
                    <div className='group'> 
                        <div className='ingredients'>
                            <h2>Ingredients:</h2>
                            {ingredients.map(list => { return (
                                <p className='listing'>{list}</p>
                            )})}
                        </div>                        
                        <br/>
                        <div className='chefs'>                        
                            <h2>Chefs</h2>             
                            <p className='listing'>Who would You like to prepare your meal?</p>                

                            {chefs.map(chef => {return (
                            <label>
                                <input type='radio' value={chef} required/><br/><p className='listing'>{chef}</p>
                            </label>
                            )})}
                        </div>                        
                    </div>
                    <Link to={`/orders/${ingr.id}`}><button type='submit' className='shadow'>Order</button></Link>
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

