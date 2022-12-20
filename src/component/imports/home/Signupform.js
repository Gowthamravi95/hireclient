import React,{useState} from 'react'
import axios from 'axios';


export default function Signupform({onCloseModal}) {
  const [formData,setFormData]=useState({
    userName:"",
    email:"",
    password: "",
    passwordCheck:"",
    role:""

})
const handleFormSubmit =(e)=>{
e.preventDefault()
const postUser =async(newUser)=>{
  
  try{
    await axios.post('http://localhost:2500/user',newUser)
    .then(window.alert("registeration success please login to continue"))
  }
  catch(err){
    window.alert(err)
  }
 
  
 
 }
 if(formData.password == formData.passwordCheck){
  postUser(formData)
onCloseModal();


 }else{
  window.alert("password not matching")
 }

}
const handleFormChange =(e)=>{

  const {name,value} =e.target
  setFormData(formData=>({...formData,[name]:value}))
}
  return (
    <div className='p-5'>
      <h2 className='text-center pb-4'>SignUp Form </h2>

      <form  onSubmit={handleFormSubmit} autoComplete="off">
        <div className='mb-3'>
        <label htmlFor="userName">UserName:</label>
        <input  autoComplete='false' type="text" placeholder='Enter UserName' id='userName' name="userName" value={formData.userName} onChange={handleFormChange} />
        </div>
         <div className="mb-3">
         <label htmlFor="email">Email ID:</label>
        <input type="email" placeholder='Enter EmailID' id='email' name="email" value={formData.email} onChange={handleFormChange} />
         </div>
         <div className="mb-3">
          
        <label htmlFor="password">Password:</label>
        <input autoComplete='off' type="password" placeholder='Enter Password' id='password' name="password" value={formData.password} onChange={handleFormChange} />
          </div>
          <div className="mb-3">
          <label htmlFor="passwordCheck">Confirm Password:</label>
        <input type="password" placeholder='Confirm Password' id='passwordCheck' name="passwordCheck" value={formData.passwordCheck} onChange={handleFormChange} />
          </div>

      <div className="mb-3">
      <label >Account Type </label>
      
        <input  type="radio" name="role" value="Client" id="client" onChange={handleFormChange}/><label className='mx-2' style={{"width":"50px"}} htmlFor="client">Client</label> 
        <input type="radio" name="role" value="Freelancer" id='Freelancer' onChange={handleFormChange} /><label className='mx-2 ' style={{"width":"50px"}} htmlFor="Freelancer">Freelancer</label>
      </div>
       <div className="text-center">
       <button type='submit' className='btn btn-primary mt-63' style={{"width":"70%"}}>Register</button>

       </div>
      
      </form>
    </div>
  )
}
