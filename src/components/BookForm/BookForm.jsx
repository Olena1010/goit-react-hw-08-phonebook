import React from "react";
import { BookSchema } from 'Utils/ValidateForm';
import { Formik } from 'formik';
import { Form, FormField, Field, ErrorMessage, SubmitButton } from "./BookForm.styled"
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks';


export const BookForm = ({ closeModal }) => {
  const dispatch = useDispatch();
   const contacts = useContacts();
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={BookSchema}
      onSubmit={(values, actions) => {
        if (
          contacts.find(contact =>
            contact.name.toLowerCase().includes(values.name.toLowerCase())
          )
        ) {
          window.alert(`${values.name} is already in contacts!`);
          closeModal();
        } else {
          dispatch(addContact(values));
          actions.resetForm();
          closeModal();
        }
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" type="text" placeholder="Contact name" />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Number
          <Field name="number" type="tel" placeholder="+3 80XX XX XX XXX" />
          <ErrorMessage name="number" component="div" />
        </FormField>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
  );
};

