import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';


const app = document.getElementById('app');




export class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>

           {this.props.children}
         </div>
      )
   }
}

export class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}

export class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}

export class Contact extends React.Component {

  navigate(){
    this.props.history.pushState(null, 'about');
  }
   render() {
      return (
         <div>
            <h1>Contact...</h1>
            {this.props.children}
            <Link to="about">About using link</Link>
            <button onClick={this.navigate.bind(this)}>Aboutus</button>

         </div>
      )
   }
}



render((
   <Router history = {hashHistory}>
      <Route path = "/" component = {App}>
        <IndexRoute component = {Home} />
        <Route path = "home" component = {Home} />
        <Route path = "about" component = {About} />
        <Route path = "contact" component = {Contact} />
      </Route>
   </Router>

), app);
