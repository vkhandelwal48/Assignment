import React,{Component} from 'react';
import './App.css';
import URLShort from './components/URLShort';
import GoLink from './components/GoLink';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import {Routes} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <Router>
        <div className="app">
          <h1>URL Shortner</h1>
          <p>Enter the URL you want to shorten</p> 
          <Routes>
            <Route exact path="/" element={<URLShort />} />
            <Route exact path="/l/:code" element={<GoLink />}></Route>
          </Routes>
        </div>
    </Router>
    );
  }
}

export default App;
