
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
         <AppBar title={"SurveyJS"}/>
           {this.props.children}
        </div>
      </MuiThemeProvider>
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
