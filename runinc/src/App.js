import React, { Component } from 'react';
//Navbar
import Navbar from './components/navbar/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import Events from './components/main/eventsSite/Events'
import Shop from './components/main/shop/Shop'
import Contact from './components/contact/Contact'
/*
import logo from './logo.svg';
import './App.css';*/

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
