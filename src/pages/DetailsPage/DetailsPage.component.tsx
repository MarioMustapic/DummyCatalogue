import { Details } from "../../components/productDetails/ProductDetails.component";
import "./DetailsPage.styles.scss";

type Props = {
  dataArray: object[];
};

export const DetailsPage = (props: Props): JSX.Element => {
  return (
    <div className="details-page">
      <Details dataArray={props.dataArray} />
    </div>
  );
};
