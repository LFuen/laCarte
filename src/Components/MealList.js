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
                    <h4 key={index}>This is {meal.name}</h4>  
                ))} */}
<a href='https://www.google.com' className='meal'>Argentinian Veal Cutlets with Vegatables</a>
<a href='https://www.google.com' className='meal'>Asian-Style Chicken Orzo Salad</a>
<a href='https://www.google.com' className='meal'>Baba Ghanoush</a>
<a href='https://www.google.com' className='meal'>Bibimbap</a>
<a href='https://www.google.com' className='meal'>Butter Chicken with Spinach</a>
<a href='https://www.google.com' className='meal'>Calamari and Figueras Onion</a>
<a href='https://www.google.com' className='meal'>Camarones del Sur</a>
<a href='https://www.google.com' className='meal'>Ceviche</a>
<a href='https://www.google.com' className='meal'>Chicken Po Boy</a>
<a href='https://www.google.com' className='meal'>Chicken Tikka Masala</a>
<a href='https://www.google.com' className='meal'>Chili Pork Adobo</a>
<a href='https://www.google.com' className='meal'>Chili Sin Carne</a>
<a href='https://www.google.com' className='meal'>Cobb Salad</a>
<a href='https://www.google.com' className='meal'>Coconut Soup with Chicken</a>
<a href='https://www.google.com' className='meal'>Coq Au Vin</a>
<a href='https://www.google.com' className='meal'>Cuban Plantains with Rice and Olives</a>
<a href='https://www.google.com' className='meal'>Duck Confit with Shallots</a>
<a href='https://www.google.com' className='meal'>Eggplant Moussaka with Sheeps Milk Cheese</a>
<a href='https://www.google.com' className='meal'>Fajitas with Beef</a>
<a href='https://www.google.com' className='meal'>Flautas</a>
<a href='https://www.google.com' className='meal'>Frog Meuniere</a>
<a href='https://www.google.com' className='meal'>Garides Saganaki</a>
<a href='https://www.google.com' className='meal'>Gazpacho</a>
<a href='https://www.google.com' className='meal'>Greek Bouyourdi</a>
<a href='https://www.google.com' className='meal'>Greek Salad</a>
<a href='https://www.google.com' className='meal'>Green Matcha Chicken</a>
<a href='https://www.google.com' className='meal'>Grilled Tuna</a>
<a href='https://www.google.com' className='meal'>Huevos Rancheros</a>
<a href='https://www.google.com' className='meal'>Kedgeree</a>
<a href='https://www.google.com' className='meal'>Korean Kimchi</a>
<a href='https://www.google.com' className='meal'>Lamb Kebabs</a>
<a href='https://www.google.com' className='meal'>Mexican Corn and Bean Salad</a>
<a href='https://www.google.com' className='meal'>Miso Soup with Tofu, Bean Sprouts, and Herbs</a>
<a href='https://www.google.com' className='meal'>Nicoise Salad with Fresh Tuna</a>
<a href='https://www.google.com' className='meal'>Pad Thai Noodles</a>
<a href='https://www.google.com' className='meal'>Patatas Bravas</a>
<a href='https://www.google.com' className='meal'>Pide</a>
<a href='https://www.google.com' className='meal'>Potato Tortilla</a>
<a href='https://www.google.com' className='meal'>Ravioli with Gorganzola</a>
<a href='https://www.google.com' className='meal'>Red Duck Curry</a>
<a href='https://www.google.com' className='meal'>Rigatoni with Veal</a>
<a href='https://www.google.com' className='meal'>Roast Lamb with Indian Spices</a>
<a href='https://www.google.com' className='meal'>Roasted Pumpkin and Pear Soup</a>
<a href='https://www.google.com' className='meal'>Salmon Maki Sushi</a>
<a href='https://www.google.com' className='meal'>Seared Scallops with Osetra Caviar and Potato-Chive Mousseline</a>
<a href='https://www.google.com' className='meal'>Slow-Cooked Beef Short Ribs</a>
<a href='https://www.google.com' className='meal'>Spaghetti Napoli</a>
<a href='https://www.google.com' className='meal'>Spicy Tomato and Carrot Soup</a>
<a href='https://www.google.com' className='meal'>Spinach Quiche</a>
<a href='https://www.google.com' className='meal'>Squash Gnocchi</a>
<a href='https://www.google.com' className='meal'>Stir-fry Tofu with Sweet and Sour Vegetables</a>
<a href='https://www.google.com' className='meal'>Tandoori Duck</a>
<a href='https://www.google.com' className='meal'>Thai Spring Rolls</a>
<a href='https://www.google.com' className='meal'>Tomato Soup with Goat Cheese</a>
<a href='https://www.google.com' className='meal'>Traditional Falafel</a>
<a href='https://www.google.com' className='meal'>Tuna and Negi Sushi Roll</a>
<a href='https://www.google.com' className='meal'>Turkey Burger</a>
<a href='https://www.google.com' className='meal'>Wonton Soup</a>
            </div>
        )
    }
}



export default MealList



// http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx

