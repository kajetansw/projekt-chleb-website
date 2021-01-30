import { useBreakpointValue } from '@chakra-ui/react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useEffect, useState } from 'react';

type ResponsiveImageProps = Omit<NextImageProps, 'width' | 'height'> & {
  width: Record<string, number | string> | number[];
  height: Record<string, number | string> | number[];
};

const cloudinaryImageLoader = ({ src, width }) => {
  return `https://res.cloudinary.com/kajetansw-cloud/image/upload/w_${width},c_scale/${src}`;
};

const ResponsiveImage = ({ width, height, ...nextImageProps }: ResponsiveImageProps) => {
  const breakpointWidth = useBreakpointValue(width) || 0;
  const breakpointHeight = useBreakpointValue(height) || 0;
  const [imageSrc, setImageSrc] = useState(nextImageProps.src);
  const { src, ...imagePropsWithoutSrc } = nextImageProps;
  const onImageError = () => setImageSrc('/no-image.png');

  useEffect(() => {
    setImageSrc(nextImageProps.src);
  }, [nextImageProps]);

  return (
    <NextImage
      {...imagePropsWithoutSrc}
      onError={onImageError}
      loader={cloudinaryImageLoader}
      src={imageSrc}
      width={breakpointWidth}
      height={breakpointHeight}
    />
  );
};

export default ResponsiveImage;
