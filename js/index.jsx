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
import App from './App'
import Main from './main'

import { createHashHistory } from 'history';
import { IndexRoute, Route, Router, applyRouterMiddleware, browserHistory, Link , hashHistory } from 'react-router'
import { RelayNetworkLayer, authMiddleware, urlMiddleware } from 'react-relay-network-layer';

const host = 'http://localhost:3030';

const socket = io();

const app = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(authentication({ storage: window.localStorage  }));

  app.authenticate().then(() => {

    Relay.injectNetworkLayer(
      new Relay.DefaultNetworkLayer( 'http://localhost:3030/graphql', {
       headers: {
         Authorization: `Bearer ${app.get('token')}`,
       },
     })
    );

    ReactDOM.render(
            <Router
              environment={Relay.Store}
              history={hashHistory}
              render={applyRouterMiddleware(useRelay)}>
              <Route path="/" component={App} queries={ViewerQueries}>
              <IndexRoute component={Main} queries={ViewerQueries}/>
              <Route path="logout" component={(() => logout())}/>
              </Route>
            </Router>,
            document.getElementById('react-app'));


  }).catch(error => {

      if (error.code === 401) {
        window.location.href='/login.html'
      }
  });

const logout = () => {
  app.logout();
  window.location.href='/login.html'
}
  