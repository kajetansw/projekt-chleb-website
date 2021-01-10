import { Flex, SpaceProps, Text } from '@chakra-ui/react';

const IconBadge = ({
  children,
  iconSize,
  IconComponent,
  iconColor,
  fontSize,
  color,
  ...spaceProps
}: SpaceProps & {
  children: React.ReactNode;
  iconSize: number;
  IconComponent: (props: { color: string; height: number; width: number }) => JSX.Element;
  iconColor: string;
  fontSize: number;
  color: string;
}) => (
  <Flex {...spaceProps} display="inline-block" color={color}>
    <IconComponent color={iconColor} height={iconSize} width={iconSize}></IconComponent>
    <Text fontSize={fontSize} display="inline-block" pl={2}>
      {children}
    </Text>
  </Flex>
);

export default IconBadge;
