import "./ProductDetails.styles.scss";

export const Details = (props: any): JSX.Element => {
  const productInfo = props.detailsData;

  const handleGoBack = (e: any) => {
    e.preventDefault();
    props.setShowDetails(false);
  };

  return (
    <div className="details">
      <h2> {productInfo.cardData.title}</h2>

      <img
        className="main-img details"
        src={productInfo.cardData.images[0]}
        alt={productInfo.cardData.title}
      />

      <h3 className="description details">
        {productInfo.cardData.description}
      </h3>

      <p className="details text">Brand: {productInfo.cardData.brand}</p>
      <p className="details text">Category: {productInfo.cardData.category}</p>
      <p className="details text">Price: {productInfo.cardData.price} €</p>
      <p className="details text">Rating: {productInfo.cardData.rating}</p>
      <p className="details text">Stock: {productInfo.cardData.stock}</p>

      <button onClick={handleGoBack}>GO BACK</button>
    </div>
  );
};
