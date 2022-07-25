import React from "react";
import Home from "./components/home";
import Navbar from "./components/navbar";


const App = () => {
  return ( 

    <div className="App">
        <Navbar/>
      <div className="content">
        <Home/>

      </div>
    </div>

   );
}
 
export default App;