import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import './global.css';
/*import firebase from './firebase';*/

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;