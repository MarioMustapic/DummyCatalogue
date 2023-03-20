import "./DetailsPage.styles.scss";

export const DetailsPage = (props: any): JSX.Element => {
  const productInfo = props.detailsData;

  const handleGoBack = (e: any) => {
    e.preventDefault();
    props.setShowDetails(false);
  };

  return (
    <div className="details-page">
      <div className={props.className}>
        <h2> {productInfo.cardData.title}</h2>

        <img
          className="main-img"
          src={productInfo.cardData.images[0]}
          alt={productInfo.cardData.title}
        />

        <h3 className="description ">{productInfo.cardData.description}</h3>
        <p className="details">Brand: {productInfo.cardData.brand}</p>
        <p className="details">Category: {productInfo.cardData.category}</p>
        <p className="details">Price: {productInfo.cardData.price} €</p>
        <p className="details">Rating: {productInfo.cardData.rating}</p>
        <p className="details">Stock: {productInfo.cardData.stock}</p>
        <button onClick={handleGoBack}>GO BACK</button>
      </div>
    </div>
  );
};
