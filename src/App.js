import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ProductPage from './components/pages/ProductPage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';




 function App() {
   return (
   
      <>
      <Router>

      
     
       <Switch>
         <Route exact path='/products' component={ProductPage}></Route>
         <Route exact path='/aboutus' component={AboutUs}></Route>
         <Route exact path='/contactus' component={ContactUs}></Route>
         <div>
         <Navbar />
         
        
         <Route exact path='/' component={Home}></Route>

         </div>
      </Switch>
     </Router>
      </>
       
    

  );
 }

 export default App;
