import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Card } from "./components/card/Card.component";

function App() {
  interface allProductsDataInterface {
    [index: string]: number | string | object[];
  }

  const [allProductsData, setAllProductsData] =
    useState<allProductsDataInterface>();
  const [count, setCount] = useState(0);

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

  const productData = dataArray.map((product: any) => (
    <Card
      className={"card card" + product.id}
      key={product.id}
      cardData={product}
    />
  ));

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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
