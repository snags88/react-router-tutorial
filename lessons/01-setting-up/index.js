import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'

//import react router
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

//render router and define route-component
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* Index is only used when route matches exactly */}
      <IndexRoute component={Home}/>

      {/* make them children of `App` */}
      <Route path="/repos" component={Repos}>
        {/* add the new route with params */}
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
