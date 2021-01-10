import { useBreakpointValue } from '@chakra-ui/react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

type ResponsiveImageProps = Omit<NextImageProps, 'width' | 'height'> & {
  width: Record<string, number> | number[];
  height: Record<string, number> | number[];
};

const ResponsiveImage = ({ width, height, ...nextImageProps }: ResponsiveImageProps) => {
  const breakpointWidth = useBreakpointValue(width) || 0;
  const breakpointHeight = useBreakpointValue(height) || 0;

  return <NextImage {...nextImageProps} width={breakpointWidth} height={breakpointHeight} />;
};

export default ResponsiveImage;
