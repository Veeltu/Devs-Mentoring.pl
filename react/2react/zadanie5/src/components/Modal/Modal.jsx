import { useRef } from "react";
import './Modal.css'

function Modal({ showModal, setShowModal }) {

  //todo: put that to custom hook |
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return ( 
    <>

      {showModal ? (
        <div className="background" onClick={closeModal} ref={modalRef}>
            <div className="modalWrapper">
              <h1>Are you ready?</h1>
              <p>Get exclusive access to our next launch.</p>
              <button>Join Now</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
