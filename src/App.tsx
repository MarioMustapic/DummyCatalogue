import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/card/Card.component";
import Pagination from "./components/pagination/pagination.component";

let PageSize = 10;

function App() {
  interface allProductsDataInterface {
    [index: string]: number | string | object[];
    total: number;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [dataArray, setDataArray] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=0")
      .then((res) => res.json())
      .then((data) => setDataArray(() => data.products));
  }, []);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentTableData = dataArray?.slice(firstPageIndex, lastPageIndex);

  const productData = currentTableData?.map((product: any, index: number) => (
    <Card
      className={"card card" + product.id}
      key={`${product.id}-${index}-${currentPage}`}
      cardData={product}
    />
  ));

  return (
    <div className="App">
      <div className="pagination-centering">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={dataArray?.length}
          pageSize={PageSize}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </div>

      <div>{productData}</div>
      <div className="pagination-centering">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={dataArray?.length}
          pageSize={PageSize}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default App;
