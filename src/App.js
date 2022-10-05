import React from "react";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Create from "./components/create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";


const App = () => {
  return ( 
    <Router>
    <div className="App">
        <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path = "/blogs/:id">
          <BlogDetail/>
          </Route>

        </Switch>
      </div>
    </div>
    </Router>

   );
}
 
export default App;