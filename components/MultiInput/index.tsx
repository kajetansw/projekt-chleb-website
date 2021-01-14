import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { Badge, Button, HStack, Input, InputProps } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

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
        <Badge m={1} cursor="pointer" key={idx} onClick={() => removeItem(item)}>
          {item} <CloseIcon h={2} />
        </Badge>
      ))}
    </>
  );
};

export default MultiInput;
