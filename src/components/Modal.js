import React from 'react'

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className='overlay' />
      <div className='modal'>
        {children}
        <button onClick={onClose} className='button' >close</button>
      </div>
    </>
  )
}

export default Modal
