import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer.js'; 


class App extends React.Component {
  render(){
  return (
    <div className="App">
    <NavBar />
      <header className="App-header">
        <h1>RAWNAQ.COM</h1>
        <img id ='img' src="https://image.freepik.com/free-vector/shopping-online-website-mobile-application-landing-page-concept-marketing-digital-marketing_144352-77.jpg"  alt="" />
      </header>
      <div>
      <Footer></Footer>
      </div>
      
    </div>
  );
}
}

export default App;
