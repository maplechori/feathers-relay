import React from 'react';
import Relay from 'react-relay';
import { SchemaForm } from 'react-schema-form';

class AutoFormType extends React.Component {
  state = { schema: [] , form: [] }

  constructor(props) {
    super(props);
    this.state.schema = props.schema;
    this.state.form = props.form;
  }

  onModelChange = (key, val) => {
      this.props.modelChange(key, val);
  }

  render() {
    return(<div>
          <SchemaForm schema={this.state.schema} form={this.state.form} model={this.props.model} onModelChange={this.onModelChange}/>
    </div>)
  }
}

export default AutoFormType;
