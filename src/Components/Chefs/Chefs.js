import React, {Component} from 'react'
import LaCarteContext from '../../context/LaCarteContext'
import {BrowserRouter, Link} from 'react-router-dom'
import './Chefs.css'


class Chefs extends Component {

    static contextType = LaCarteContext;

    render() {
        const {chefs} = this.context
        return (
            <BrowserRouter>
                <div className='chefPage'>
                    <h1 className='h1Chefs'>CHEFS</h1>
                    <div className='chefList'>
                        <section className='contain'>
                            <div className='chefImageContainer'>
                                <span title='Chef!'>
                                <img alt='chefMoji' src='https://lfuen.github.io/laCarte/images/chefmoji.png'/>
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
            </BrowserRouter>
        )
    }
}



export default Chefs