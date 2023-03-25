import "./ProductDetails.styles.scss";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  detailsData: {
    [index: string]: {
      [index: string]: string | string[];
      images: string[];
      title: string;
    };
  };

  setShowDetails: Function;
};

export const Details = (props: Props): JSX.Element => {
  const location = useLocation();
  const productInfo = location.state.cardData;
  const productImages = location.state.cardData.images;
  const [mainImg, setMainImg] = useState(productInfo.images[0]);

  const makeItMainImg = (img: string) => {
    setMainImg(img);
  };
  const smallImg: JSX.Element[] = productImages.map(
    (img: string, index: number) => (
      <img
        className="small-img details"
        key={index}
        src={img}
        alt={`${productInfo.title} image ${index}`}
        onClick={() => makeItMainImg(img)}
      />
    )
  );

  return (
    <div className="details">
      <h2 className="details h2"> {productInfo.title}</h2>

      <div className="img details">
        <img
          className="main-img details"
          src={mainImg}
          alt={productInfo.title}
        />
        <div> {smallImg}</div>
      </div>

      <h3 className="description details">{productInfo.description}</h3>

      <p className="details text">Brand: {productInfo.brand}</p>
      <p className="details text">Category: {productInfo.category}</p>
      <p className="details text">Price: {productInfo.price} €</p>
      <p className="details text">Rating: {productInfo.rating}</p>
      <p className="details text">Stock: {productInfo.stock}</p>

      <Link to="/products">
        <button className="button">GO BACK</button>
      </Link>
    </div>
  );
};
