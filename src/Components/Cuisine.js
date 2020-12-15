import React, {Component} from 'react'
import '../css/Cuisine.css'
import meals from './mockData'

class Cuisine extends Component{
    constructor(){
        super()

        this.state = {
            meals: meals
        }
    }

    render(){
        return(
            <div>
                <br/>
                <h1>{meals[0].origin} Dishes</h1>   {/*use props for cuisine name*/}
                <br/>
                <a href='/Ingredients'>{meals[0].meal_name}</a>
                <br/>
                <a href='/Ingredients'>{meals[1].meal_name}</a>      {/*use props for meal names*/}
                <br/>
                <a href='/Ingredients'>Wonton Soup</a>
                <br/>
                <a href='/Ingredients'>Tuna and Negi Sushi Roll</a>
                <br/>
                <a href='/Ingredients'>Salmon Maki Sushi</a>
                <br/>
                <a href='/Ingredients'>Miso Soup with Tofu, Bean Sprouts, and Herbs</a>
                <br/>
                <a href='/Ingredients'>Korean Kimchi</a>
                <br/>
                <a href='/Ingredients'>Bibimbap</a>
            </div>
        )
    }
}





export default Cuisine