import { useState } from "react";

function useCustomFormik(config)
{
    const [formValue,setFormValue] = useState(config.initialValues);    //firstName , lastName
    
    return{
        values: formValue,
        handleChange: function(e)
        {
            const inputValue = e.target.value; //input value
            const inputName = e.target.name;  //name=firstName
            
            setFormValue({
                ...formValue,
                [inputName] : inputValue        //[inputName] = value in the inputName variable
            });
            console.log('handle change', e.target.name);
        },
        handleSubmit: function(e)
        {
            e.preventDefault();
            console.log('form submit', formValue);
        }
    }
}

export default function CustomFormik()
{
    const formik = useCustomFormik({
        initialValues:{
            firstName: '',
            lastName: ''
        }
    });

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {/* {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='alert alert-danger'>{formik.errors.firstName}</div>
                    ) : null} */}
                </div> 

                <div className='form-group'>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {/* {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='alert alert-danger'>{formik.errors.firstName}</div>
                    ) : null} */}
                </div> 
                <button type="submit" className='btn btn-success'>Submit</button>
            </form>
        </div>
    );
}