import React from "react";
import Loader from "../Loader";
import useLoader from "./hooks/useLoader";

const PageLoader = () => {
  const { loading } = useLoader();
  if (loading) {
    return <Loader />;
  }
  return null;
};

export default PageLoader;
