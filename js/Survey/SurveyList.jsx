import React from 'react'
import Relay from 'react-relay'
import {List, ListItem} from 'material-ui/List'

class SurveyListComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container">
        <List>
          <ListItem primaryText="Survey of Surveys"/>
        </List>
      </div>
    )
  }
}

export default Relay.createContainer(SurveyListComponent, {

  fragments: {
    respondent: () => Relay.QL `
          fragment on User {
              _id
          }
      `
  }
});
