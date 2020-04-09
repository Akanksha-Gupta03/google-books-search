import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
import SavedPage from "./components/SavedPage";


function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
    <Header/>
       <Route exact path={["/","/search"]} component={SearchPage} />
        <Route exact path="/saved" component={SavedPage} />
    </div>
    </Router>
  );
}

export default App;