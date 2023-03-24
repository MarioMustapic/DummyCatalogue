import { Link } from "react-router-dom";
// import "./HomePage.styles.scss";

type Props = {};

export const HomePage = (props: Props): JSX.Element => {
  return (
    <div>
      <Link to="/products">
        <h1 className="homepage">VISIT OUR PRODUCTS PAGE</h1>
      </Link>
    </div>
  );
};
