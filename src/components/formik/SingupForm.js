import React from 'react';
import { useFormik } from 'formik';

export default function SignupForm(){
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const isStartWithUpperCase = (str) => {
        let initial = String(str).charAt(0);
        return initial.toUpperCase() === initial;
    }

  const validate = values => {
    console.log('validate values ', values);
    const errors = {};
    if(! isStartWithUpperCase(values.name))
    {
        errors.name = 'Name must start with uppercase';
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validate, //validate: validate
    onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2));
        console.log('form values ', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
        <div className={'form-group'}>
            <label htmlFor="name">name</label>
            <input
            id="name"
            name="name"                            
            type="text"
            className={'form-control'}
            onChange={formik.handleChange}
            value={formik.values.name}
            />
            {/* {formik.errors.name ? <div className='alert alert-danger'>{formik.errors.name}</div> : null} */}
            {formik.errors.name && <div className='alert alert-danger'>{formik.errors.name}</div>}
        </div>

        <div className={'form-group'}>
            <label htmlFor="email">Email Address</label>
            <input
            id="email"
            name="email"                            //name value must equal to initialValues.email property  //formik.handleSubmit call onSubmit
            type="email"
            className={'form-control'}
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            {formik.errors.email && <div className='alert alert-danger'>{formik.errors.email}</div>}
        </div>    

        <div className={'form-group'}>
            <label htmlFor="password">password</label>
            <input
            id="password"
            name="password"                            
            type="password"
            className={'form-control'}
            onChange={formik.handleChange}
            value={formik.values.password}
            />
            {formik.errors.password && <div className='alert alert-danger'>{formik.errors.password}</div>}
        </div>     
      

      <button type="submit" className='btn btn-success'>Submit</button>
    </form>
  );
};