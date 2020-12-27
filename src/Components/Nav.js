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
import Ingredients from './Ingredients'
import OrderPlaced from './OrderPlaced'
import SignIn from './SignIn'
import Welcome from './Welcome'
import ChefBio from './ChefBio'
import LaCarteContext from '../context/LaCarteContext'
import OrderHistory from './OrderHistory'
import OrderDeleted from './OrderDeleted'



class Nav extends Component {

    static contextType = LaCarteContext;

    render() {

        return(
            <BrowserRouter>
            <nav className='navigation' id="navbar">
                <NavLink to='/Welcome'>Home</NavLink>
                <span title="La Carte"><img className="chefHat" alt="chef" src="https://lfuen.github.io/laCarte/images/chef.png"/></span>
                <NavLink to='/MealList'>Meals</NavLink>
                <span title="La Carte"><img className="chefHat" alt="chef" src="https://lfuen.github.io/laCarte/images/chef.png"/></span>
                <NavLink to='/Chefs'>Chefs</NavLink>
                <span title="La Carte"><img className="chefHat" alt="chef" src="https://lfuen.github.io/laCarte/images/chef.png"/></span>
                <NavLink to='/About'>About</NavLink>
            </nav>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Welcome' component={Welcome}/>
            <Route exact path='/MealList' component={MealList}/>
            <Route exact path='/Chefs' component={Chefs}/>
            <Route exact path='/chefs/:chef' component={ChefBio}/>
            <Route exact path='/About' component={About}/>
            <Route exact path='/MealPlan' component={MealPlan}/>
            <Route exact path='/SignUp' component={SignUp}/>
            <Route exact path='/MealChoose' component={MealChoose}/>
            <Route exact path='/orders/:id' component={OrderForm}/>
            <Route exact path='/cuisines/:origin' component={Cuisine}/>
            <Route exact path='/meals/:id' component={Ingredients}/>
            <Route exact path='/OrderPlaced' component={OrderPlaced}/>
            <Route exact path='/OrderHistory' component={OrderHistory}/>
            <Route exact path='/OrderDeleted' component={OrderDeleted}/>
            <Route exact path='/SignIn' component={SignIn}/>
            </BrowserRouter>
        )
    }
}


export default Nav
