import { Details } from "../../components/productDetails/ProductDetails.component";
import "./DetailsPage.styles.scss";

type Props = {
  dataArray: object[];
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
        dataArray={props.dataArray}
        setShowDetails={props.setShowDetails}
      />
    </div>
  );
};
