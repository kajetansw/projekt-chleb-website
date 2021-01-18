import { AddIcon } from '@chakra-ui/icons';
import { Button, HStack, Input, InputProps } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import EditableItemBadge from '@/components/EditableItemBadge';

type MultiInputProps = InputProps & {
  onItemsChange: (values: string[]) => void;
};

const MultiInput = ({ onItemsChange, ...inputProps }: MultiInputProps) => {
  const [items, setItems] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null!);

  const addItem = () => {
    setItems((currentItems) => [...currentItems, inputRef.current.value]);
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  const removeItem = (item: string) => {
    setItems((currentItems) => currentItems.filter((c) => c !== item));
  };
  const editItem = (item: string) => {
    setItems((currentItems) => currentItems.filter((c) => c !== item));
    inputRef.current.value = item;
    inputRef.current.focus();
  };

  useEffect(() => {
    onItemsChange(items);
  }, [items]);

  return (
    <>
      <HStack mb={2}>
        <Input ref={inputRef} {...inputProps} />
        <Button size="md" onClick={addItem}>
          <AddIcon />
        </Button>
      </HStack>
      {items.map((item, idx) => (
        <EditableItemBadge
          key={idx}
          onEdit={() => editItem(item)}
          onClose={() => removeItem(item)}
          m={1}
        >
          {item}
        </EditableItemBadge>
      ))}
    </>
  );
};

export default MultiInput;
