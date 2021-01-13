import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

const AddRecipeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null!);

  return (
    <>
      <Button mr={4} onClick={onOpen}>
        <AddIcon mr={3} /> Dodaj przepis
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dodaj przepis</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Tytuł</FormLabel>
              <Input ref={initialRef} placeholder="Tytuł" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Składniki</FormLabel>
              <Input placeholder="Składniki" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Instrukcja</FormLabel>
              <Textarea rows={5} placeholder="Instrukcja" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Czas przygotowania (w min.)</FormLabel>
              <NumberInput step={5} defaultValue={15} min={0} max={1000}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>URL zdjęcia</FormLabel>
              <Input placeholder="URL zdjęcia" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Tagi</FormLabel>
              <CheckboxGroup>
                <SimpleGrid columns={3} spacingY={2}>
                  <Checkbox value="Chleb jasny">Chleb jasny</Checkbox>
                  <Checkbox value="Chleb ciemny">Chleb ciemny</Checkbox>
                  <Checkbox value="Deser">Deser</Checkbox>
                  <Checkbox value="Przekąska">Przekąska</Checkbox>
                </SimpleGrid>
              </CheckboxGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddRecipeModal;
