import React from 'react'
import Relay from 'react-relay'



class LoginComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {


    return (
      <div>
      </div>)
  }
}

const Login = Relay.createContainer(LoginComponent, {
    fragments: {
      viewer: () => Relay.QL`
            fragment on Respondent {
              _id
            }`
    }
});


export default Login;
