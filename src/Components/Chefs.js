import React, {Component} from 'react'
import '../css/Chefs.css'
import LaCarteContext from '../context/LaCarteContext';


class Chefs extends Component {

    static contextType = LaCarteContext;

    render() {
        const {chefs} = this.context
        return (
            <div>
                <h1>CHEFS</h1>
                <div className='chefs'>
                    <br/>
                    <section className='contain'>
                        <div className='chefImageContainer'>
                            <span title="La Carte">
                            <img className="chefMoji" alt="chefMoji" src="https://lfuen.github.io/laCarte/images/chefmoji.png"/>
                            </span>
                        </div>
                        <div className='box'>  
                        {chefs.map(chef => { return (
                        <a href='/ChefBio'><h4>{chef.chef_name}</h4></a>
                        )})}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}



export default Chefs