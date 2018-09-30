import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Jumbotron from './Components/jumbotron'  ;
import Container from './Components/container';
import Footer from './Components/footer'


const App = () => (

    <div>
      <Navbar />
      <Jumbotron/>
      <Container/>
      <Footer/>
    </div>

)



export default App;
