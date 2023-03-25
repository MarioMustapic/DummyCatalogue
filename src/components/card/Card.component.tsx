import { useRef, useEffect, SyntheticEvent, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Card.styles.scss";

type Props = {
  className: string;
  productData: any;
  currentPage: number;
  focusOnCard: { page: number; id: number };
  setShowDetails: Function;
  setDetailsData: Function;
  setFocusOnCard: Function;
};

export const Card = (props: Props): JSX.Element => {
  const focusCard = useRef<HTMLImageElement>(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (props.focusOnCard.id === props.productData.id) {
      focusCard.current?.focus();
    }
  }, []);

  return (
    <div className={props.className}>
      <Link to={"/products/:id"} state={{ cardData: props.productData }}>
        <h2> {props.productData?.title}</h2>
      </Link>

      <Link to={"/products/:id"} state={{ cardData: props.productData }}>
        <img
          tabIndex={0}
          ref={focusCard}
          className="main-img"
          src={props.productData?.images[0]}
          alt={props.productData?.title}
        />
      </Link>

      <h3 className="description ">{props.productData?.description}</h3>
    </div>
  );
};
