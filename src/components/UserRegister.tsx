import { useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "../types/global";
import { setUser } from "../slices/userSlice";
import { Formik } from "formik";

import './UserRegister.css';

const UserRegister = () => {
    
    const dispatch = useDispatch();

    const [formInput,setFormInput] = useState<User>({
        id: '',
        name: '',
        age: 0,
        email: '',
        contact: 0
    });


    const handleSave = (values,{setSubmitting}) => {
        setTimeout(() => {
            
        let UserID = "ID" + Math.random().toString(16).slice(2);

        console.log(values);

        setFormInput({
                ...values,
                id: UserID
            })

        alert(JSON.stringify(formInput, null, 2));
        setSubmitting(false);

        dispatch(setUser(formInput));

         }, 400);
    }


  return (
    <section> 
       <Formik initialValues={formInput} onSubmit={handleSave}>
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