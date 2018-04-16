// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends React.Component {
  renderFields() {
    // * refactored code
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done </i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  // **
  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);

// *
// return (
//   <div>
//     <Field
//       label="Survey title"
//       type="text"
//       name="title"
//       component={SurveyField}
//     />
//     <Field
//       label="Subject"
//       type="text"
//       name="subject"
//       component={SurveyField}
//     />
//     <Field
//       label="Email Body"
//       type="text"
//       name="body"
//       component={SurveyField}
//     />
//     <Field
//       label="Recipient List"
//       type="text"
//       name="emails"
//       component={SurveyField}
//     />
//   </div>
// );

// **
// if (!values.title) {
//   errors.title = 'You must provide a title';
// }
// if (!values.subject) {
//   errors.subject = 'You must provide a subject';
// }
// if (!values.body) {
//   errors.body = 'You must provide a description';
// }
