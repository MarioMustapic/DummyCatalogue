import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage.component";
import { ListPage } from "./pages/ListPage/ListPage.component";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage.component";
import "./App.css";

type detailsData = {
  [index: string]: {
    [index: string]: string | string[];
    images: string[];
  };
};

function App() {
  const [dataArray, setDataArray] = useState<object[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsData, setDetailsData] = useState<any>();
  const [focusOnCard, setFocusOnCard] = useState({ page: 1, id: 1 });

  useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=0")
      .then((res) => res.json())
      .then((data) => setDataArray(() => data.products));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/products"
        element={
          <ListPage
            dataArray={dataArray}
            focusOnCard={focusOnCard}
            setShowDetails={setShowDetails}
            setFocusOnCard={setFocusOnCard}
            setDetailsData={setDetailsData}
          />
        }
      />
      <Route
        path="/products/:id"
        element={
          <DetailsPage
            detailsData={detailsData}
            setShowDetails={setShowDetails}
          />
        }
      />
      {/* <Route element={NotFoundPage} /> */}
    </Routes>
  );
}

export default App;
