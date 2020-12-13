import React, {Component} from 'react'
import '../css/MealList.css'


class MealList extends Component {
    constructor(props){
        super(props)

        const meals = [];

        // for (let i = 0; i < meals.length; i++) {
        //     meals.push({
        //         name: chance.name()
        //     })
        // }

        this.state = { meals };
    }
    render() {
        return (
            <div >
                {/* {this.state.meals.map((meal, index) => (
                    <h4 key={index}> {meal.name}</h4>  
                ))} */}

            </div>
        )
    }
}



export default MealList


{/* <a href='/Ingredients' className='meal'>Argentinian Veal Cutlets with Vegatables</a>
<a href='/Ingredients' className='meal'>Asian-Style Chicken Orzo Salad</a>
<a href='/Ingredients' className='meal'>Baba Ghanoush</a>
<a href='/Ingredients' className='meal'>Bibimbap</a>
<a href='/Ingredients' className='meal'>Butter Chicken with Spinach</a>
<a href='/Ingredients' className='meal'>Calamari and Figueras Onion</a>
<a href='/Ingredients' className='meal'>Camarones del Sur</a>
<a href='/Ingredients' className='meal'>Ceviche</a>
<a href='/Ingredients' className='meal'>Chicken Po Boy</a>
<a href='/Ingredients' className='meal'>Chicken Tikka Masala</a>
<a href='/Ingredients' className='meal'>Chili Pork Adobo</a>
<a href='/Ingredients' className='meal'>Chili Sin Carne</a>
<a href='/Ingredients' className='meal'>Cobb Salad</a>
<a href='/Ingredients' className='meal'>Coconut Soup with Chicken</a>
<a href='/Ingredients' className='meal'>Coq Au Vin</a>
<a href='/Ingredients' className='meal'>Cuban Plantains with Rice and Olives</a>
<a href='/Ingredients' className='meal'>Duck Confit with Shallots</a>
<a href='/Ingredients' className='meal'>Eggplant Moussaka with Sheeps Milk Cheese</a>
<a href='/Ingredients' className='meal'>Fajitas with Beef</a>
<a href='/Ingredients' className='meal'>Flautas</a>
<a href='/Ingredients' className='meal'>Frog Meuniere</a>
<a href='/Ingredients' className='meal'>Garides Saganaki</a>
<a href='/Ingredients' className='meal'>Gazpacho</a>
<a href='/Ingredients' className='meal'>Greek Bouyourdi</a>
<a href='/Ingredients' className='meal'>Greek Salad</a>
<a href='/Ingredients' className='meal'>Green Matcha Chicken</a>
<a href='/Ingredients' className='meal'>Grilled Tuna</a>
<a href='/Ingredients' className='meal'>Huevos Rancheros</a>
<a href='/Ingredients' className='meal'>Kedgeree</a>
<a href='/Ingredients' className='meal'>Korean Kimchi</a>
<a href='/Ingredients' className='meal'>Lamb Kebabs</a>
<a href='/Ingredients' className='meal'>Mexican Corn and Bean Salad</a>
<a href='/Ingredients' className='meal'>Miso Soup with Tofu, Bean Sprouts, and Herbs</a>
<a href='/Ingredients' className='meal'>Nicoise Salad with Fresh Tuna</a>
<a href='/Ingredients' className='meal'>Pad Thai Noodles</a>
<a href='/Ingredients' className='meal'>Patatas Bravas</a>
<a href='/Ingredients' className='meal'>Pide</a>
<a href='/Ingredients' className='meal'>Potato Tortilla</a>
<a href='/Ingredients' className='meal'>Ravioli with Gorganzola</a>
<a href='/Ingredients' className='meal'>Red Duck Curry</a>
<a href='/Ingredients' className='meal'>Rigatoni with Veal</a>
<a href='/Ingredients' className='meal'>Roast Lamb with Indian Spices</a>
<a href='/Ingredients' className='meal'>Roasted Pumpkin and Pear Soup</a>
<a href='/Ingredients' className='meal'>Salmon Maki Sushi</a>
<a href='/Ingredients' className='meal'>Seared Scallops with Osetra Caviar and Potato-Chive Mousseline</a>
<a href='/Ingredients' className='meal'>Slow-Cooked Beef Short Ribs</a>
<a href='/Ingredients' className='meal'>Spaghetti Napoli</a>
<a href='/Ingredients' className='meal'>Spicy Tomato and Carrot Soup</a>
<a href='/Ingredients' className='meal'>Spinach Quiche</a>
<a href='/Ingredients' className='meal'>Squash Gnocchi</a>
<a href='/Ingredients' className='meal'>Stir-fry Tofu with Sweet and Sour Vegetables</a>
<a href='/Ingredients' className='meal'>Tandoori Duck</a>
<a href='/Ingredients' className='meal'>Thai Spring Rolls</a>
<a href='/Ingredients' className='meal'>Tomato Soup with Goat Cheese</a>
<a href='/Ingredients' className='meal'>Traditional Falafel</a>
<a href='/Ingredients' className='meal'>Tuna and Negi Sushi Roll</a>
<a href='/Ingredients' className='meal'>Turkey Burger</a>
<a href='/Ingredients' className='meal'>Wonton Soup</a> */}


// http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx



