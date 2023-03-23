import "./ListPage.styles.scss";
import { useState } from "react";
import { Card } from "../../components/card/Card.component";
import Pagination from "../../components/pagination/pagination.component";

type Props = {
  dataArray: object[];
  focusOnCard: { page: number; id: number };
  setShowDetails: Function;
  setDetailsData: Function;
  setFocusOnCard: Function;
};

let PageSize = 10;

export const ListPage = (props: Props): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(props.focusOnCard.page);

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
        setShowDetails={props.setShowDetails}
        setDetailsData={props.setDetailsData}
        setFocusOnCard={props.setFocusOnCard}
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
