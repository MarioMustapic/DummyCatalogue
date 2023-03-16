import "./Card.styles.scss";

type Props = { [index: number | string]: number | string | any[] | any };

export const Card = (props: Props): JSX.Element => {
  const productInfo = props.cardData;
  console.log(productInfo.title);

  return (
    <div className={props.className}>
      <p>
        {productInfo.title}
        {productInfo.description}
      </p>
    </div>
  );
};
