import React, {Component} from 'react'
import LaCarteContext from '../context/LaCarteContext'
import '../css/MealChoose.css'


class cuisineChoose extends Component{

    static contextType = LaCarteContext

    render(){

        const {cuisines, chefs} = this.context

        if(cuisines)
        return(
            <div className='choices'>
                
                <div className='option'>                
                    <h2>Cuisines Origin:</h2>
                    {cuisines.map(cuisine => {return(
                    <a href={`/cuisines/${cuisine.id}/${cuisine.origin}`} key={cuisine.id}>
                        <h3>{cuisine.origin}</h3>
                    </a>
                    )})}               
                </div>

                <div className='option'>
                    <span title="Dinner is Served!"><img className="mainImage" alt="served" src="https://lfuen.github.io/laCarte/images/served.png"/></span> 
                    <a href='/cuisineList'><h3>ALL cuisines</h3></a>
                </div>

                <div className='option'>
                    <h2>Chef:</h2>
                    {chefs.map(chef => {return(
                    <a href='/ChefBio' key={chef.id}><h3>{chef.chef_name}</h3></a>
                    )})}
                </div>
            </div>
        )
    }
}



export default cuisineChoose