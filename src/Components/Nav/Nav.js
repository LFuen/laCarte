import React, {Component} from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import './Nav.css'
import Chefs from '../Chefs/Chefs'
import Home from '../Home/Home'
import About from '../About/About'
import MealPlan from '../MealPlan/MealPlan'
import MealList from '../MealList/MealList'
// import SignUp from './SignUp'
import MealChoose from '../MealChoose/MealChoose'
import OrderForm from '../OrderForm/OrderForm'
import Cuisine from '../Cuisine/Cuisine'
import Ingredients from '../Ingredients/Ingredients'
import OrderPlaced from '../OrderPlaced/OrderPlaced'
// import SignIn from './SignIn'
import Welcome from '../Welcome/Welcome'
import ChefBio from '../ChefBio/ChefBio'
import LaCarteContext from '../../context/LaCarteContext'
import OrderHistory from '../OrderHistory/OrderHistory'
import OrderEdit from '../OrderEdit/OrderEdit'
import OrderUpdated from '../OrderUpdated/OrderUpdated'



class Nav extends Component {

    static contextType = LaCarteContext;

    render() {

        return(
            <BrowserRouter>
            <nav className='navigation' id="navbar">
                <NavLink to='/Welcome'>Home</NavLink>
                <span title="La Carte"><img className="chefHat" alt="chef" src="https://lfuen.github.io/laCarte/images/chef.png"/></span>
                <NavLink to='/MealChoose'>Selection</NavLink>
                <span title="La Carte"><img className="chefHat" alt="chef" src="https://lfuen.github.io/laCarte/images/chef.png"/></span>
                <NavLink to='/Chefs'>Chefs</NavLink>
                <span title="La Carte"><img className="chefHat" alt="chef" src="https://lfuen.github.io/laCarte/images/chef.png"/></span>
                <NavLink to='/OrderHistory'>Orders</NavLink>
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
            {/* <Route exact path='/SignUp' component={SignUp}/> */}
            <Route exact path='/MealChoose' component={MealChoose}/>
            <Route exact path='/orders/:id' component={OrderForm}/>
            <Route exact path='/cuisines/:id/:origin' component={Cuisine}/>
            <Route exact path='/meals/:id' component={Ingredients}/>
            <Route exact path='/OrderPlaced' component={OrderPlaced}/>
            <Route exact path='/OrderHistory' component={OrderHistory}/>
            <Route exact path='/orders/:id/:meal' component={OrderEdit}/>
            <Route exact path='/OrderUpdated' component={OrderUpdated}/>
            {/* <Route exact path='/SignIn' component={SignIn}/> */}
            </BrowserRouter>
        )
    }
}


export default Nav
