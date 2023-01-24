
// Zad 5 
// Stwórz custom hooka useClickOutside, 
// który jako parametr przyjmie wartość ref z hooka useRef oraz funkcję callback, 
// który będzie służył do nasłuchiwania kliknięć na zewnętrzne elementy. 

// Jako funkcję callback możesz przekazać funkcję zamykającą modal, 
// do którego przypięty jest ref.

// user story : click modal => open window, click outside window => close window



import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import ModalBootstrap from './components/Modal/ModalBootstrap';
import useHide from './components/useHide';


function App() {

  const [showModal,setShowModal, openModal] = useHide();


  return (
    <div className='container'>
        <Button className="button" size="lg" onClick={openModal}>click me</Button>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        {/* <ModalBootstrap/>  */}
    </div>
  );
}

export default App;
