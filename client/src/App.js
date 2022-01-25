import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";


// components;

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// functions


const App = () => {

	return (
		
		<div>
			 <Header />
     <Routes> 
			 {/* <Header /> */}
				<Route  path="/" element={<Home/>} />
	      <Route  path="signup" element={<Signup/>} />
				<Route  path="login" element={<Login />} />
			</Routes> 
			
		</div>
		//  </Router>
	);
};

export default App;