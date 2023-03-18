import "./Card.styles.scss";
import LazyLoad from "react-lazy-load";
import { useState } from "react";

let list: boolean = true;

type Props = { [index: number | string]: number | string | any[] | any };

export const Card = (props: Props): JSX.Element => {
  const [details, setDetails] = useState(false);
  const productInfo = props.cardData;
  // console.log(productInfo.title);
  const handleClick = (e: any) => {
    e.preventDefault();
    setDetails(true);
  };
  const handleGoBack = (e: any) => {
    e.preventDefault();
    setDetails(false);
  };
  const styleList = {};
  const styleDetails = {};

  return (
    <div className={props.className}>
      <h2> {list && productInfo.title}</h2>

      <img
        src={productInfo.images[0]}
        alt={productInfo.title}
        onClick={handleClick}
      />

      <h3 onClick={handleClick} className="description ">
        {list && productInfo.description}{" "}
      </h3>
      <p className="details">{details && `Brand: ${productInfo.brand}`}</p>
      <p className="details">
        {details && `Category: ${productInfo.category}`}
      </p>
      <p className="details">{details && `Price: ${productInfo.price} €`}</p>
      <p className="details">{details && `Rating: ${productInfo.rating}`}</p>
      <p className="details">{details && `Stock: ${productInfo.stock}`}</p>
      <button onClick={handleGoBack}>{details && "GO BACK"}</button>
    </div>
  );
};
