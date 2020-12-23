import React, {Component} from 'react'
import Nav from './Components/Nav';
import './App.css';
import Footer from './Components/Footer';
import api from './config';
import LaCarteContext from './context/LaCarteContext.js';
class App extends Component {

  state = {
    meals: [],
    chefs: [], 
    cuisines: []
  }

  componentDidMount() {
    this.getMeals();
    this.getChefs();
    this.getCuisines();
  }


  getMeals(){
    Promise.all([
      fetch(`${api.API_ENDPOINT}/api/meals`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer c3f5a85c-2f9d-11eb-adc1-0242ac120002'
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
          Authorization: 'Bearer c3f5a85c-2f9d-11eb-adc1-0242ac120002'
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
          Authorization: 'Bearer c3f5a85c-2f9d-11eb-adc1-0242ac120002'
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

  render(){
    const value = {
      meals: this.state.meals,
      chefs: this.state.chefs,
      cuisines: this.state.cuisines,
    };
    console.log(value)
    
    
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
