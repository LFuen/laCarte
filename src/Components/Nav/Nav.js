import React, {Component} from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import './Nav.css'
import Chefs from '../Chefs/Chefs'
import About from '../About/About'
import MealList from '../MealList/MealList'
import MealChoose from '../MealChoose/MealChoose'
import OrderForm from '../OrderForm/OrderForm'
import Cuisine from '../Cuisine/Cuisine'
import Ingredients from '../Ingredients/Ingredients'
import OrderPlaced from '../OrderPlaced/OrderPlaced'
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
            <nav className='navigation' id='navbar'>
                <NavLink to='/' className='navLink'>Home</NavLink>
                <span title='La Carte'><img className='chefHat' alt='chef' src='https://lfuen.github.io/laCarte/images/chef.png'/></span>
                <NavLink to='/MealChoose' className='navLink'>Selection</NavLink>
                <span title='La Carte'><img className='chefHat' alt='chef' src='https://lfuen.github.io/laCarte/images/chef.png'/></span>
                <NavLink to='/Chefs' className='navLink'>Chefs</NavLink>
                <span title='La Carte'><img className='chefHat' alt='chef' src='https://lfuen.github.io/laCarte/images/chef.png'/></span>
                <NavLink to='/OrderHistory' className='navLink'>Orders</NavLink>
                <span title='La Carte'><img className='chefHat' alt='chef' src='https://lfuen.github.io/laCarte/images/chef.png'/></span>
                <NavLink to='/About' className='navLink'>About</NavLink>
            </nav>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/MealList' component={MealList}/>
            <Route exact path='/Chefs' component={Chefs}/>
            <Route exact path='/chefs/:chef' component={ChefBio}/>
            <Route exact path='/About' component={About}/>
            <Route exact path='/MealChoose' component={MealChoose}/>
            <Route exact path='/orders/:id' component={OrderForm}/>
            <Route exact path='/cuisines/:id/:origin' component={Cuisine}/>
            <Route exact path='/meals/:id' component={Ingredients}/>
            <Route exact path='/OrderPlaced' component={OrderPlaced}/>
            <Route exact path='/OrderHistory' component={OrderHistory}/>
            <Route exact path='/orders/:id/:meal' component={OrderEdit}/>
            <Route exact path='/OrderUpdated' component={OrderUpdated}/>
            </BrowserRouter>
        )
    }
}


export default Nav
