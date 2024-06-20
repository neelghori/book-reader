export interface PaginationButtonProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export interface PaginationMainprops {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}
