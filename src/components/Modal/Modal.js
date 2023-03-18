function Modal({ showModal, onClose, children }) {
  if (!showModal) return null;

  return (
    <>
      {showModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
