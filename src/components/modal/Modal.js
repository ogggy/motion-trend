import React from 'react'
import './Modal.css'

const Modal = ({ setModalOpen }) => {
  return (
    <div className='modal-bg'>
        <div className='icon-x'>
            <button
                onClick={() => {
                    setModalOpen(false);
                }}
            >
                X
            </button>
        </div>
    </div>
  )
}

export default Modal