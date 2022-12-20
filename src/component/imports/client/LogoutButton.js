import React,{useContext} from 'react'
import { AppContext } from '../../../App'

export default function LogoutButton() {

    const {setIsLoggedIn} = useContext(AppContext)  ;
    const handelLogout=()=>{
        let option=window.confirm("are you sure to logout")
        if(option){
            console.log("user logged out")
            setIsLoggedIn(0)
        }
    }
  return (
    <>
       <button type="button" className="btn border border-primary mx-3" onClick={handelLogout}>Logout</button>

    </>
  )
}
