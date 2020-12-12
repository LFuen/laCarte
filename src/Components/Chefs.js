import React, {Component} from 'react'
import '../css/Chefs.css'


class Chefs extends Component {
    render() {
        return (
            <div className='chefs'>
                <h1>CHEFS</h1>
                <br/>
                <section className='contain'>
                    <div className='box'>                    
                        <h4>Chef Johnathan Middleton</h4>
                        <h4>Chef Francesca Guiles</h4>
                    </div>
                    <div className='box'>
                        <h4>Chef Joaquin Hernandez</h4>
                        <span title="La Carte"><img className="chefMoji" alt="chefMoji" src="https://lfuen.github.io/laCarte/images/chefmoji.png"/></span>
                    </div>
                    <div className='box'>
                    <h4>Chef Christian Hollander</h4>
                    <h4>Chef Madelyn Staes</h4>
                    </div>
                </section>
            </div>
        )
    }
}



export default Chefs