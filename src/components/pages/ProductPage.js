 import React from 'react';
 import './ProductPage.css';
 import Products from '../Products';
import Filter from '../Filter';
import Cart from '../Cart';
import store from '../../store';
import { Provider } from "react-redux";




 class ProductPage extends React.Component {
     
     render() {
         return(
             <Provider store={store}>
             <div className='grid-container'>
                 <nav className='nav'>
                     <a className='h1' href='/'>Home</a>
                 </nav>
                 <main>
                     <div className='content'>
                         <div className='main'>
                             <Filter></Filter>
                             <Products></Products> 
                         </div>

                         <div className='sidebar'>
                                 <Cart />
                         </div>
                    </div>
                 </main>
                
             </div>

            
             </Provider>
             
         )
     }
 }


 export default ProductPage; 