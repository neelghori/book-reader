import Sidebar from "../Layout/Sidebar";
import TableContainer from "../TableContainer/TableContainer";

//dashboard component which include book listing, add/edit modal, sidebar menu
export default function Example() {
  return (
    <Sidebar>
      <div className="flex w-full pr-10">
        <TableContainer />
      </div>
    </Sidebar>
  );
}
