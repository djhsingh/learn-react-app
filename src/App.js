import './App.css';
import React, { useEffect, useState } from 'react';
import Footer from './fragments/Footer';
import Header from './fragments/Header';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFound } from './pages/NotFound';
import { Users } from './pages/Users';
import Search from './pages/Search';

function App() {

  const [searchText,setSearchText] = useState('');
  useEffect(()=>{
   fetch(' https://api.themoviedb.org/3/search/movie?api_key=ac1ccbe8250334b34fd9ec4876616da4&language=en_US&query='+searchText+'&page=1')
  .then(response => response.json())
  .then(json => console.log(json))
  })
  return (
    <div >
      <Router>
        <Header searchText={searchText} setSearchText={setSearchText}/>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/search" element={<Search searchText={searchText}/>}></Route>
            <Route exact path="/about" element={<AboutPage/>}></Route>
            <Route exact path="/contact" element={<ContactPage/>}></Route>
            <Route exact path="/users" element={<Users/>}></Route>
            <Route exact path="*" element={<NotFound/>}></Route>
          </Routes>            
        <Footer />
      </Router>
    </div>
  );
}

export default App;
