import React,{useState} from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Signup from './Signupform';

export default function Signupbutton() {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  return (
    <>
       <button type="button" className="btn border border-primary mx-3" onClick={onOpenModal}>SignUp</button>
       {
        open &&  <Modal open={open} onClose={onCloseModal}  center><Signup onCloseModal={onCloseModal}  /></Modal>
        }       
    </>
  )
}
