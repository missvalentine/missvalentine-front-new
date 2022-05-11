import React from 'react'
import ReactModal from 'react-modal'

const Modal = (props) => {
  const { isOpen, closeModal, modalStyles, children } = props

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { closeModal })
    }
    return child
  })

  return (
    <ReactModal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="MissValentine Label"
      ariaHideApp={false}
    >
      <div>
        <div className="pink-gradient modal-header d-flex justify-content-end">
          {/* GET ASSURED REWARD POINTS FOR EVERY PURCHASE */}
          <span
            className="text-white icon-close pointer"
            onClick={closeModal}
          ></span>
        </div>
        {childrenWithProps}
      </div>
    </ReactModal>
  )
}
export default Modal
