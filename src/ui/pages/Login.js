import { Formik, Form } from "formik";
import * as y from 'yup';
import TextInput from "../components/atomics/TextInput";

export default function Login(){
  return (
    <section className="main login">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: ''
          }}

          validationSchema={y.object({
            firstName: y.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: y.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: y.string()
              .email('Invalid E-mail address')
              .required('Required'),
            password: y.string()
              .min(8, 'Password must be at least 8 characters')
              .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/, 'Password must be strong and complex')
              .required('Required'),
          })}

          onSubmit={(values, {setSubmitting}) => {
            setSubmitting(false);
          }}
        >
          <Form className="loginform">
            <div className="loginlogo">
              <img 
              className="loginlogo-img" 
              alt="Little Lemon"
              src="/assets/images/logos/Logo.svg" />
            </div>
            {/* <div className="logininput"> */}
              <TextInput 
                label={'First Name'}
                name='firstName'
                type='text' />
              <TextInput
                label={'Last Name'}
                name='lastName'
                type='text' />
              <TextInput 
                label={'Email'}
                name='email'
                type='email'
                placeholder='example@email.com' />
              <TextInput
                label={'Password'}
                name='password'
                type='password' />
            {/* </div> */}
            <button className="hl loginbtn">
              Login
            </button>
          </Form>
        </Formik>
    </section>
  )
}