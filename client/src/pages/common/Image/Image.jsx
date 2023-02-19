import React from "react";

const Image = ({
  src,
  className,
  alt,
  srcSet,
  sizes = "(max-width: 600px) 480px, 800px",
}) => {
  return (
    <img
      srcSet={srcSet}
      sizes={sizes}
      src={src}
      className={className}
      alt={alt}
      loading="lazy"
    />
  );
};

export default Image;
