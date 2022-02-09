import React from 'react'

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className='overlay' />
      <div className='modal'>
        {/* <h2>Welcome to Mario Memory!</h2>
        <p>Get points for choosing a card, but be carfeul!</p>
        <p>If you select the same card twice the game is over.</p> */}
        {children}
        <button onClick={onClose} className='button' >close</button>
      </div>
    </>
  )
}

export default Modal
