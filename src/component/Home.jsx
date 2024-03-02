
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import '../App.css'
const Home = () => {
    const navigate = useNavigate()

    const callStore = () => {

        navigate('/Store')

    }
    return (


        <div>
            <div className="container" >
                <p className="text fs-1  text-center mt-5 pacifico-regular"  >Welcome to books paradise <img className="" src="https://th.bing.com/th/id/R.dfaf6b69947df40eccfabf6fd35b7ce1?rik=9F5Ujg5oAKd6WQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ffrowny-face-transparent%2ffrowny-face-transparent-20.png&ehk=wEivPSdIcp%2bpzN7L8q4DE9BVd6KFC6WDsqo3J1YYhbQ%3d&risl=&pid=ImgRaw&r=0" width='50px' /></p>

            </div>

            <div className="d-flex justify-content-center ">
                <button onClick={callStore} className="h6 btn btn-primary pacifico-regular">Click here to collection</button>
            </div>


        </div>);
};

export default Home;