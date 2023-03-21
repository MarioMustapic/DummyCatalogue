import "./ProductDetails.styles.scss";
import { useState } from "react";

export const Details = (props: any): JSX.Element => {
  const productInfo = props.detailsData;
  const [mainImg, setMainImg] = useState(productInfo.cardData.images[0]);

  const handleGoBack = (e: any) => {
    e.preventDefault();
    props.setShowDetails(false);
  };
  const makeItMainImg = (img: string) => {
    setMainImg(img);
  };
  const smallImg: JSX.Element = productInfo.cardData.images.map(
    (img: string, index: number) => (
      <img
        className="small-img details"
        key={index}
        src={img}
        alt={`${productInfo.cardData.title} image ${index}`}
        onClick={() => makeItMainImg(img)}
      />
    )
  );

  return (
    <div className="details">
      <h2 className="details h2"> {productInfo.cardData.title}</h2>

      <div className="img details">
        <img
          className="main-img details"
          src={mainImg}
          alt={productInfo.cardData.title}
        />
        <div> {smallImg}</div>
      </div>

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
