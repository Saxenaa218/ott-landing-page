import React, { useState, HTMLProps } from "react";

interface ImageWrapperProps extends HTMLProps<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc: string;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  fallbackSrc,
  ...props
}) => {
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
  };

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      onError={handleImageError}
      {...props}
    />
  );
};

export default ImageWrapper;
