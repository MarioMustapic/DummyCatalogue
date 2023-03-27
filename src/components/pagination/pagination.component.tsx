import { usePagination, DOTS } from "../../custom hooks/usePagination";
import classnames from "classnames";
import "./pagination.styles.scss";

const Pagination = (props: any) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
    window.scrollTo(0, 0);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    window.scrollTo(0, 0);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
        key={"previous"}
      >
        ❮
      </li>
      {paginationRange.map((pageNumber: any, index: number) => {
        if (pageNumber === DOTS) {
          return (
            <li className="pagination-item dots" key={`dots${index}`}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            key={pageNumber}
            onClick={() => {
              onPageChange(pageNumber);
              window.scrollTo(0, 0);
            }}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
        key={"next"}
      >
        ❯
      </li>
    </ul>
  );
};

export default Pagination;
