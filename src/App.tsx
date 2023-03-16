import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/card/Card.component";

function App() {
  interface allProductsDataInterface {
    [index: string]: number | string | object[];
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

  console.log(allProductsData);

  const dataArray: any = allProductsData?.products;

  const productData = dataArray?.map((product: any) => (
    <Card
      className={"card card" + product.id}
      key={product.id}
      cardData={product}
    />
  ));

  return (
    <div className="App">
      <div>{productData}</div>
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
    </div>
  );
}

export default App;
