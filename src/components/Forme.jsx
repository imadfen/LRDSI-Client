import { Formik, Field, Form, ErrorMessage } from 'formik';
import './Form.css';
import * as Yup from 'yup';

function Forme({ success }) {
  const handleFocus = (event) => {
    event.currentTarget.parentNode.classList.add("focus");
  };

  const handleBlur = (event) => {
    if (event.currentTarget.value === "") {
      event.currentTarget.parentNode.classList.remove("focus");
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    setTimeout(() => { }, 1000);
    success()
    resetForm()
  }

  const validation = Yup.object().shape({
    nom: Yup.string().matches(/^[A-Za-z\s]+$/, "nom invalid").required('obligatoire'),
    prenom: Yup.string().matches(/^[A-Za-z\s]+$/, "prenom invalid").required('obligatoire'),
    email: Yup.string().email('email invalide').required('obligatoire'),
    tel: Yup.string().matches(/^\+?\d+$/, "numero de tel invalide"),
    message: Yup.string().max(3000, 'trés grand').required('obligatoire'),

  });

  return (
    <div className="contact-forme">
      <h3 className='titleC'>Contact us</h3>

      <Formik initialValues={{ nom: "", prenom: "", email: "", tel: "", message: "" }} validationSchema={validation} onSubmit={handleSubmit}>
        <Form>
          <div className="form-input-container">
            <div className="input-info">
              <label htmlFor="nom">nom</label>
              <Field name="nom" type="text" className="input" id="nom" onFocus={handleFocus} onBlur={handleBlur} /> <span>nom</span>
            </div>

            <span className="form-error-message">
            <ErrorMessage name='nom' component="p" />
            </span>
          </div>

          <div className="form-input-container">
            <div className="input-info">
              <label htmlFor="prenom">prénom</label>
              <Field name="prenom" id="prenom" type="text" className="input" onFocus={handleFocus} onBlur={handleBlur} />
              <span>prénom</span>
            </div>

            <span className="form-error-message">
            <ErrorMessage name='prenom' component="p" />
            </span>
          </div>

          <div className="form-input-container">
            <div className="input-info">
              <label htmlFor="email">email</label>
              <Field name="email" id="email" type="email" className="input" onFocus={handleFocus} onBlur={handleBlur} />
              <span>email</span>
            </div>

            <span className="form-error-message">
            <ErrorMessage name='email' component="p" />
            </span>
          </div>

          <div className="form-input-container">
            <div className="input-info">
              <label htmlFor="tel">téléphone</label>
              <Field name="tel" id="tel" type="tel" className="input" onFocus={handleFocus} onBlur={handleBlur} />
              <span>téléphone</span>
            </div>

            <span className="form-error-message">
            <ErrorMessage name='tel' component="p" />
            </span>
          </div>

          <div className="form-input-container">
            <div className="input-info">
              <label htmlFor="message">message</label>
              <Field name="message" id="message" as="textarea" className="input" onFocus={handleFocus} onBlur={handleBlur} />
              <span>message</span>
            </div>

            <span className="form-error-message">
            <ErrorMessage name='message' component="p" />
            </span>
          </div>

          <button type="submit" className="btn">envoyer</button>
        </Form>
      </Formik>
    </div>

  )

}
export default Forme;