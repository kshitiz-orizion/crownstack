import React, { Component } from 'react';
import './App.css';
import GetTodo from './component/getTodo.js';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom';
class App extends Component {
  render() {
    return (
    	<Router>
    		<div className='App'>
        <Switch>
                      <Route path='/' component={GetTodo} />
		                  <Route path='/ggg' component={GetTodo} />
        </Switch>
         </div>  
      	</Router>
    );
  }
}

export default App;
