import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'
const Create = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        title: "",
        author: "",
        isbn: "",
        publication_year: "",
        dob: "",
        bio: "",

    })



    // const createData=async(values)=>{


    // await axios.post("https://65d7947227d9a3bc1d7b5a67.mockapi.io/api/books",values)
    // navigate('/Store')
    // }
    const initialValues = {
        title: "",
        author: "",
        isbn: "",
        publication_year: "",
        dob: "",
        bio: "",
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('title is required'),
        author: Yup.string().required('author is required'),
        isbn: Yup.string().required('isbn is required'),
        publication_year: Yup.string().required('date is required'),
        dob: Yup.string().required('date of birth is required'),
        bio: Yup.string().required('Biography is required')
    })

    const formik = useFormik({
        initialValues: { data },
        validationSchema,
        onSubmit: async (values) => {
            await axios.post("https://65d7947227d9a3bc1d7b5a67.mockapi.io/api/books", values)
                .then(res => console.log(res.data))

            navigate("/store")
        }
    })

    return (
        <div>
            <div className="container">
                <div id="box" className="d-flex flex-column mt-5 border border-2 ">

                    <form onSubmit={formik.handleSubmit}>
                        <p className="h4 d-flex justify-content-center pacifico-regular text-primary ">Create New Data</p>

                        <label id="mrg" className=" p-2 fw-bold float-end ">Title : <input className="bg-transparent rounded " type="text" name="title" value={formik.values.title} onChange={formik.handleChange} /></label>
                        <p id="mrg" className="text-danger"> {formik.errors.title}</p>

                        <label id="mrg" className=" p-2 fw-bold  float-end ">Author  :<input className="bg-transparent rounded " type="text" name="author" value={formik.values.author} onChange={formik.handleChange} /></label>
                        <p id="mrg" className="text-danger">{formik.errors.author}</p>


                        <label id="mrg" className="p-2  fw-bold float-end ">ISBN number : <input className="bg-transparent rounded" type="text" name="isbn" value={formik.values.isbn} onChange={formik.handleChange} /></label>
                        <p id="mrg" className="text-danger">{formik.errors.isbn}</p>



                        <label id="mrg" className="p-2  fw-bold float-end "> Publication date :<input className="bg-transparent rounded" type="text" name="publication_year" value={formik.values.publication_year} onChange={formik.handleChange} /> </label>
                        <p id="mrg" className="text-danger">{formik.errors.publication_year}</p>

                        <label id="mrg" className="p-2  fw-bold float-end"> Birth date : <input className="bg-transparent rounded" type="text" name="dob" value={formik.values.dob} onChange={formik.handleChange} /></label>
                        <p id="mrg" className="text-danger">{formik.errors.dob}</p>


                        <label id="mrg" className="p-2  fw-bold float-end ">Biography : <input className="bg-transparent rounded" type="text" name="bio" value={formik.values.bio} onChange={formik.handleChange} /></label>
                        <p id="mrg" className="text-danger">{formik.errors.bio}</p>
                        <button type='submit' id="btn" className="d-flex btn btn-primary  mt-1 p-1">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Create;