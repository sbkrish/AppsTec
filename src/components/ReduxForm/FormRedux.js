import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

class FormRedux extends Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
        {meta.touched && meta.error && <span className="error">{meta.error}</span>}
      </div>
    );
  };

  onSubmit = (formValues) => {
    // You can handle form submission logic here.
    console.log(formValues);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="name" component={this.renderInput} label="Name" />
        <Field name="email" component={this.renderInput} label="Email" />
        <Field name="message" component={this.renderInput} label="Message" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'contactForm',
  validate: validationSchema.validateSync,
})(FormRedux);
