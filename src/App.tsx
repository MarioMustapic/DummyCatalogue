import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/card/Card.component";

function App() {
  interface allProductsDataInterface {
    [index: string]: number | string | object[];
    total: number;
  }

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

  const productData = dataArray?.map((product: any) => (
    <Card
      className={"card card" + product.id}
      key={product.id}
      cardData={product}
    />
  ));

  return (
    <div className="App">
      <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
      <div>{productData}</div>
    </div>
  );
}

export default App;
