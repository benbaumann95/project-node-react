// SurveyFormReview shoes users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Go back
      </button>
      <button
        onClick={() => submitSurvey(formValues)}
        className="green btn-flat right white-text"
      >
        Send
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);

// refactored code above using formFields
/* <div>
  <div>
    <label>Survey Title</label>
    <div>{formValues.title}</div>
  </div>
  <div>
    <label>Subject Line</label>
    <div>{formValues.subject}</div>
  </div>
  <div>
    <label>Email Description</label>
    <div>{formValues.body}</div>
  </div>
</div> */
