import "./ListPage.styles.scss";
import { useState } from "react";
import { Card } from "../../components/card/Card.component";
import Pagination from "../../components/pagination/pagination.component";

let PageSize = 10;

export const ListPage = (props: any): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(props.focusOnCard.page);

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
      focusOnCard={props.focusOnCard}
      setShowDetails={props.setShowDetails}
      setDetailsData={props.setDetailsData}
      setFocusOnCard={props.setFocusOnCard}
      currentPage={currentPage}
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

      <div className="list">{productData}</div>
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
