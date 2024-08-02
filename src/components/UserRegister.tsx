import { useDispatch } from 'react-redux';
import { TUser } from '../types/global';
import { setUser } from '../slices/userSlice';
import { Formik } from 'formik';

import * as Yup from 'yup';

import './UserRegister.css';
import { Autocomplete, Button, TextField } from '@mui/material';
import { useState } from 'react';

const UserRegister = () => {
    const dispatch = useDispatch();

    const countryOptions = ['India', 'USA', 'UK', 'Canada'];

    const [formData, setFormData] = useState<TUser>({
        id: '',
        name: '',
        age: null,
        email: '',
        contact: null,
        country: '',
    });

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        age: Yup.number().min(18, 'Person must be at least 18 years old').required('Age is required'),
    });

    return (
        <section>
            <Formik
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    let UserID = 'ID' + Math.random().toString(16).slice(2);

                    setSubmitting(false);

                    setFormData({
                        ...values,
                        id: UserID,
                    });

                    dispatch(setUser(formData));

                    console.log({
                        ...values,
                        id: UserID,
                    });
                }}
            >
                {({ values, handleSubmit, handleChange, touched, errors, isSubmitting }) => (
                    <form className="form" onSubmit={handleSubmit}>
                        <TextField
                            type="text"
                            name="name"
                            value={values.name}
                            error={touched.name && Boolean(errors.name)}
                            label="Name"
                            variant="outlined"
                            onChange={handleChange}
                            helperText={touched.name && errors.name}
                        />
                        <TextField
                            type="number"
                            name="age"
                            value={values.age}
                            error={touched.age && Boolean(errors.age)}
                            label="Age"
                            variant="outlined"
                            onChange={handleChange}
                            helperText={touched.age && errors.age}
                        />
                        <Autocomplete
                            options={countryOptions}
                            id="country"
                            value={formData.country}
                            onChange={(_e, value) => setFormData({ ...formData, country: value ?? '' })}
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
    );
};

export default UserRegister;
