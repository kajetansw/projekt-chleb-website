import { Heading } from '@chakra-ui/react';
import { HeadingProps } from '@chakra-ui/layout';

const TitleHeading = ({ children, ...headingProps }: HeadingProps) => (
  <Heading fontFamily="'Sorts Mill Goudy', serif" fontWeight="400" {...headingProps}>
    {children}
  </Heading>
);

export default TitleHeading;
