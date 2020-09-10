import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Routing} from './Routing';
import {Navigation} from "./Navigation";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <BrowserRouter>
      <Navigation/>
      <Routing/>
      </BrowserRouter>
  );
}

export default App;
