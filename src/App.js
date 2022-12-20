import './App.scss';
import Home from './component/pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import React,{useEffect, useState,createContext} from 'react';
import axios from "axios"
import Client from './component/pages/Client';


export const  AppContext=createContext();

function App() {
  const [users,setUsers] =useState([])
  const [isLoggedIn,setIsLoggedIn] =useState(0)

  useEffect(()=>{
    const getUsers =async(req,res)=>{
      await axios.get("https://hire-server.onrender.com/")
      .then((res)=>setUsers(res.data))
      
    }
    getUsers();
  },[])
  
  return (
    <AppContext.Provider value={{
      users,
      isLoggedIn,
      setIsLoggedIn
    }}>
       {isLoggedIn ? <Client/> : <Home/>}
    </AppContext.Provider>
     

                  
  );
}

export default App;
