import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

function ContactForm({ addContact }) {
  const handleSubmit = (values, options) => {
    const newContact = { id: nanoid(), ...values };
    addContact(newContact);
    options.resetForm();
  };
  const initialValues = {
    name: "",
    number: "",
  };
  const applySchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .trim()
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .trim()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "The phone number must be in the format 999-99-99"
      )
      .required("Required"),
  });
  return (
    <div>
      <Formik
        validationSchema={applySchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={s.box}>
            <label className={s.label}>
              <span>Name</span>
              <Field className="field" name="name" />
              <ErrorMessage name="name" className="error" component="div" />
            </label>
            <label className={s.label}>
              <span>Number</span>
              <Field className="field" name="number" />
              <ErrorMessage name="number" className="error" component="div" />
            </label>
            <div className={s.btnBox}>
              <button className={s.btn} type="submit">
                Add contact
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm