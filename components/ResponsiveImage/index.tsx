import { useBreakpointValue } from '@chakra-ui/react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState } from 'react';

type ResponsiveImageProps = Omit<NextImageProps, 'width' | 'height'> & {
  width: Record<string, number | string> | number[];
  height: Record<string, number | string> | number[];
};

const ResponsiveImage = ({ width, height, ...nextImageProps }: ResponsiveImageProps) => {
  const breakpointWidth = useBreakpointValue(width) || 0;
  const breakpointHeight = useBreakpointValue(height) || 0;
  const [imageSrc, setImageSrc] = useState(nextImageProps.src);
  const { src, ...imagePropsWithoutSrc } = nextImageProps;
  const onImageError = () => setImageSrc('/no-image.png');

  return (
    <NextImage
      {...imagePropsWithoutSrc}
      onError={onImageError}
      src={imageSrc}
      width={breakpointWidth}
      height={breakpointHeight}
    />
  );
};

export default ResponsiveImage;
