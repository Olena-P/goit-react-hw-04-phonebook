import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    onAddContact(newContact);
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .matches(
        /^[A-Za-z\s]+$/,
        'Invalid name format. Only letters and spaces are allowed.'
      )
      .required('Name is required'),
    number: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" style={{ color: 'red' }} />

        <Field type="tel" name="number" placeholder="Number" />
        <ErrorMessage name="number" component="div" style={{ color: 'red' }} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
