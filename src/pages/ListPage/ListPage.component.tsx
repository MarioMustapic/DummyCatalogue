import "./ListPage.styles.scss";
import { useState } from "react";
import { Card } from "../../components/card/Card.component";
import Pagination from "../../components/pagination/pagination.component";

let PageSize = 10;

export const ListPage = (props: any): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentTableData = props.dataArray?.slice(
    firstPageIndex,
    lastPageIndex
  );

  const productData = currentTableData?.map((product: any, index: number) => (
    <Card
      className={"card card" + product.id}
      key={`${product.id}-${index}-${currentPage}`}
      cardData={product}
      setShowDetails={props.setShowDetails}
      setDetailsData={props.setDetailsData}
    />
  ));

  return (
    <div className="list-page">
      <div className="pagination-centering">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={props.dataArray?.length}
          pageSize={PageSize}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </div>

      <div>{productData}</div>
      <div className="pagination-centering">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={props.dataArray?.length}
          pageSize={PageSize}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};
