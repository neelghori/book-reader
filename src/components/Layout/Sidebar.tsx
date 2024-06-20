import { Link, useHistory } from "react-router-dom";
import DashboardIcon from "../UI/Icons/DashboardIcon";
import LogOutIcon from "../UI/Icons/LogOut";
import MenuBar from "../UI/Icons/MenuBar";
import { useContext } from "react";
import { BookContextProvider } from "../../Context/BookContext";
import { ReducerActionType } from "../../Types/Context/BookReducer";

const Sidebar: React.FC<{ children: React.ReactNode }> = (props) => {
  const { dispatch } = useContext(BookContextProvider);
  const history = useHistory();
  const menuItem = [
    {
      label: "Dashboard",
      href: "/",
      icon: <DashboardIcon />,
    },
    {
      label: "Log Out",
      href: "/",
      function: () => {
        dispatch({ type: ReducerActionType.LOGOUT });
        history.push("/login");
      },
      icon: <LogOutIcon />,
    },
  ];
  return (
    <>
      <div className="flex flex-row">
        <div>
          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <MenuBar />
          </button>

          <aside
            id="default-sidebar"
            className=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
          >
            {/* <div>
          <img src={"./"} alt="logo" width={100} height={100} />
        </div> */}
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-2 font-medium">
                {menuItem &&
                  menuItem.length > 0 &&
                  menuItem.map((element, index) => {
                    return (
                      <li key={index}>
                        {element?.function ? (
                          <p
                            onClick={element.function}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                          >
                            {" "}
                            {element?.icon}
                            <span className="ms-3">{element?.label}</span>
                          </p>
                        ) : (
                          <Link
                            to={element.href}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                          >
                            {element?.icon}
                            <span className="ms-3">{element?.label}</span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </aside>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default Sidebar;
