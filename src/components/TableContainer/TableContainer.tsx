import { useState } from "react";
import AddEditDialog from "../Dialog/AddEditDialog";
import Button from "../UI/Button";
import Heading from "../UI/Heading";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
];

export default function TableContainer() {
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
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 mt-10 w-full">
        <div className="flex justify-between items-center">
          <Heading
            heading="h2"
            classNames="text-3xl font-semibold leading-6 !mt-0 text-gray-900"
          >
            Book List
          </Heading>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button
              onClick={() => {
                setOpen({
                  ...open,
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
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="flex justify-end gap-2  py-4 pr-4 text-right text-sm font-medium ">
                        <a
                          href="#"
                          className="text-blue-600 px-5 py-2 rounded-md border border-blue-600 hover:text-blue-600"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="text-red-600 px-5 py-2 rounded-md border border-red-600 hover:text-red-600"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddEditDialog
        title={open?.modal == "Edit" ? "Edit Book" : "Add Book"}
        setOpen={setOpen}
        open={open}
        on
      />
    </>
  );
}
