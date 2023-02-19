import { useLocation } from "react-router-dom";

const NoMatch = () => {
  const location = useLocation();

  return (
    <h2>
      No match for <code>{location.pathname}</code>
    </h2>
  );
};

export default NoMatch;
