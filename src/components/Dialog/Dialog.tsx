import React from "react";
import Close from "../UI/Icons/CloseIcon";
import { ModalProps } from "../../Types/components/Modal/Modal";
import { StateModalProps } from "../../Types/components/Modal/AddEditDialog";

//common dialog box to reuse when we need to show popup.
const Dialog: React.FC<ModalProps<StateModalProps>> = (props) => {
  return (
    <dialog
      open={props?.open?.modalStatus}
      className={`bg-black/40 w-screen h-screen z-[9999] fixed`}
    >
      <div className="flex justify-center items-center h-full">
        <div className="w-[800px] h-full md:h-auto flex flex-col gap-4 px-5 py-6 bg-white rounded-none md:rounded-xl transition-all duration-700">
          <div className="flex justify-between">
            <p className="text-xl font-bold">{props.title}</p>
            <Close
              onClick={() => {
                props?.onCloseModal();
              }}
            />
          </div>
          {props.children}
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
