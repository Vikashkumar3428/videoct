import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TV from './HeaderComponents/Tv'
import Movies from './HeaderComponents/Movies'
import Sports from './HeaderComponents/Sports'
import News from './HeaderComponents/News'
import Premium from './HeaderComponents/Premium'
import Exclusives from './HeaderComponents/Exclusives'
import VideoPlayer from './VideoPlayer';
import {Switch ,Route, Link, BrowserRouter} from 'react-router-dom'
import Login from './Login';
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/player' component={VideoPlayer}/>
          <Route exact path='/tv' component={TV}/>
          <Route exact path='/movies' component={Movies}/>
          <Route exact path='/sports' component={Sports}/>
          <Route exact path='/news' component={News}/>
          <Route exact path='/premium' component={Premium}/>
          <Route exact path='/exclusives' component={Exclusives}/>
    </Switch>
 </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
