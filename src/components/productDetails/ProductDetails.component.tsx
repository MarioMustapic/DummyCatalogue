import "./ProductDetails.styles.scss";
import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

type Props = {
  dataArray: any;
};

type ProductInfo = {
  productInfo: {
    [index: string]: {
      [index: string]: string | string[];
      images: string[];
      title: string;
    };
  };
};

export const Details = (props: Props): JSX.Element => {
  const [mainImgArrayIndex, setMainImgArrayIndex] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const idString = useParams();
  let id = Number(idString.id);

  let page = useLocation()?.state?.page?.page;

  const [arrayIndex, setArrayIndex] = useState(id - 1);
  const productInfo: any = props.dataArray?.[arrayIndex];
  const productImages = productInfo?.images;

  const slideshow = (mainImgArrayIndex: number) => {
    console.log(productInfo?.images.length, mainImgArrayIndex);
    if (mainImgArrayIndex > productInfo?.images.length - 1)
      mainImgArrayIndex = 0;
    if (mainImgArrayIndex < 0)
      mainImgArrayIndex = productInfo?.images.length - 1;
    setMainImgArrayIndex(mainImgArrayIndex);
  };

  const onNext = () => {
    slideshow(mainImgArrayIndex + 1);
  };
  const onPrevious = () => {
    slideshow(mainImgArrayIndex - 1);
  };

  const smallImg: JSX.Element[] = productImages?.map(
    (img: string, index: number) => (
      <img
        className="small-img details"
        key={index}
        src={img}
        alt={`${productInfo?.title} image ${index}`}
      />
    )
  );

  return (
    <div className="details">
      <h2 className="details h2"> {productInfo?.title}</h2>

      <div className="img details">
        <div className="slideshow-container">
          <div className="img arrow previous" onClick={onPrevious}>
            ❮
          </div>
          <img
            className="main-img details"
            src={productInfo?.images[mainImgArrayIndex]}
            alt={productInfo?.title}
          />
          <div className="img arrow next" onClick={onNext}>
            ❯
          </div>
        </div>

        <div> {smallImg}</div>
      </div>

      <h3 className="description details">{productInfo?.description}</h3>

      <p className="details text">Brand: {productInfo?.brand}</p>
      <p className="details text">Category: {productInfo?.category}</p>
      <p className="details text">Price: {productInfo?.price} €</p>
      <p className="details text">Rating: {productInfo?.rating}</p>
      <p className="details text">Stock: {productInfo?.stock}</p>

      <Link
        to="/products"
        state={{ focusOnCard: { page: page, id: arrayIndex + 1 } }}
      >
        <button className="button" tabIndex={0}>
          GO BACK
        </button>
      </Link>
    </div>
  );
};
