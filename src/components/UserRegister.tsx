import { useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "../types/global";
import { setUser } from "../slices/userSlice";
import { Formik } from "formik";

import './UserRegister.css';

const UserRegister = () => {
    
    const dispatch = useDispatch();

    const initialValues:User = {
        id: '',
        name: 'first name',
        age: 17,
        email: '',
        contact: 0
    };


  return (
    <section> 
       <Formik initialValues={initialValues} onSubmit={(values,{setSubmitting}) => {
            setTimeout(() => {
                let UserID = "ID" + Math.random().toString(16).slice(2);
        
                setSubmitting(false);
        
                dispatch(setUser( {
                    ...values,
                    id: UserID
                }));
            }, 2000);
       }}>
        {({
            values,
            handleSubmit,
            handleChange,
            isSubmitting
        })=>(
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="name" value={values.name} onChange={handleChange}  />
                <input type="text" name="age" value={values.age} onChange={handleChange}  />
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
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