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

import { createHashHistory } from 'history';
import { IndexRoute, Route, Router, applyRouterMiddleware, browserHistory, Link } from 'react-router'

const host = 'http://localhost:3030';

const socket = io();

const app = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(authentication({
    storage: window.localStorage
  }
));

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        Welcome from React
      </div>
    )
  }
}

const App = Relay.createContainer(AppComponent, {

    fragments: {
      viewer: () => Relay.QL`
          fragment on Viewer {
              id
          }
      `
    }
});

app.authenticate().then(() => {

  ReactDOM.render(
        <Router
          environment={Relay.Store}
          history={browserHistory}
          render={applyRouterMiddleware(useRelay)}>
          <Route path="/" component={App} queries={ViewerQueries}>
            <Route path="logout" component={(() => (delete localStorage.token   && null))}/>
          </Route>
        </Router>,
        document.getElementById('react-app'));

}).catch(error => {
  if(error.code === 401) {
    window.location.href = '/login.html';
  }

  console.error(error);
});
