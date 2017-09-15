import React from 'react'
import Relay from 'react-relay'
import AutoFormType from './AutoFormType'
import Formsy from 'formsy-react';
import FormsySelect from 'formsy-material-ui/lib/FormsySelect';
import MenuItem from 'material-ui/MenuItem';
import types from '../Forms/types.json';
import readonly from '../Forms/readonly.json';
import simplearray from '../Forms/simplearray.json';

import utils from '../utils';


class AutoForm extends React.Component {
  state = { forms: [], canSubmit: false, currentSelection: 0, model: {} }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let forms = [types, readonly, simplearray];
    this.setState({forms: forms})
  }

  onChange = (evt, current) => {
      this.setState({currentSelection: current, model: {} });
  }

  notifyFormError = () => { }
  submitForm = () => { }
  enableButton = () => { }
  disableButton = () => { }

  changeModel = (key, val) => {
      let newModel = this.state.model;
      utils.selectOrSet(key, newModel, val);
      this.setState({ model: newModel });
      console.log(this.state.model);
  }

  render() {
    return(<div>
      <Formsy.Form  onValid={this.enableButton}  onInvalid={this.disableButton}  onValidSubmit={this.submitForm}  onInvalidSubmit={this.notifyFormError}>
        <FormsySelect name="formselected" required  floatingLabelText="Select a form" onChange={this.onChange} value={0}>
           <MenuItem value={0} primaryText="Types"/>
         <MenuItem value={1} primaryText="Readonly"/>
         <MenuItem value={2} primaryText="Simple Array"/>

       </FormsySelect>
       {this.state.forms.length > 0 && this.state.forms.map((e, index) => {
          if (index == this.state.currentSelection) {
              return (<AutoFormType key={index} schema={e.schema} form={e.form} model={this.state.model} modelChange={this.changeModel} />);
          }
        })
      }
      </Formsy.Form>
    </div>
    );
  }


}

export default AutoForm;
