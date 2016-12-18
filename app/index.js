'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import { map } from './common/utils'
import router from './common/router'


const createRoutes = routers => map(routers, (component, path, index) => {
  return <Route path={path} component={component} key={index}/>
});

const createRouter = history => <Router history={history}>
  {createRoutes(router)}
</Router>;

ReactDOM.render(createRouter(hashHistory), document.getElementById('app'));