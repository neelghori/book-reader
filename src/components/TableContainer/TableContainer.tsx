import { useContext, useEffect, useState } from "react";
import AddEditDialog from "../Dialog/AddEditDialog";
import Button from "../UI/Button";
import Heading from "../UI/Heading";
import { BookContextProvider } from "../../Context/BookContext";
import { ReducerActionType } from "../../Types/Context/BookReducer";
import DeleteDialog from "../Dialog/DeleteDialog";
import Pagination from "./Pagination";
import usePagination from "../../hooks/usePagination";
import { TableHeading } from "../../Data/constants";
import UpArrow from "../UI/Icons/UpArrow";
import DownArrow from "../UI/Icons/DownArrow";

// this component is shown in dashboard the list of book list in table format.
export default function TableContainer() {
  const { dispatch } = useContext(BookContextProvider);
  const [sortBy, setSortby] = useState({
    field: "",
    orderbyAsc: "",
  });
  const { currentItems, currentPage, totalPages, handlePageChange } =
    usePagination();
  const [open, setOpen] = useState({
    modal: "Add",
    modalStatus: false,
    editData: {
      title: "",
      author: "",
      publication_year: "",
      genre: "",
    },
  });

  useEffect(() => {
    dispatch({ type: ReducerActionType.GETLISTDATA });
  }, []);
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 mt-10 w-full">
        <div className="flex justify-between items-center">
          <Heading
            heading="h2"
            classnames="text-3xl font-semibold leading-6 !mt-0 text-gray-900"
          >
            Book List
          </Heading>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button
              onClick={() => {
                setOpen({
                  ...open,
                  modal: "Add",
                  modalStatus: !open?.modalStatus,
                });
              }}
            >
              Add user
            </Button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="">
                    {TableHeading.map((element, index) => {
                      return (
                        <th
                          key={index}
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          <div
                            className="flex gap-2 cursor-pointer"
                            onClick={() => {
                              dispatch({
                                type: ReducerActionType.SORTTABLEDATA,
                                payload: {
                                  field: element.value,
                                  orderbyAsc: sortBy.orderbyAsc,
                                },
                              });
                              setSortby({
                                field: element.value,
                                orderbyAsc:
                                  sortBy?.orderbyAsc == "asc" ? "desc" : "asc",
                              });
                            }}
                          >
                            <span>{element.title}</span>
                            {element.value !== "id" ? (
                              <span>
                                {sortBy.field == element.value &&
                                sortBy?.orderbyAsc ==
                                  "" ? null : sortBy.field == element.value &&
                                  sortBy?.orderbyAsc == "asc" ? (
                                  <UpArrow />
                                ) : (
                                  <DownArrow />
                                )}
                              </span>
                            ) : null}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentItems &&
                    currentItems.length > 0 &&
                    currentItems.map((book, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {book.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {book.author}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {book.publication_year}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {book.genre}
                        </td>
                        <td className="flex justify-end gap-2  py-4 pr-4 text-right text-sm font-medium ">
                          <Button
                            onClick={() => {
                              setOpen({
                                ...open,
                                editData: book,
                                modalStatus: !open?.modalStatus,
                                modal: "Edit",
                              });
                            }}
                            classnames="!text-blue-600 !px-0 !py-2 rounded-md border border-blue-600 !bg-transparent hover:text-blue-600"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => {
                              setOpen({
                                ...open,
                                modal: "Delete",
                                editData: book,
                                modalStatus: !open?.modalStatus,
                              });
                            }}
                            classnames="!text-red-600 !px-0 !py-2 rounded-md border !border-red-600 !bg-transparent !hover:text-red-600"
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
                {/* <tfoot>
                </tfoot> */}
              </table>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      {open?.modal == "Add" || open?.modal == "Edit" ? (
        <AddEditDialog
          title={open?.modal == "Edit" ? "Edit Book" : "Add Book"}
          setOpen={setOpen}
          open={open}
        />
      ) : (
        <DeleteDialog open={open} setOpen={setOpen} />
      )}
    </>
  );
}
