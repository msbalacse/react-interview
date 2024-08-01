import { useDispatch } from "react-redux";
import { TUser } from "../types/global";
import { setUser } from "../slices/userSlice";
import { Formik } from "formik";


import * as Yup from 'yup';

import './UserRegister.css';
import { Autocomplete, Button, TextField } from "@mui/material";
import { useState } from "react";

const UserRegister = () => {
    
    const dispatch = useDispatch();

    const [formData,setFormData] = useState<TUser>({
        id: '',
        name: 'test name',
        age: 17,
        email: '',
        contact: 0,
        country: ''
    });

    const initialValues:TUser = {
        id: '',
        name: 'first name',
        age: 17,
        email: '',
        contact: 0,
        country: ''
    };

    const validationSchema = Yup.object({
        name: Yup
                .string('Enter your name')
                .required('Name is required'),
        age: Yup
                .number('Enter a valid age')
                .min(18,'Person must be at least 18 years old')
                .required('Age is required'),
    })

    

  return (
    <section> 
       <Formik initialValues={formData} validationSchema={validationSchema} onSubmit={(values,{setSubmitting}) => {
                let UserID = "ID" + Math.random().toString(16).slice(2);
        
                setSubmitting(false);
        
                setFormData({
                    ...values,
                    id: UserID
                });

                dispatch(setUser(formData));

                console.log({
                    ...values,
                    id: UserID
                });
       }}>
        {({
            values,
            handleSubmit,
            handleChange,
            touched,
            errors,
            isSubmitting
        })=>(
            <form className="form" onSubmit={handleSubmit}>
                <TextField type="text" name="name" value={values.name} error={touched.name && Boolean(errors.name)} label="Name" variant="outlined" onChange={handleChange} helperText={touched.name && errors.name} />
                <TextField type="number" name="age" value={values.age} error={touched.age && Boolean(errors.age)} label="Age" variant="outlined" onChange={handleChange} helperText={touched.age && errors.age} />
                <Autocomplete
                    options={['India','USA', 'UK', 'Canada']}
                    id="country"                    
                    value={values.country}
                    onChange={(e,value)=> setFormData({...formData,country: value === null ? "" : value})}
                    renderInput={(params) => (
                    <TextField {...params} label="Country" name="country" variant="outlined" />
                    )}
                />
                <Button type="submit" color="primary" disabled={isSubmitting}>
                    Submit
                </Button>
            </form>
        )}
       </Formik>
    </section>
  )
}


export default UserRegister;


// <form>
//             <label htmlFor='name'>Name</label><br/>
//             <input type="text" name="name" value={formInput.name} onChange={handleChanges}/><br/>   
//             <label htmlFor='age'>Age</label><br/>
//             <input type="number" name="age" value={formInput.age} onChange={handleChanges}/><br/>   
//             <label htmlFor='email'>Email</label><br/>
//             <input type="text" name="email" value={formInput.email} onChange={handleChanges}/><br/>   
//             <label htmlFor='contact'>Contact</label><br/>
//             <input type="number" name="contact" value={formInput.contact} onChange={handleChanges} /><br/>
//             <button onClick={handleSave}>save</button>   
//         </form>