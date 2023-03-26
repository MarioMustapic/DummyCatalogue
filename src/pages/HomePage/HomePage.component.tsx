import { Link } from "react-router-dom";

type Props = {};

export const HomePage = (props: Props): JSX.Element => {
  return (
    <div className="homepage-container">
      <Link to="/products">
        <h1 className="homepage">VISIT OUR PRODUCTS PAGE</h1>
      </Link>
    </div>
  );
};
