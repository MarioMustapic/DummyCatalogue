import "./Card.styles.scss";
import { useState } from "react";

let list: boolean = true;

type Props = { [index: number | string]: number | string | any[] | any };

export const Card = (props: Props): JSX.Element => {
  const [details, setDetails] = useState(false);
  const [cardDetailStyle, setCardDetailStyle] = useState<any>({
    position: "static",
  });
  const [productDescriptionStyle, setProductDescriptionStyle] = useState<any>({
    margin: "2em",
  });
  const [buttonVisibility, setButtonVisibility] = useState<any>({
    display: "none",
  });
  const productInfo = props.cardData;

  const handleClick = (e: any) => {
    e.preventDefault();
    setDetails(true);
    setCardDetailStyle({
      position: "fixed",
      bottom: 0,
      width: "100vw",
      height: "100vh",
      margin: 0,
    });
    setProductDescriptionStyle({
      textAlign: "left",
      margin: "1vh 15vw 2vh 10vw",
    });
    setButtonVisibility({
      display: "inline",
    });
  };
  const handleGoBack = (e: any) => {
    e.preventDefault();
    setDetails(false);
    setCardDetailStyle({ position: "static" });
    setProductDescriptionStyle({
      margin: "2em",
    });
    setButtonVisibility({
      display: "none",
    });
  };
  return (
    <div className={props.className} style={cardDetailStyle}>
      <h2> {list && productInfo.title}</h2>

      <img
        className="main-img"
        src={productInfo.images[0]}
        alt={productInfo.title}
        onClick={handleClick}
      />

      <h3
        onClick={handleClick}
        className="description "
        style={productDescriptionStyle}
      >
        {list && productInfo.description}{" "}
      </h3>
      <p className="details">{details && `Brand: ${productInfo.brand}`}</p>
      <p className="details">
        {details && `Category: ${productInfo.category}`}
      </p>
      <p className="details">{details && `Price: ${productInfo.price} €`}</p>
      <p className="details">{details && `Rating: ${productInfo.rating}`}</p>
      <p className="details">{details && `Stock: ${productInfo.stock}`}</p>
      <button onClick={handleGoBack} style={buttonVisibility}>
        {details && "GO BACK"}
      </button>
    </div>
  );
};
