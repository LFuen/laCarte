import React, {Component} from 'react'
import Nav from '../Nav/Nav';
import './App.css';
import Footer from '../Footer/Footer';
import api from '../../config';
import LaCarteContext from '../../context/LaCarteContext.js';
class App extends Component {

  state = {
    meals: [],
    chefs: [], 
    cuisines: [],
    orders: [],
    error: null
  }


// =========================
//       FOR THE ORDERS
// =========================

  setOrders = orders => {
    this.setState({
      orders, 
      error: null
    })
  }

  addOrder = order => {
    this.setState({
      orders: [ ...this.state.orders, order ]
    })
  }

  deleteOrder = orderId => {
    const newOrder = this.state.orders.filter(order =>
      order.id !== orderId
    )
    this.setState({
      orders: newOrder
    })
  }

  updateOrder = updatedOrder => {
    this.setState({
      orders: this.state.orders.map(order =>
        (order.id !== updatedOrder.id) ? order : updatedOrder)
    })
  }

// =========================
//       FOR THE ORDERS
// =========================

  getMeals(){
    Promise.all([
      fetch(`${api.API_ENDPOINT}/api/meals`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${api.API_KEY}`
        }
      })
    ])
    .then(([mealsResponse]) => {
      return Promise.all([mealsResponse.json()]);
    })
    .then(([meals]) => {
      
      this.setState({meals});
    });
  }

  getChefs(){

    Promise.all([
      fetch(`${api.API_ENDPOINT}/api/chefs`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${api.API_KEY}`
        }
      })
    ])
    .then(([chefsResponse]) => {
      return Promise.all([chefsResponse.json()])
    })
    .then(([chefs]) => {
      this.setState({chefs});
    });
  }

  getCuisines(){
    Promise.all([
      fetch(`${api.API_ENDPOINT}/api/cuisines`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${api.API_KEY}`
        }
      })
    ])
    .then(([cuisinesResponse]) => {
      return Promise.all([cuisinesResponse.json()])
    })
    .then(([cuisines]) => {
      this.setState({cuisines});
    });
  }

  getOrders(){
    Promise.all([
      fetch(`${api.API_ENDPOINT}/api/orders`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${api.API_KEY}`
        }
      })
    ])
    .then(([ordersResponse]) => {
      return Promise.all([ordersResponse.json()])
    })
    .then(([orders]) => {
      this.setState({orders});
    });
  }



  componentDidMount() {
    this.getMeals();
    this.getChefs();
    this.getCuisines();
    this.getOrders();
  }




  render(){
    const value = {
      meals: this.state.meals,
      chefs: this.state.chefs,
      cuisines: this.state.cuisines,
      orders: this.state.orders,
      addOrder: this.addOrder,
      updateOrder: this.updateOrder,
      deleteOrder: this.deleteOrder,
    };
    
    
    return (
    <LaCarteContext.Provider value={value}>
    <div className="App">
      <Nav />
      <Footer />
    </div>
    </LaCarteContext.Provider>
  );
}
}

export default App;
