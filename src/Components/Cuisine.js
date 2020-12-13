import React, {Component} from 'react'


class Cuisine extends Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div>
                <h1>ASIAN DISHES</h1>   {/*use props for cuisine name*/}
                <br/>
                    <a href='/Ingredients'>Asian-Style Chicken Orzo Salad</a>
                    <a href='/Ingredients'>Stir-fry Tofu with Sweet and Sour Vegetables</a>      {/*use props for meal names*/}
                    <a href='/Ingredients'>Wonton Soup</a>
                    <a href='/Ingredients'>Tuna and Negi Sushi Roll</a>
                    <a href='/Ingredients'>Salmon Maki Sushi</a>
                    <a href='/Ingredients'>Miso Soup with Tofu, Bean Sprouts, and Herbs</a>
                    <a href='/Ingredients'>Korean Kimchi</a>
                    <a href='/Ingredients'>Bibimbap</a>
            </div>
        )
    }
}





export default Cuisine