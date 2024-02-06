import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Component/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Component/Style.css"
import Card from './Component/Card';
import Headset from './Component/Headset';
import Headphones from './Component/Headphones';
import Speakers from './Component/Speakers';
import PartySpeakers from './Component/PartySpeakers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Nav/>
  <Card best="Best" seller="Sellers"/>
  <Headset />
  <Headphones/>
  <Speakers/>
  <PartySpeakers/>
  
  </>
);
