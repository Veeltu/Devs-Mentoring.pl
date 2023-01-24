import { useState } from "react";

function useHide() {
      const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }
    return [showModal,setShowModal, openModal];
}

export default useHide;