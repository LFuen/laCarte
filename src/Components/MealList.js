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
            <div class="meals-wrapper">
                {this.state.meals.map((meal, index) => (
                    <h4 key={index}>{meal.name}</h4>  
                ))}
            </div>
        )
    }
}



export default MealList



// http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx

{/* <a href="" className="meal">Argentinian Veal Cutlets with Vegatables</a>
<a href="" className="meal">Asian-Style Chicken Orzo Salad</a>
<a href="" className="meal">Baba Ghanoush</a>
<a href="" className="meal">Bibimbap</a>
<a href="" className="meal">Butter Chicken with Spinach</a>
<a href="" className="meal">Calamari and Figueras Onion</a>
<a href="" className="meal">Camarones del Sur</a>
<a href="" className="meal">Ceviche</a>
<a href="" className="meal">Chicken Po Boy</a>
<a href="" className="meal">Chicken Tikka Masala</a>
<a href="" className="meal">Chili Pork Adobo</a>
<a href="" className="meal">Chili Sin Carne</a>
<a href="" className="meal">Cobb Salad</a>
<a href="" className="meal">Coconut Soup with Chicken</a>
<a href="" className="meal">Coq Au Vin</a>
<a href="" className="meal">Cuban Plantains with Rice and Olives</a>
<a href="" className="meal">Duck Confit with Shallots</a>
<a href="" className="meal">Eggplant Moussaka with Sheeps Milk Cheese</a>
<a href="" className="meal">Fajitas with Beef</a>
<a href="" className="meal">Flautas</a>
<a href="" className="meal">Frog Meuniere</a>
<a href="" className="meal">Garides Saganaki</a>
<a href="" className="meal">Gazpacho</a>
<a href="" className="meal">Greek Bouyourdi</a>
<a href="" className="meal">Greek Salad</a>
<a href="" className="meal">Green Matcha Chicken</a>
<a href="" className="meal">Grilled Tuna</a>
<a href="" className="meal">Huevos Rancheros</a>
<a href="" className="meal">Kedgeree</a>
<a href="" className="meal">Korean Kimchi</a>
<a href="" className="meal">Lamb Kebabs</a>
<a href="" className="meal">Mexican Corn and Bean Salad</a>
<a href="" className="meal">Miso Soup with Tofu, Bean Sprouts, and Herbs</a>
<a href="" className="meal">Nicoise Salad with Fresh Tuna</a>
<a href="" className="meal">Pad Thai Noodles</a>
<a href="" className="meal">Patatas Bravas</a>
<a href="" className="meal">Pide</a>
<a href="" className="meal">Potato Tortilla</a>
<a href="" className="meal">Ravioli with Gorganzola</a>
<a href="" className="meal">Red Duck Curry</a>
<a href="" className="meal">Rigatoni with Veal</a>
<a href="" className="meal">Roast Lamb with Indian Spices</a>
<a href="" className="meal">Roasted Pumpkin and Pear Soup</a>
<a href="" className="meal">Salmon Maki Sushi</a>
<a href="" className="meal">Seared Scallops with Osetra Caviar and Potato-Chive Mousseline</a>
<a href="" className="meal">Slow-Cooked Beef Short Ribs</a>
<a href="" className="meal">Spaghetti Napoli</a>
<a href="" className="meal">Spicy Tomato and Carrot Soup</a>
<a href="" className="meal">Spinach Quiche</a>
<a href="" className="meal">Squash Gnocchi</a>
<a href="" className="meal">Stir-fry Tofu with Sweet and Sour Vegetables</a>
<a href="" className="meal">Tandoori Duck</a>
<a href="" className="meal">Thai Spring Rolls</a>
<a href="" className="meal">Tomato Soup with Goat Cheese</a>
<a href="" className="meal">Traditional Falafel</a>
<a href="" className="meal">Tuna and Negi Sushi Roll</a>
<a href="" className="meal">Turkey Burger</a>
<a href="" className="meal">Wonton Soup</a> */}