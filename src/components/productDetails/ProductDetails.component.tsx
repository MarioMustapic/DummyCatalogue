import "./ProductDetails.styles.scss";
import { useState } from "react";

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
  console.log(props.detailsData);

  const productInfo = props.detailsData;
  const productImages = props.detailsData.productData.images;
  const [mainImg, setMainImg] = useState(productInfo.productData.images[0]);

  const handleGoBack = (e: any) => {
    e.preventDefault();
    props.setShowDetails(false);
  };
  const makeItMainImg = (img: string) => {
    setMainImg(img);
  };
  const smallImg: JSX.Element[] = productImages.map(
    (img: string, index: number) => (
      <img
        className="small-img details"
        key={index}
        src={img}
        alt={`${productInfo.productData.title} image ${index}`}
        onClick={() => makeItMainImg(img)}
      />
    )
  );

  return (
    <div className="details">
      <h2 className="details h2"> {productInfo.productData.title}</h2>

      <div className="img details">
        <img
          className="main-img details"
          src={mainImg}
          alt={productInfo.productData.title}
        />
        <div> {smallImg}</div>
      </div>

      <h3 className="description details">
        {productInfo.productData.description}
      </h3>

      <p className="details text">Brand: {productInfo.productData.brand}</p>
      <p className="details text">
        Category: {productInfo.productData.category}
      </p>
      <p className="details text">Price: {productInfo.productData.price} €</p>
      <p className="details text">Rating: {productInfo.productData.rating}</p>
      <p className="details text">Stock: {productInfo.productData.stock}</p>

      <button onClick={handleGoBack}>GO BACK</button>
    </div>
  );
};
