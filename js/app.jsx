
import React from 'react'
import Relay from 'react-relay'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar'

injectTapEventPlugin();

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <MuiThemeProvider>
        <div>
         <AppBar showMenuIconButton={this.props.viewer ? true : false} title={"SurveyJS"}/>
           {this.props.children}
        </div>
      </MuiThemeProvider>
     </div>
    )
  }
}

const App = Relay.createContainer(AppComponent, {

    fragments: {
      respondent: () => Relay.QL`
          fragment on User {
             _id
          }
      `
    }
});


export default App;
