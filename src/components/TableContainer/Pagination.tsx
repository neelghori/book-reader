import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import {
  PaginationButtonProps,
  PaginationMainprops,
} from "../../Types/components/TableContainer/Pagination";

const Pagination: React.FC<PaginationMainprops> = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= props.totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className=" py-4 flex items-center justify-end w-full">
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <PaginationButton
            title="Previous"
            onClick={() => {
              if (props?.currentPage == 1) {
                return;
              } else {
                props?.onPageChange(props?.currentPage - 1);
              }
            }}
            icon={
              <ChevronLeftIcon
                className="h-5 w-5 cursor-pointer"
                aria-hidden="true"
              />
            }
          />
          {pageNumbers.map((number, index) => {
            return (
              <p
                key={index}
                onClick={() => props?.onPageChange(number)}
                aria-current="page"
                className={`cursor-pointer relative z-10 inline-flex items-center ${
                  number == props?.currentPage
                    ? "bg-blue-600 text-white"
                    : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
                } px-4 py-2 text-sm font-medium focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
              >
                {number}
              </p>
            );
          })}
          <PaginationButton
            title="Previous"
            onClick={() => {
              if (props?.currentPage == pageNumbers.length) {
                return;
              } else {
                props?.onPageChange(props?.currentPage + 1);
              }
            }}
            icon={
              <ChevronRightIcon
                className="h-5 w-5 cursor-pointer"
                aria-hidden="true"
              />
            }
          />
        </nav>
      </div>
    </div>
  );
};

const PaginationButton: React.FC<PaginationButtonProps> = (props) => {
  return (
    <p
      onClick={props?.onClick}
      className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
    >
      <span className="sr-only">{props.title}</span>
      {props?.icon}
    </p>
  );
};

export default Pagination;
