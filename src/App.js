import React, {Component} from 'react'
import Nav from './Components/Nav';
import './App.css';
import Footer from './Components/Footer';

class App extends Component {
  render(){
    return (
    <div className="App">
      <Nav />
      <Footer />
    </div>
  );
}
}

export default App;
