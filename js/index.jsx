import React from 'react'
import ReactDOM from 'react-dom'
import useRelay from 'react-router-relay'

import io from 'socket.io-client'
import feathers from 'feathers/client'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio/client'
import localstorage from 'feathers-localstorage'
import authentication from 'feathers-authentication/client'

import Relay from 'react-relay'
import ViewerQueries from './Queries/ViewerQueries'
import Login from './Login'
import App from './App'
import Main from './Main'

import { createHashHistory } from 'history';
import { IndexRoute, Route, Router, applyRouterMiddleware, browserHistory, Link , hashHistory } from 'react-router'

const host = 'http://localhost:3030';

const socket = io();

const app = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(authentication({ storage: window.localStorage  }));

const checkAuth = (nextState, replace) => {

  app.authenticate().then(() => {
        hashHistory.push('/');
  }).catch(error => {
      if (error.code === 401) {

        hashHistory.push('/login');
      }
  });

}

const logout = () => {
  app.logout();
  return hashHistory.push('/login');
}


ReactDOM.render(
        <Router
          environment={Relay.Store}
          history={hashHistory}
          render={applyRouterMiddleware(useRelay)}>
          <Route path="/" component={App} queries={ViewerQueries} onEnter={checkAuth}>
            <IndexRoute component={Main} queries={ViewerQueries}/>
            <Route path='login' component={Login} queries={ViewerQueries}/>
            <Route path="logout" component={(() => logout())}/>
          </Route>
        </Router>,
        document.getElementById('react-app'));
