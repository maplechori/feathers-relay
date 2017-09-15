import React from 'react'
import Relay from 'react-relay'
import SurveyList from './Survey/SurveyList'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import AutoForm from './Widgets/AutoForm'
import './mainStyle.scss'

class MainComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container-surveys">
        <SurveyList respondent={this.props.respondent}/>
        <AutoForm/>
        <FloatingActionButton className="floating-action">
          <ContentAdd/>
        </FloatingActionButton>
      </div>
    )
  }
}

export default Relay.createContainer(MainComponent, {

  fragments: {
    respondent: () => Relay.QL `
          fragment on User {
              _id
              ${SurveyList.getFragment('respondent')}
          }
      `
  }
});
