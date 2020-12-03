import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ScubaLog } from './components/ScubaLog';
import {BrowserRouter as Router} from "react-router-dom";





ReactDOM.render(
 <Router>
    <ScubaLog />
    </Router>,
  document.getElementById('root')
);

