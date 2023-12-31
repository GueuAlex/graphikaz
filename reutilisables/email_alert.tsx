import React from "react";

const EmailAlertDialog = () => {
  return (
    <dialog id="my_modal_6" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-stone-600">
            ✕
          </button>
        </form>
        <div className="dialog-title-container flex items-center gap-3">
          <div className="alert-icon">
            {" "}
            <i className="ri-alert-line"></i>
          </div>
          <span className=" text-red-600">Attention !</span>
        </div>

        <p className="py-4 pl-3 text-stone-900 justify-center flex text-center">
          Un compte existe déjà avec cette adresse email. Reéssayer avec une
          autre adresse
        </p>
      </div>
    </dialog>
  );
};

export default EmailAlertDialog;
