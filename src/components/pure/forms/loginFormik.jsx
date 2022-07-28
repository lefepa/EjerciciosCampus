import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape (
    {
        email: Yup.string() 
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string().required('password is requiered')
            .required('Password is required'),
        }
    )

 const LoginFormik = () => {

       
    return (
        
    <div>
        <h4> Login Formik </h4>
        <Formik
            initialValues={ {

                email: '',
                password: '',
            } }
                
            

            validationSchema = {loginSchema}
            onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
        
        >
         {/* We obtain props from formik */}

              
         {({ values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur }) => (

                            <Form>

                            <label htmlFor="Email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="ingrese el email" />
                            {/* Email errors  */}
                             { 
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name="email" component='div'/>
                                )
                            } 

                               

                            <label htmlFor="password">Password</label>
                            <Field id="password" type="password" name="password" placeholder="password" />

                             {/* Password   errors */}
                              {  
                                
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage name="password" component='div'/>
                                )
                            } 
                            <button type="submit">Submit</button>
                            {isSubmitting ? (<p>login your credentials </p>): null}

                        </Form>

         )}      
              
             

                      

               
            
        </Formik> 

    </div>
    );
                        
}


export default LoginFormik;
