import React,{useContext, useState} from 'react'
import { AppContext } from '../../../App'

export default function LoginForm({onCloseModal}) {

    const {users,setIsLoggedIn,isLoggedIn} =useContext(AppContext)
    const [formData,setFormData]=useState({
        email:"",
        password: "",
    
    })
    
    const handleFormSubmit =(e)=>{
      e.preventDefault()

      if(formData.email != "" && formData.password != ""){
            
          const index =users.findIndex(users=>(users.email === formData.email))
        
            if(users[index].password == formData.password){
              setIsLoggedIn(1)
              onCloseModal();
            }else{
                 window.alert("Not a valid email or password")
            }
  
      }else{
        window.alert("input field is empty")
      }
     
    }

    const handleFormChange =(e)=>{
    
      const {name,value} =e.target
      
        setFormData(formData=>({...formData,[name]:value}))
     
    }
  return (
     <div className='p-5'>
      <h2 className='text-center pb-4'>Hire </h2>

      <form  onSubmit={handleFormSubmit} autoComplete="off">
       
         <div className="mb-3">
         <label htmlFor="email">Email ID:</label>
        <input type="email" placeholder='Enter EmailID' id='email' name="email" value={formData.email} onChange={handleFormChange} />
         </div>
         <div className="mb-3">
          
        <label htmlFor="password">Password:</label>
        <input autoComplete='off' type="password" placeholder='Enter Password' id='password' name="password" value={formData.password} onChange={handleFormChange} />
          </div>
        <div className="text-center">
            <button type='submit' className='btn btn-primary ' style={{"width":"100%" }}>Login</button>
        </div>    
      </form>
    </div>
  )
}
