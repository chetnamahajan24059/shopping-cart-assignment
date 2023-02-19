import React, { lazy, Suspense } from "react";
import Loader from "../Loader";

const LazyLoader = (path) => {
  const AsyncComponent = lazy(path);

  return (props) => {
    return (
      <Suspense fallback={<Loader />}>
        <AsyncComponent {...props} />
      </Suspense>
    );
  };
};

export default LazyLoader;
