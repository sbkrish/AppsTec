import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validateForm = Yup.object().shape({
  name: Yup.string().required("Name is must"),
  email: Yup.string().email("Invalid Email address").required("Email is must")
})

export default class Forms extends Component {

  handleSubmit = (e) => {
    console.log(e);
  }
  render() {
    return (
      <Formik
        initialValues={{name: '', email: ''}}
        validationSchema={validateForm}
        onSubmit={this.handleSubmit}
      >
        <Form>
          <div>
            <label>User Name</label>
            <Field type="text" name="name"/>
            <ErrorMessage name='name' component="div"/>
          </div>
          <div>
            <label>Email</label>
            <Field type="email" name="email"/>
            <ErrorMessage name='email' component="div"/>
          </div>

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    )
  }
}
