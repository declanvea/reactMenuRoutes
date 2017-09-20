import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './components/Layout';
import Menu from './components/Menu';
import About from './components/About';
import Find from './components/Findus';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
//IMPORT COMPONENTS



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/findus" component={Find}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/" component={About}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
,
document.getElementById('root')
);

registerServiceWorker();
