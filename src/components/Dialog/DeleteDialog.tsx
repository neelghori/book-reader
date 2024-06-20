import { useContext } from "react";
import { DeleteDialogProps } from "../../Types/components/Modal/DeleteDialog";
import Button from "../UI/Button";
import Heading from "../UI/Heading";
import Dialog from "./Dialog";
import { BookContextProvider } from "../../Context/BookContext";
import { ReducerActionType } from "../../Types/Context/BookReducer";

const DeleteDialog: React.FC<DeleteDialogProps> = (props) => {
  const { dispatch } = useContext(BookContextProvider);
  const closeModal = () => {
    props?.setOpen({
      ...props?.open,
      modalStatus: !props?.open?.modalStatus,
    });
  };
  return (
    <Dialog
      setOpen={props?.setOpen}
      open={props?.open}
      onCloseModal={closeModal}
    >
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <Heading heading="h3" className="text-2xl font-bold">
            Delete Book ?
          </Heading>
          <p>
            Are you sure you want to delete book? This action cannot be undone.
          </p>
        </div>
        <div className="flex gap-6">
          <Button
            onClick={closeModal}
            classnames="!bg-transparent !text-black border border-gray-300"
          >
            Cancel
          </Button>
          <Button
            classnames="!bg-red-600 !text-white"
            onClick={() => {
              dispatch({
                type: ReducerActionType.DELETEBOOK,
                payload: {
                  ...props?.open?.editData,
                },
              });
              closeModal();
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
