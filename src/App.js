import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AppRoute from "./router/AppRoute";


function App() {
  return (
    <BrowserRouter className="App">

      <AppRoute/>



    </BrowserRouter>
  );
}

export default App;
