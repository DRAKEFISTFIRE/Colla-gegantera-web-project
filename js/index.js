// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cercaviles from './cercaviles';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/cercaviles" component={Cercaviles} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
