import "./Card.styles.scss";

type Props = { [index: number | string]: number | string | any[] | any };

export const Card = (props: Props): JSX.Element => {
  const handleClick = (e: any) => {
    e.preventDefault();
    props.setShowDetails(true);
    props.setDetailsData(() => ({
      ...props,
    }));
    console.log(e);
  };

  return (
    <div className={props.className}>
      <h2 onClick={handleClick}> {props.cardData?.title}</h2>

      <img
        className="main-img"
        src={props.cardData?.images[0]}
        alt={props.cardData?.title}
        onClick={handleClick}
      />

      <h3 className="description ">{props.cardData?.description}</h3>
    </div>
  );
};
