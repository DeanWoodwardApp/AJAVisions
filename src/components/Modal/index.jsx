import React from "react";

import styles from './style.module.scss';

export const Modal = ({ onSubmit, onCancel, closeModal, children }) => {
  return (
    <div
      className={styles.modal-container}
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className={styles.modal}>
        <div
          className={styles.modal-header}
          onClick={() => closeModal("Modal was closed")}
        >
          <p className={styles.close}>&times;</p>
        </div>
        <div className={styles.modal-content}>{children}</div>
        <div className={styles.modal-footer}>
          <button
            type="submit"
            className={styles.btn-submit}
            onClick={() => onSubmit("Submit button was clicked")}
          >
            Submit
          </button>
          <button
            type="submit"
            className={styles.btn-cancel}
            onClick={() => onCancel("Cancel button was clicked")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
