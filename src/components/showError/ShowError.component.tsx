import { FallbackProps } from "react-error-boundary";
import "./ShowError.styles.scss";

export const ShowError = (props: FallbackProps): JSX.Element => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{props.error.message}</pre>
    </div>
  );
};
