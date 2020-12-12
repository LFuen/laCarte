import React, {Component} from 'react'
import '../css/Chefs.css'


class Chefs extends Component {
    render() {
        return (
            <div>
                <h1>CHEFS</h1>
                <br/>
                <section className='background'>
                    <span title="La Carte"><img className="chefMoji" alt="chefMoji" src="https://lfuen.github.io/laCarte/images/chefmoji.png"/></span>
                </section>
                <ul>
                    <li>Chef Johnathan Middleton</li>
                    <li>Chef Francesca Guiles</li>
                    <li>Chef Joaquin Hernandez</li>
                    <li>Chef Christian Hollander</li>
                    <li>Chef Madelyn Staes</li>
                </ul>
            </div>
        )
    }
}



export default Chefs