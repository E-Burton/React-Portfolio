import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import './App.css';

// components needed for app
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

// pages needed for app
import AboutPage from "./views/AboutPage/AboutPage.js";
import ProjectsPage from "./views/ProjectsPage/ProjectsPage.js";
import ContactPage from "./views/ContactPage/ContactPage.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
          <Header />
          {/* Setting up the router */}
          <Route exact path="/" component={AboutPage} />
          <Route path="/projects-page" component={ProjectsPage} />
          <Route path="/contact-page" component={ContactPage} />
    
          

      </div>
    </BrowserRouter>
  );
}

export default App;
