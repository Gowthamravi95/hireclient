import React,{useState} from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Signup from './Signupform';
import LoginForm from './LoginForm';

export default function Loginbutton() {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  return (
    <>
       <button type="button" className="btn border border-primary mx-3" onClick={onOpenModal}>Login</button>
       {
        open &&  <Modal open={open} onClose={onCloseModal} center><LoginForm onCloseModal={onCloseModal}/></Modal>
        }       
    </>
  )
}


