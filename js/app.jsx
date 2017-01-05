
import React from 'react'
import Relay from 'react-relay'
import { Link } from 'react-router';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>

      <div className="container">
          {this.props.children}
      </div>
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
