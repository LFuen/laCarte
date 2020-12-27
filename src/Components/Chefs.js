import React, {Component} from 'react'
import '../css/Chefs.css'
import LaCarteContext from '../context/LaCarteContext'
import {BrowserRouter, Link} from 'react-router-dom'


class Chefs extends Component {

    static contextType = LaCarteContext;

    render() {
        const {chefs} = this.context
        return (
            <div className='chefPage'>
                <h1>CHEFS</h1>
                <div className='chefList'>
                    <section className='contain'>
                        <div className='chefImageContainer'>
                            <span title="La Carte">
                            <img className="chefMoji" alt="chefMoji" src="https://lfuen.github.io/laCarte/images/chefmoji.png"/>
                            </span>
                        </div>
                        <div className='box'>  
                        {chefs.map(chef => { return (
                        <Link to={`/chefs/${chef.chef_name}`} key={chef.id}><h4>{chef.chef_name}</h4></Link>
                        )})}
                        </div>
                    </section>
                </div>
            </div> 
        )
    }
}



export default Chefs