import React, {Component} from 'react'
import LaCarteContext from '../context/LaCarteContext';
import '../css/ChefBio.css'

class ChefBio extends Component {

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = LaCarteContext

    render() {

        const {chefs} = this.context;
        const chefParam = this.props.match.params.chef;
        const individual = chefs.length > 0 ? chefs.find(chef => chef.chef_name === chefParam) : '';
        console.log(individual.schedule)

    if(chefs.length > 0) {
        let cuisines = individual.cuisine.substring(1)
        cuisines = cuisines.slice(0, -1)
        let cuisine = cuisines.split(',')

        let schedules = individual.schedule.substring(1)
        schedules = schedules.slice(0, -1)
        let schedule = schedules.split(',')

        if(individual) {
        return (
            <div className='wholeBio'>
                <h1>Chef {individual.chef_name}</h1>
                <div className='chefBio'>
                    <p className='bio'>{individual.bio}</p>
                </div>                
                
                <div className='foodSched'>
                    <div className='cuisine'>
                        <h3>Cuisines</h3>
                        {cuisine.map(origin => { return (
                        <p>{origin}</p>                    
                        )})}                    
                    </div>

                    <div className='schedule' >
                        <h3>Schedule</h3>
                        {schedule.map(days => { return (
                        <p>{days}</p>                    
                        )})}                    
                    </div>                    
                </div>

            </div>
        )            
        } else {
            return (<h3>Sorry, that chef doesn't work here!</h3>)
        }
    } else {
        return (<h3> Loading... </h3>)
    }

    }
}



export default ChefBio


// FIGURE OUT HOW TO PUT EACH CHEF IN THEIR OWN BIO PAGE