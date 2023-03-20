import { useRef, useEffect } from "react";
import "./Card.styles.scss";

type Props = { [index: number | string]: number | string | any[] | any };

export const Card = (props: Props): JSX.Element => {
  const focusCard = useRef<HTMLImageElement>(null);
  const handleClick = (e: any) => {
    e.preventDefault();
    props.setShowDetails(true);
    props.setDetailsData(() => ({
      ...props,
    }));
    props.setFocusOnCard({ page: props.currentPage, id: props.cardData.id });
  };

  useEffect(() => {
    if (props.focusOnCard.id === props.cardData.id) {
      focusCard.current?.focus();
      console.log(props);
    }
  }, []);

  return (
    <div className={props.className}>
      <h2 onClick={handleClick}> {props.cardData?.title}</h2>

      <img
        tabIndex={0}
        ref={focusCard}
        className="main-img"
        src={props.cardData?.images[0]}
        alt={props.cardData?.title}
        onClick={handleClick}
      />

      <h3 className="description ">{props.cardData?.description}</h3>
    </div>
  );
};
