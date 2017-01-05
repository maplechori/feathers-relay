import React from 'react'
import Relay from 'react-relay'

class MainComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
        <div className="container">
            {this.props.children}
        </div>
    )
  }
}


const Main = Relay.createContainer(MainComponent, {

    fragments: {
      viewer: () => Relay.QL`
          fragment on Respondent {
              _id
          }
      `
    }
});


export default Main;
