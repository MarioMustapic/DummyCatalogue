import { useState, useEffect } from "react";
import "./App.css";
import { ListPage } from "./pages/ListPage/ListPage.component";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage.component";

function App() {
  const [dataArray, setDataArray] = useState<object[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsData, setDetailsData] = useState({});
  const [focusOnCard, setFocusOnCard] = useState({ page: 1, id: 1 });

  useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=0")
      .then((res) => res.json())
      .then((data) => setDataArray(() => data.products));
  }, []);

  return (
    <div className="App">
      {showDetails ? (
        <DetailsPage
          detailsData={detailsData}
          setShowDetails={setShowDetails}
        />
      ) : (
        <ListPage
          dataArray={dataArray}
          focusOnCard={focusOnCard}
          setShowDetails={setShowDetails}
          setFocusOnCard={setFocusOnCard}
          setDetailsData={setDetailsData}
        />
      )}
    </div>
  );
}

export default App;
