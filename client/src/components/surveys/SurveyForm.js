// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
  {
    label: 'Survey Title',
    name: 'title',
    noValueError: 'You must provide a title'
  },
  {
    label: 'Subject Line',
    name: 'subject',
    noValueError: 'You must provide a subject'
  },
  {
    label: 'Email body',
    name: 'body',
    noValueError: 'You must provide a description'
  },
  {
    label: 'Recipient List',
    name: 'emails',
    noValueError: 'You must provide relevant emails'
  }
];

class SurveyForm extends React.Component {
  renderFields() {
    // * refactored code
    return _.map(FIELDS, ({ label, name }) => {
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
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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
  // **
  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
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
