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

        if(individual) {
        return (
            <div>
                <h1>Chef {individual.chef_name}</h1>     {/*use props for chef name*/}
                <br/>
                <img src='' alt=''/>       {/* use props for chef image */}
                <br/>
                <p className='bio'>{individual.bio}</p>     {/*use props for chef bio*/}
                <br/>
                <p className='cuisine'>Cuisines: {individual.cuisine}</p>      {/*use props for chef cuisine*/}
                <br/>
                <p className='schedule'>Schedule: {individual.schedule}</p>        {/*use props for chef schedule*/}
            </div>
        )            
        } else {
            return (<h3>Sorry, that chef doesn't work here!</h3>)
        }

    }
}



export default ChefBio


// FIGURE OUT HOW TO PUT EACH CHEF IN THEIR OWN BIO PAGE