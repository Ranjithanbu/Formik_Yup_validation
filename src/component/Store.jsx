
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
const Store = ({ setId }) => {
    const [data, setData] = useState([])
    const [dummy, setDummy] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {

        fetchData()

    }, [dummy])

    const fetchData = () => {

        axios.get("https://65d7947227d9a3bc1d7b5a67.mockapi.io/api/books")
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }

    const handleEdit = (id) => {
        setId(id)
        navigate("/edit")
    }

    const handleDel = async (id) => {
        console.log(dummy)
        await axios.delete(`https://65d7947227d9a3bc1d7b5a67.mockapi.io/api/books/${id}`)
        setDummy(pval => pval + 1)
    }


    return (



        <div className="container-fluid">  <p className="d-flex justify-content-center h4 m-3 pacifico-regular">Books collection </p>

            <div className="row">

                <table className="table table-striped table-info ">
                    <thead>
                        <tr >
                            <th>Title</th>
                            <th>Author</th>
                            <th>ISBN Number</th>
                            <th>Publication Date </th>
                            <th colSpan='2' className='text-center'>Action</th>


                        </tr>
                    </thead>
                    <tbody>

                        {data.map((item, index) => {
                            return (
                                <tr key={item.id} >
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.isbn}</td>
                                    <td>{item.publication_year}</td>
                                    <td ><button className='btn btn-primary' onClick={() => { handleEdit(item.id) }}>Edit</button></td>
                                    <td ><button className='btn btn-danger' onClick={() => { handleDel(item.id) }} >Remove</button></td>


                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <p className="d-flex justify-content-center h4 m-3 pacifico-regular">Author Details</p>

            <table className="table table-striped table-info ">
                <thead>
                    <tr >
                        <th>Author Name</th>
                        <th>Date of Birth</th>
                        <th>Biography</th>




                    </tr>
                </thead>
                <tbody>

                    {data.map((item, index) => {
                        return (
                            <tr key={item.id} >
                                <td>{item.author}</td>
                                <td>{item.dob}</td>
                                <td>{item.bio}</td>


                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
};

export default Store;