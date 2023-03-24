import { Details } from "../../components/productDetails/ProductDetails.component";
import "./DetailsPage.styles.scss";

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

export const DetailsPage = (props: Props): JSX.Element => {
  return (
    <div className="details-page">
      <Details
        detailsData={props.detailsData}
        setShowDetails={props.setShowDetails}
      />
    </div>
  );
};
