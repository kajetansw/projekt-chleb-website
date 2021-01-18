import { CloseIcon, EditIcon } from '@chakra-ui/icons';
import { SpaceProps, Text } from '@chakra-ui/react';

type IngredientBadgeProps = SpaceProps & {
  children: React.ReactNode;
  onClose: () => void;
  onEdit: () => void;
};

const EditableItemBadge = ({ children, onClose, onEdit, ...spaceProps }: IngredientBadgeProps) => (
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
      {children}
      <EditIcon h={4} ml={3} mr={2} mb="3px" cursor="pointer" onClick={onEdit} />
      <CloseIcon h={3} mb="3px" cursor="pointer" onClick={onClose} />
    </Text>
  </>
);

export default EditableItemBadge;
