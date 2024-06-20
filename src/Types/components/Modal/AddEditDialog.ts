import { BookProps } from "../../Context/BookReducer";

export interface AddEditDialogProps {
  open: StateModalProps;
  setOpen: (val: StateModalProps) => void;
  title?: string;
}

export interface StateModalProps {
  modal: string;
  modalStatus: boolean;
  editData: BookProps;
}
