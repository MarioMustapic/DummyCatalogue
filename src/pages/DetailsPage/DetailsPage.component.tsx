import { Details } from "../../components/productDetails/ProductDetails.component";
import "./DetailsPage.styles.scss";

export const DetailsPage = (props: any): JSX.Element => {
  return (
    <div className="details-page">
      <Details
        detailsData={props.detailsData}
        setShowDetails={props.setShowDetails}
      />
    </div>
  );
};
