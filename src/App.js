import React, { useState, useEffect, useContext, createContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Profileupdate from './pages/Profileupdate';
import Updateitem from './pages/Updateitem';
import ProtectedRoute from "./ProtectedRoute";

export const store = createContext();

function App() {

  const [userdata, setUserdata] = useState({email:"",firstName:"",lastName:"",country:"",password:""});
  const [itemlist, setItemlist] = useState([]);

  return (
    <div className="App">


      <store.Provider value={{userdata,setUserdata,itemlist,setItemlist}}>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<ProtectedRoute Component={Home} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<ProtectedRoute Component={Profile}  />} />
            <Route path="/profileupdate" element={<ProtectedRoute Component={Profileupdate} />} />
            <Route path="/updateitem" element={<ProtectedRoute Component={Updateitem} />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>

        </BrowserRouter>
      </store.Provider>

    </div>
  );
}

export default App;
