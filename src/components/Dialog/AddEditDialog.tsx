import { AddEditDialogProps } from "../../Types/components/Modal/AddEditDialog";
import useBook from "../../hooks/useBook";
import Button from "../UI/Button";
import Loader from "../UI/Icons/Loader";
import Input from "../UI/Input";
import Dialog from "./Dialog";

// This modal is used for adding and updating book details.
const AddEditDialog: React.FC<AddEditDialogProps> = (props) => {
  const { formik } = useBook(props?.open, props?.setOpen);
  const {
    handleChange,
    values,
    errors,
    handleSubmit,
    handleBlur,
    touched,
    isSubmitting,
  } = formik;
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
              onBlur={handleBlur}
              touched={touched.title}
            />
            <Input
              type="text"
              id="author"
              label="Author Name"
              value={values.author}
              placeholder="Enter Author Name"
              onChange={handleChange}
              error={errors.author}
              onBlur={handleBlur}
              touched={touched.author}
            />
            <Input
              type="number"
              id="publication_year"
              label="Publish Year"
              max={2024}
              classnames="pr-2"
              value={values.publication_year}
              placeholder="Enter Publish Year"
              onChange={handleChange}
              error={errors.publication_year}
              onBlur={handleBlur}
              touched={touched.publication_year}
            />
            <Input
              type="text"
              id="genre"
              label="Genre"
              value={values.genre}
              placeholder="Enter Genre"
              onChange={handleChange}
              error={errors.genre}
              onBlur={handleBlur}
              touched={touched.genre}
            />
          </div>
          <div className="">
            <Button
              classnames="!px-4 !py-3"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                <Loader />
              ) : props?.open?.modal == "Edit" ? (
                "Edit book"
              ) : (
                "Add Book"
              )}
            </Button>
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default AddEditDialog;
