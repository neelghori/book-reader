import { AddEditDialogProps } from "../../Types/components/Modal/AddEditDialog";
import useBook from "../../hooks/useBook";
import Button from "../UI/Button";
import Loader from "../UI/Icons/Loader";
import Input from "../UI/Input";
import Dialog from "./Dialog";

const AddEditDialog: React.FC<AddEditDialogProps> = (props) => {
  const { formik } = useBook(props?.open);
  const { handleChange, values, errors, handleSubmit, isSubmitting } = formik;
  return (
    <Dialog
      setOpen={props?.setOpen}
      title={props.title}
      open={props?.open}
      onCloseModal={() => {
        props?.setOpen({
          ...props?.open,
          modalStatus: !props?.open?.modalStatus,
        });
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              type="text"
              id="title"
              label="Book Title"
              placeholder="Enter Book Title"
              value={values.title}
              onChange={handleChange}
              error={errors.title}
            />
            <Input
              type="text"
              id="author"
              label="Author Name"
              value={values.author}
              placeholder="Enter Author Name"
              onChange={handleChange}
              error={errors.author}
            />
            <Input
              type="number"
              id="publication_year"
              label="Publish Year"
              max={2024}
              classNames="pr-2"
              value={values.publication_year}
              placeholder="Enter Publish Year"
              onChange={handleChange}
              error={errors.publication_year}
            />
            <Input
              type="text"
              id="genre"
              label="Genre"
              value={values.genre}
              placeholder="Enter Genre"
              onChange={handleChange}
              error={errors.genre}
            />
          </div>
          <div className="">
            <Button
              classNames="!px-4 !py-3"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? <Loader /> : "Add Book"}
            </Button>
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default AddEditDialog;
