import Sidebar from "../Layout/Sidebar";
import TableContainer from "../TableContainer/TableContainer";

export default function Example() {
  return (
    <Sidebar>
      <div className="flex w-full pr-10">
        <TableContainer />
      </div>
    </Sidebar>
  );
}
