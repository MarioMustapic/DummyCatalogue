import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  const focusProduct = useLocation()?.state?.focusOnCard;

  useEffect(() => {
    if (focusProduct?.id === props.productData.id) {
      focusCard.current?.focus();
    }
  }, []);

  return (
    <div className={props.className}>
      <Link
        to={`/products/${props.productData.id}`}
        state={{ page: { page: props.currentPage } }}
      >
        <h2> {props.productData?.title}</h2>
      </Link>

      <Link
        to={`/products/${props.productData.id}`}
        state={{ page: { page: props.currentPage } }}
      >
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
