import React from 'react';
import '../App.css';
const  Search = ({searchText}) =>{
    
        return( 
        
        <>
        <header className='hero-container bg-dark text-white'>
          <h1 className='hero-text'>You are searching for {searchText}</h1>
        </header>
        </>
        
        );
        
     
}

export default Search;