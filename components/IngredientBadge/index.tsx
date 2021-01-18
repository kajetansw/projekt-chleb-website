import { CloseIcon } from '@chakra-ui/icons';
import { SpaceProps, Text } from '@chakra-ui/react';

type IngredientBadgeProps = SpaceProps & {
  children: React.ReactNode;
  onClose: () => void;
};

const IngredientBadge = ({ children, onClose, ...spaceProps }: IngredientBadgeProps) => (
  <>
    <Text
      background="#EDF2F7"
      display="inline-block"
      px={2}
      py="0.1rem"
      fontWeight="700"
      fontSize={14}
      {...spaceProps}
    >
      {children} <CloseIcon h={2} cursor="pointer" onClick={onClose} />
    </Text>
  </>
);

export default IngredientBadge;
