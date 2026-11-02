import React, { useEffect } from 'react';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData,DeleteData} from './features/User/userSlice';
import Home from './Pages/Home';
import AddUser from './Pages/Create';

const User = () => {

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();


  console.log(user);

  useEffect(()=>{
    dispatch(fetchData())
  })


   function handleDelete(id){
   dispatch(DeleteData(id))
  }

  return (
    <div className="table-container">
      <BrowserRouter>
      <Link to={'/add'}><button>Add+</button></Link>
        <Routes>
          <Route path="/" element={<Home user={user} handleDelete={handleDelete} />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default User;