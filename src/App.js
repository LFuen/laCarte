import React, {Component} from 'react'
import Nav from './Components/Nav';
import './App.css';
import Footer from './Components/Footer';
import api from './config';
import LaCarteContext from './context/LaCarteContext.js';
class App extends Component {

  state = {
    meals: []
  }

  componentDidMount() {
    Promise.all([
      fetch(`${api.API_ENDPOINT}/api/meals`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer c3f5a85c-2f9d-11eb-adc1-0242ac120002'
        }
      })
    ])
    .then(([mealsResponse]) => {

      /*
        RESPONSE OBJECT:
        STATUS CODE: 200
        DATA: "FSLKDFKJSDFJHKSJKHDGFJIKSODFKSDKFJLSKLJDFLKJSDF"
      */

      return Promise.all([mealsResponse.json()])
    })
    .then(([meals]) => {
      this.setState({ meals});
    });
  }

  render(){
    const value = {
      meals: this.state.meals
    };

    console.log(`LACARTECONTEXT STATE`);
    console.log(value);
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
