import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Routers from '@app/routers'
import { map } from '@common/utils'
import Home from '@page/home'

const createLinks = routers => map(routers, ({ path }, name, index) =>
  <li key={index}><Link to={path}>{name}</Link></li>
)

const createRoutes = routers => map(routers, ({ component, path }, name, index) =>
  <Route path={path} component={component} key={index} />
)

const produceRouter = () =>
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        {createLinks(Routers)}
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      {createRoutes(Routers)}
    </div>
  </Router>

ReactDOM.render(produceRouter(), document.getElementById('app'))
