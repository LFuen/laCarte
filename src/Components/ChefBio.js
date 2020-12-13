import React, {Component} from 'react'
import '../css/ChefBio.css'

class ChefBio extends Component {
    render() {
        return (
            <div>
                <h1>Chef Christian</h1>     {/*use props for chef name*/}
                <br/>
                <img src=''/>       {/*use props for chef image*/}
                <br/>
                <p className='bio'>Biography will go here.</p>     {/*use props for chef bio*/}
                <br/>
                <p className='cuisine'>Cuisine</p>      {/*use props for chef cuisine*/}
                <br/>
                <p className='schedule'>Schedule</p>        {/*use props for chef schedule*/}
            </div>
        )
    }
}



export default ChefBio


// FIGURE OUT HOW TO PUT EACH CHEF IN THEIR OWN BIO PAGE