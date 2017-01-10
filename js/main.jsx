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
            {console.log(this.props)}
        </div>
    )
  }
}


const Main = Relay.createContainer(MainComponent, {

    fragments: {
      respondent: () => Relay.QL`
          fragment on User {
              _id
          }
      `
    }
});


export default Main;
