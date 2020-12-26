import React, {Component} from 'react'
import '../css/Chefs.css'
import LaCarteContext from '../context/LaCarteContext';


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
                        <a href={`/chefs/${chef.chef_name}`} key={chef.id}><h4>{chef.chef_name}</h4></a>
                        )})}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}



export default Chefs