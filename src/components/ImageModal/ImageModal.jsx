import css from "./ImageModal.module.css";

import Modal from "react-modal"

Modal.setAppElement('#root')

export default function ImageModal({image, onClose}) {
  return (
      <Modal
          isOpen={!!image}
          onRequestClose={onClose}
          className={css.modal}
          overlayClassName={css.overlay}
        >
            {image && (
                <div>
                  <div className={css.wrapImage}> 
                      <img src={image.urls.regular} alt={image.alt_description} className={css.image} />
                  </div>
                  <div className={css.wrapText}>
                      <p>Author: {image.user.name}</p>
                      <p>Likes: {image.likes}</p>
                  </div>
                  <div className={css.wrapBtn}>
                      <button type="button" onClick={onClose} className={css.button}>Close</button>
                  </div>
                </div>
            )}
        </Modal>
  )
}
