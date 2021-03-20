import React ,{ useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/home";
import Navigation from './components/Navigation';
import Ponuda from './components/Ponuda';
import Galerija from './components/Galerija';
import Cjenik from './components/Cjenik';
import Lokacija from './components/Lokacija';
import Kontakt from './components/Kontakt';
import MobileNavigation from './components/MobileNavigation';

function App() {

  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


  return (
    <Router>
      <MobileNavigation isOpen={isOpen} toggle={toggle}/>
      <Navigation toggle={toggle}/>
      <Route path="/pocetna" component={HomePage} />
      <Route path="/ponuda" component={Ponuda} />
      <Route path="/galerija" component={Galerija} />
      <Route path="/cjenik" component={Cjenik} />
      <Route path="/lokacija" component={Lokacija} />
      <Route path="/kontakt" component={Kontakt} />
    </Router>
  );
}

export default App;
