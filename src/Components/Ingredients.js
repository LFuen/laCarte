import React, {Component} from 'react'
import '../css/Ingredients.css'

class Ingredients extends Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div>
                <h1>Argentinian Veal Cutlets with Vegatables</h1> {/*use props for meal name*/}
                <h2>Ingredients:</h2>
                <ul>
                    <li>Argentinian Veal Cutlets</li>   {/*use props for meal ingredients*/}
                    <li>Green Peppers</li>
                    <li>Red Peppers</li>
                    <li>Tomatoes</li>
                    <li>Onions</li>
                    <li>Salt</li>
                    <li>Ground Pepper</li>
                    <li>Corn Oil</li>
                </ul>
                
                    <h2>Chefs</h2>             {/*use props for chefs name*/}
                <div className='chefs'>
                    <p>Choose a chef:</p>
                    <a href='/ChefBio'>Johnathan</a>      
                    <a href='/ChefBio'>Francesca</a>
                    <a href='/ChefBio'>Joaquin</a>
                </div>
                <a href='/OrderForm'><button type="button">Order</button></a>
            </div>
        )
    }
}


export default Ingredients