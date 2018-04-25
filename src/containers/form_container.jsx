import React       from 'react';
import FormInput   from '../components/form_input'
import FormDisplay from '../components/form_display'
import PropTypes   from 'prop-types';

export default class FormApp extends React.Component {
  render() {
    return (
      <div>
        <FormInput handleClick={this.props.onClick} />
        <FormDisplay data={this.props.value} />
      </div>
    );
  }
}

FormApp.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
}