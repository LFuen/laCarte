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

        const {meals, chefs} = this.context;
        const chefParam = this.props.match.params.chef;
        const individual = chefs.length > 0 ? chefs.find(chef => chef.chef_name === chefParam) : '';
        const name = meals.filter(meal => meal.chef === individual.id);
        console.log(individual.schedule)

        let cuisines = individual.cuisine.substring(1)
        cuisines = cuisines.slice(0, -1)
        let cuisine = cuisines.split(',')

        let schedules = individual.schedule.substring(1)
        schedules = schedules.slice(0, -1)
        let schedule = schedules.split(',')

        if(individual) {
        return (
            <div className='chefBio'>
                <h1>Chef {individual.chef_name}</h1>
                <br/>
                <img src='' alt=''/>       
                <br/>
                <p className='bio'>{individual.bio}</p>
                <br/>
                <h3>Cuisines :</h3>
                {cuisine.map(origin => { return (
                <p className='cuisine'>{origin}</p>                    
                )})}

                <br/>
                <h3>Schedule :</h3>
                {schedule.map(days => { return (
                <p className='schedule'>{days}</p>                    
                )})}
            </div>
        )            
        } else {
            return (<h3>Sorry, that chef doesn't work here!</h3>)
        }

    }
}



export default ChefBio


// FIGURE OUT HOW TO PUT EACH CHEF IN THEIR OWN BIO PAGE