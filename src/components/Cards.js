import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>check this out</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
               <ul className='cards__items'>
                    <CardItem 
                    
                    src='images/iphone13.jpg'
                    text='new phones'
                    label='phones'
                    path='/products'
                    
                    /> 
                    <CardItem 
                    
                    src='images/imac.jpg'
                    text='latest computers'
                    label='computers'
                    path='/products'
                    
                    /> 
                    <CardItem 
                    
                    src='images/applewatch.jpg'
                    text='Watches'
                    label='Watches'
                    path='/products'
                    
                    /> 
               </ul>
            </div> 
        </div>
    </div>
  ); 
}

export default Cards;