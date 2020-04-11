import React from 'react';
import './App.scss';
import Header from './containers/header/header';
import Title from './containers/title/title';
import Cardlist from './component/card/card';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Intro from './component/developer/intro';
import Guide from './component/developer/guide';
import Reference from './component/developer/reference';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Title/>
        <Route path="/developer/documentation" component={Cardlist}/>
        <Route path="/developer/en/api/dummy1/intro" component={Intro}/>
        <Route path="/developer/en/api/dummy1/guide" component={Guide}/>
        <Route path="/developer/en/api/dummy1/reference" component={Reference}/>
      </div>
    </Router>
      
  );
}

export default App;
