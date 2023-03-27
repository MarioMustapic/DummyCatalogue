import "./ListPage.styles.scss";
import { useEffect, useState } from "react";
import { Card } from "../../components/card/Card.component";
import Pagination from "../../components/pagination/pagination.component";
import { useLocation } from "react-router-dom";

type Props = {
  dataArray: object[];
  focusOnCard: { page: number; id: number };
};

let PageSize = 10;

export const ListPage = (props: Props): JSX.Element => {
  const focusProduct = useLocation().state?.focusOnCard;

  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    if (focusProduct?.page != undefined) setCurrentPage(focusProduct?.page);
  }, []);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentTableData = props.dataArray?.slice(
    firstPageIndex,
    lastPageIndex
  );

  const productData = currentTableData?.map(
    (
      product: { [index: string]: number | string | string[] | any },
      index: number
    ) => (
      <Card
        className={"card card" + product.id}
        key={`${product.id}-${index}-${currentPage}`}
        productData={product}
        focusOnCard={props.focusOnCard}
        currentPage={currentPage}
      />
    )
  );

  return (
    <div className="list-page">
      <div className="pagination-centering">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={props.dataArray?.length}
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>

      <div className="list">{productData}</div>
      <div className="pagination-centering">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={props.dataArray?.length}
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};
