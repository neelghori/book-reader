export interface ModalProps<T> {
  open: T;
  setOpen: (val: T) => void;
  title?: string;
  onCloseModal: () => void;
  children: React.ReactNode;
}
