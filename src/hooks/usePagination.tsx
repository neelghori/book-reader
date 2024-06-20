import { useContext, useState } from "react";
import { BookContextProvider } from "../Context/BookContext";

const usePagination = () => {
  const { state } = useContext(BookContextProvider);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the number of pages
  const totalPages = Math.ceil(state?.book?.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = state?.book?.slice(indexOfFirstItem, indexOfLastItem);

  //handle change function for changing pagenumber
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange,
  };
};

export default usePagination;
