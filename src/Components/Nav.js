import React, {Component} from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import '../css/Nav.css'
import Chefs from './Chefs'
import Home from './Home'
import Meals from './Meals'
import About from './About'
import MealPlan from './MealPlan'



class Nav extends Component {
    render() {
        return(
            <BrowserRouter>
            <nav className='navigation' id="navbar">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Meals'>Meals</NavLink>
                <NavLink to='/Chefs'>Chefs</NavLink>
                <NavLink to='/About'>About</NavLink>
            </nav>
            <Route exact path='/' component={Home}/>
            <Route path='/Meals' component={Meals}/>
            <Route path='/Chefs' component={Chefs}/>
            <Route path='/About' component={About}/>
            <Route exact path='/MealPlan' component={MealPlan}/>
            </BrowserRouter>
        )
    }
}


export default Nav