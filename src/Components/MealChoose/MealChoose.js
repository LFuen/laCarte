import React, {Component} from 'react'
import LaCarteContext from '../../context/LaCarteContext'
import {Router, Link} from 'react-router-dom'
import './MealChoose.css'

class cuisineChoose extends Component{

    static contextType = LaCarteContext

    render(){

        const {cuisines, chefs} = this.context

        if(cuisines)
        return(
            <Router>
                <div className='choices'>
                    
                    <div className='option'>                
                        <h2>Cuisine Origins :</h2>
                        {cuisines.map(cuisine => {return(
                            <Link to={`/cuisines/${cuisine.id}/${cuisine.origin}`} key={cuisine.id}>
                                <h3>{cuisine.origin}</h3>
                            </Link>
                        )})}               
                    </div>

                    <div className='option'>
                        <span title='Dinner is Served!'><img className='mainImage' alt='served' src='https://lfuen.github.io/laCarte/images/served.png'/></span> 
                        <Link to='/MealList'><h3>All Meals</h3></Link>
                    </div>

                    <div className='option'>
                        <h2>Chef :</h2>
                        {chefs.map(chef => {return(
                            <Link to={`/chefs/${chef.chef_name}`} key={chef.id}><h3>{chef.chef_name}</h3></Link>
                        )})}
                    </div>
                    
                </div>
            </Router>
        )
    }
}



export default cuisineChoose