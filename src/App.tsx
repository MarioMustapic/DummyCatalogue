import { useState, useEffect, useMemo } from "react";
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

  const [allProductsData, setAllProductsData] =
    useState<allProductsDataInterface>();

  useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=0")
      .then((res) => res.json())
      // .then(console.log);
      .then((data) =>
        setAllProductsData(() => ({
          ...data,
        }))
      );
  }, []);

  const dataArray: any = allProductsData?.products;

  console.log(allProductsData);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dataArray?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const productData = currentTableData?.map((product: any) => (
    <Card
      className={"card card" + product.id}
      key={product.id}
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
