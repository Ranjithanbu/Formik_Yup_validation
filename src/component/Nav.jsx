import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css'
const Nav = () => {
  return (
    <div>


      <div>
        <nav class="navbar navbar-dark bg-dark ">
          <div class="container-fluid">
            <a class="navbar-brand " href="#">
              <img className="mb-3" src="https://th.bing.com/th/id/R.8aedd1cc7f0e53afa4e7134e7ad85919?rik=2TV7Ib%2bSle8a1g&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-book-clipart%2ftransparent-book-clipart-25.png&ehk=nUFhMxvqywbSVhD%2fxpBR8LJXqqKVbSa4%2fKPxYlUJftw%3d&risl=&pid=ImgRaw&r=0" alt="Logo" width="50" height="40" class="d-inline-block align-text-top" />
              <span className="fs-1 ms-4 lobster-regular">Books Paradise</span>
            </a>

            <a  ><Link to="/" id="addUser" className="home active nav-link fw-bold  px-4">Home</Link></a>
            <a ><Link to="/store" id="addUser" className="active nav-link fw-bold  px-4">Collection</Link></a>

            <a ><Link to="/create" id="addUser" className="active nav-link fw-bold  px-4">Create</Link></a>
            <a ><Link to="" id="AddAuthor" className="active nav-link fw-bold  px-4 ">Add Author</Link></a>


          </div>
        </nav>
      </div>




























    </div>
  );
};

export default Nav;