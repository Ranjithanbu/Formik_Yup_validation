import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import '../App.css'
import axios from 'axios'
const Edit = ({ id }) => {

    const navigate = useNavigate()
    const [dummy, setDummy] = useState([])
    const [editData, setEditData] = useState({
        title: "",
        author: "",
        isbn: "",
        publication_year: "",
        dob: "",
        bio: ""

    })

    const [eid, setEid] = useState(id)
    useEffect((id) => {
        fetchData(id)
    }, [])
    const fetchData = async (id) => {

        await axios.get(`https://65d7947227d9a3bc1d7b5a67.mockapi.io/api/books/${eid}`)
            .then(res => setEditData(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        formik.setValues(editData)
    }, [editData])


    const validationSchema = Yup.object().shape({
        title: Yup.string().required('title is required'),
        author: Yup.string().required('author is required'),
        isbn: Yup.string().required('isbn is required'),
        publication_year: Yup.string().required('date is required'),
        dob: Yup.string().required('date of birth is required'),
        bio: Yup.string().required('Biography is required')
    })



    const formik = useFormik({

        initialValues: {
            title: "",
            author: "",
            isbn: "",
            publication_year: "",
            dob: "",
            bio: ""
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log(values)
            await axios.put(`https://65d7947227d9a3bc1d7b5a67.mockapi.io/api/books/${id}`, values)
                .then(res => console.log(res.data))

            navigate("/store")
        }

    })









    return (
        <div className="container">
            <div id="box" className="d-flex flex-column mt-5 border ">
                <form onSubmit={formik.handleSubmit} >
                    <p className="h4 d-flex justify-content-center pacifico-regular text-primary ">Edit data</p>

                    <label className="p-2 mt-4 fw-bold float-end">Title : <input name='title' className="bg-transparent rounded" type="text" value={formik.values.title} onChange={formik.handleChange} /></label><br />

                    <div id="mrg" className="text-danger" >{formik.errors.title}</div>
                    <label className="p-2 mt-3 fw-bold float-end ">Author : <input className="bg-transparent rounded" type="text" name="author" value={formik.values.author} onChange={formik.handleChange} /></label><br />
                    <div id="mrg" className="text-danger"> {formik.errors.author}</div>
                    <label className="p-2 mt-3 fw-bold float-end ">ISBN number : <input className="bg-transparent rounded" type="text" name="isbn" value={formik.values.isbn} onChange={formik.handleChange} /></label><br />
                    <div id="mrg" className="text-danger">{formik.errors.isbn}</div>
                    <label className="p-2 mt-3 fw-bold float-end "> Publication date : <input className="bg-transparent rounded" type="text" name="publication_year" value={formik.values.publication_year} onChange={formik.handleChange} /></label><br />
                    <div id="mrg" className="text-danger">{formik.errors.publication_year}</div>
                    <label className="p-2 mt-3 fw-bold float-end "> Birth date : <input className="bg-transparent rounded" type="text" name="dob" value={formik.values.dob} onChange={formik.handleChange} /></label><br />
                    <div id="mrg" className="text-danger">{formik.errors.dob}</div>
                    <label className="p-2 mt-3 fw-bold float-end ">Biography : <input className="bg-transparent rounded" type="text" name="bio" value={formik.values.bio} onChange={formik.handleChange} /></label><br />
                    <div id="mrg" className="text-danger">{formik.errors.bio}</div>

                    <button type="Submit" id="btn" className="d-flex btn btn-primary  mt-1 p-1">Submit</button>
                </form>

            </div>
        </div>
    );
}

export default Edit;