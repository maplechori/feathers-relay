import 'bootstrap-css';

import React from 'react'
import Relay from 'react-relay'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">SurveyJS</NavbarBrand>
          <Nav className="float-xs-right" navbar>
           <NavItem>
             <NavLink href="/components/">Components</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
           </NavItem>
          </Nav>
        </Navbar>

      </div>
    )
  }
}

const App = Relay.createContainer(AppComponent, {

    fragments: {
      viewer: () => Relay.QL`
          fragment on Respondent {
              _id
          }
      `
    }
});


export default App;
