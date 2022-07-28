import React from 'react'
import{Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {
   
    let user = new User ();

    const initialValues = {

        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape (
        
        {
            username: Yup.string()
                      .min(6, 'username too short')
                      .max(12, 'username too long') 
                      .required('user is required'), 
            email: Yup.string() 
                      .email('Invalid email format')
                      .required('Email is required'),
               role: Yup.string()
                      .oneOf([ROLES.USER, ROLES.ADMIN], 'yOU MUST SELECT A ROL: USER/ADMIN')
                      .required ('Ypu must select a rol'),
            password: Yup.string()
                      .min(8, 'password too short')
                      .required('Email is required'),
                 confirm: Yup.string()
                        .when("password", {
                            is: value => (value && value.length > 0 ? true:false),
                            then: Yup.string().oneOf (
                                [Yup.ref("password")],
                                '¡Passwords must match!'
                                          
                            )
                        }).required("You must confirm the password")  
                      

        }
    )
    const submit = () => 
        {
            console.log("register user")
        }
    
    return(
        <div>
            <h4> Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema = {registerSchema}
            onSubmit={values => {
               console.log(values);
            }}
         
            
            >
            {({ values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur }) => (

                <Form>
                    <label htmlFor="username">Username</label>
                    <Field id="username" type="text" name="username" placeholder="User name" />
                    
                    { 
                        errors.username && touched.username &&
                        (
                            <ErrorMessage name="username" component='div'/>
                        )
                    } 
                    
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="email" name="email" placeholder="example@email.com" />   

                    { 
                        errors.email && touched.email &&
                        (
                            <ErrorMessage name="email" component='div'/>
                        )
                    } 

                    <label htmlFor="password">Password</label>
                    <Field id="password" type="password" name="password" placeholder="password" />

                             
                    {  
                                
                        errors.password && touched.password &&
                        (
                            <ErrorMessage name="password" component='div'/>
                        )
                    } 

                    <label htmlFor="confirm">Password</label>
                    <Field id="confirm" type="password" name="confirm" placeholder="confirm password" />

                             
                    {  
                                
                        errors.confirm && touched.confirm &&
                        (
                            <ErrorMessage name="confirm" component='div'/>
                        )
                    } 

                    <button type="submit">Register Account</button>
                        {isSubmitting ? (<p>Sending your credentials </p>): null}
                    
            

                
                </Form>


             )}



            </Formik>
            
        </div>
    );
}

export default RegisterFormik;
