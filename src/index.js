import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Component/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Component/Style.css"
import Card from './Component/Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Nav best="Best" seller="Sellers"/>
  <Card best="Best" seller="Sellers"/>
  
  </>
);
