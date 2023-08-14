import React, { useState } from "react";
import {Formik, Field,Form, useFormikContext} from 'formik';
import './Form.css';
import axios from 'axios';
import * as Yup from 'yup';

function Forme({success}){
    const handleFocus = (event) => {
        event.currentTarget.parentNode.classList.add("focus");
      };
    
      const handleBlur = (event) => {
        if (event.currentTarget.value === "") {
          event.currentTarget.parentNode.classList.remove("focus");
        }
      };

      const handleSubmit = async (values, {resetForm})=>{
        try{
          const res= await axios.post('/addmessage',values)
          success()
          resetForm()
        }catch(error){
          console.error(error)

        }
      }
  
      const validation= Yup.object().shape({
        nom:Yup.string().matches(/^[A-Za-z]+$/).required('obligatoire'),
        prénom:Yup.string().matches(/^[A-Za-z]+$/).required('obligatoire'),
        email:Yup.string().email('email invalide').required('obligatoire'),
        tel:Yup.string().matches(/^[0-9]+$/),
        message:Yup.string().max(3000,'trés grand').required('obligatoire'),

      });
    return(
        <div className="contact-forme">
            <h3 className='titleC'>Contact us</h3>

        <Formik initialValues={{nom:"",prénom:"",email:"",tel:"",message:""}} validationSchema={validation} onSubmit={handleSubmit}>
          <Form>
            <div className="input-info">
            <label htmlFor="nom">nom</label>
            <Field name="nom" type="text" className="input" id="nom" onFocus={handleFocus} onBlur={handleBlur}/> <span>nom</span>
            </div>
            <div className="input-info"><label htmlFor="prénom">prénom</label><Field name="prénom" id="prénom" type="text" className="input" onFocus={handleFocus} onBlur={handleBlur}/>
            <span>prénom</span>
            </div>
            
            <div className="input-info"><label htmlFor="email">email</label><Field name="email" id="email" type="email" className="input" onFocus={handleFocus} onBlur={handleBlur}/>
            <span>email</span>
            </div>
            
            <div className="input-info"><label htmlFor="tel">téléphone</label><Field name="tel" id="tel" type="tel" className="input" onFocus={handleFocus} onBlur={handleBlur} />
            <span>téléphone</span>
            </div>
            
            <div className="input-info"><label htmlFor="message">message</label><Field name="message" id="message" as="textarea" className="input" onFocus={handleFocus} onBlur={handleBlur}/>
            <span>message</span>
            </div>
            
            <button type="submit" className="btn">envoyer</button>
        </Form>
        </Formik>
        </div>

    )

}
export default Forme;