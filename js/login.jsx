import React from 'react'
import Relay from 'react-relay'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Card from 'material-ui/Card'
import { CardHeader } from 'material-ui/Card'

import T from './Languages/english.js'
import './login.styl'

const loginCardHeaderStyle = {
  fontWeight: 900,
  minWidth: '120%',
   width: '150%',
  fontSize: '18px'
}


class LoginComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="login-page">
        <div className="login-form">
          <form autoComplete="off" method="post" action="/auth/local">
          <Card className="login-card">
            <CardHeader title={<T.span text={{key: "loginInstructions"}}/>} titleStyle={loginCardHeaderStyle}/>
            <div className="login-group">
                <TextField className="login-text" name="email" hintText={<T.span text={{key: "username"}}/>} fullWidth={true}/>
            </div>
            <div className="login-group">
              <TextField className="login-text" name="password" type="password" hintText="Password" fullWidth={true}/>
            </div>
            <RaisedButton label="Login" type="submit" fullWidth={true} primary={true}/>
          </Card>
          </form>
        </div>
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
