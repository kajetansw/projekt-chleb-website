import { Flex, SpaceProps, OtherProps, Text } from '@chakra-ui/react';

const IconBadge = ({
  children,
  iconSize,
  IconComponent,
  iconColor,
  fontSize,
  color,
  onClick,
  ...styleProps
}: SpaceProps &
  OtherProps & {
    children: React.ReactNode;
    iconSize: number;
    IconComponent: (props: {
      color: string;
      height: number;
      width: number;
      onClick?: () => void;
    }) => JSX.Element;
    iconColor: string;
    fontSize: number;
    color: string;
    onClick?: () => void;
  }) => (
  <Flex {...styleProps} display="inline-block" color={color} onClick={onClick}>
    <IconComponent color={iconColor} height={iconSize} width={iconSize}></IconComponent>
    <Text fontSize={fontSize} display="inline-block" pl={2}>
      {children}
    </Text>
  </Flex>
);

export default IconBadge;
