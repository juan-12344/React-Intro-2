import React from 'react';
import './Global/css/App.css';

//Vamos a llamar a los complementos
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
