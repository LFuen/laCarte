import React, {Component} from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import '../css/Nav.css'
import Chefs from './Chefs'
import Home from './Home'
import About from './About'
import MealPlan from './MealPlan'
import MealList from './MealList'
import SignUp from './SignUp'
import MealChoose from './MealChoose'
import OrderForm from './OrderForm'
import Cuisine from './Cuisine'



class Nav extends Component {
    render() {
        return(
            <BrowserRouter>
            <nav className='navigation' id="navbar">
                <NavLink to='/'>Home</NavLink>
                <span title="La Carte"><img className="chefHat" alt="chef" src="https://lfuen.github.io/laCarte/images/chef.png"/></span>
                <NavLink to='/MealList'>Meals</NavLink>
                <span title="La Carte"><img className="chefHat" alt="chef" src="https://lfuen.github.io/laCarte/images/chef.png"/></span>
                <NavLink to='/Chefs'>Chefs</NavLink>
                <span title="La Carte"><img className="chefHat" alt="chef" src="https://lfuen.github.io/laCarte/images/chef.png"/></span>
                <NavLink to='/About'>About</NavLink>
            </nav>
            <Route exact path='/' component={Home}/>
            <Route path='/MealList' component={MealList}/>
            <Route path='/Chefs' component={Chefs}/>
            <Route path='/About' component={About}/>
            <Route exact path='/MealPlan' component={MealPlan}/>
            <Route exact path='/SignUp' component={SignUp}/>
            <Route exact path='/MealChoose' component={MealChoose}/>
            <Route exact path='/OrderForm' component={OrderForm}/>
            <Route exact path='/Cuisine' component={Cuisine}/>
            </BrowserRouter>
        )
    }
}


export default Nav