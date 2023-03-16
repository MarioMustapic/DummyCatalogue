import "./Card.styles.scss";
import LazyLoad from "react-lazy-load";

type Props = { [index: number | string]: number | string | any[] | any };

export const Card = (props: Props): JSX.Element => {
  const productInfo = props.cardData;
  console.log(productInfo.title);

  return (
    <div className={props.className}>
      <h2> {productInfo.title}</h2>
      <LazyLoad>
        <img src={productInfo.images[0]} alt={productInfo.title} />
      </LazyLoad>
      <p>{productInfo.description}</p>
    </div>
  );
};
