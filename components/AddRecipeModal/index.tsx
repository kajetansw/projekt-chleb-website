import {
  Box,
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
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dropzone from 'react-dropzone';

import { Recipe } from '@/models';
import { createRecipe } from '@/lib/db';
import MultiInput from '@/components/MultiInput';

type FormFieldValues = Omit<Recipe, 'uid' | 'likes' | 'inputDate' | 'imageSrc'>;

function toStringArray(values: (string | number)[]): string[] {
  return values.map((v) => `${v}`);
}

const AddRecipeModal = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, getValues } = useForm<FormFieldValues>();

  const [tags, setTags] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [imgFiles, setImgFiles] = useState<File[]>([]);

  const onSubmit = () => {
    const recipeToSave = { ...getValues(), ingredients, tags };
    createRecipe(recipeToSave, imgFiles).then(() => {
      onClose();
      toast({
        position: 'top',
        title: 'Przepis zapisany.',
        description: 'Teraz możesz się nim podzielić z całym światem!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    });
  };

  return (
    <>
      <Button mr={4} onClick={onOpen}>
        <AddIcon mr={3} /> Dodaj przepis
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dodaj przepis</ModalHeader>
          <ModalCloseButton />

          <form id="addRecipeForm" onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Tytuł</FormLabel>
                <Input ref={register} name="title" placeholder="Tytuł" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Składniki</FormLabel>
                <MultiInput
                  onItemsChange={setIngredients}
                  name="ingredients"
                  placeholder="Składniki"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Instrukcja</FormLabel>
                <Textarea ref={register} name="instruction" rows={5} placeholder="Instrukcja" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Czas przygotowania (w min.)</FormLabel>
                <NumberInput
                  name="timeOfPreparationInMins"
                  step={5}
                  defaultValue={15}
                  min={0}
                  max={1000}
                >
                  <NumberInputField ref={register} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>URL zdjęcia</FormLabel>
                <Dropzone onDrop={setImgFiles}>
                  {({ getRootProps, getInputProps, acceptedFiles }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <Box border="2px dashed #CBD5E0" py={3} px={4}>
                        {acceptedFiles.length ? (
                          acceptedFiles.map((f) => f.name).join(',')
                        ) : (
                          <Text color="gray.500">
                            Przeciągnij tu plik ze zdjęciem lub kliknij by wybrać.
                          </Text>
                        )}
                      </Box>
                    </div>
                  )}
                </Dropzone>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Tagi</FormLabel>
                <CheckboxGroup onChange={(v) => setTags(toStringArray(v))}>
                  <SimpleGrid columns={3} spacingY={2}>
                    <Checkbox value="Chleb jasny">Chleb jasny</Checkbox>
                    <Checkbox value="Chleb ciemny">Chleb ciemny</Checkbox>
                    <Checkbox value="Deser">Deser</Checkbox>
                    <Checkbox value="Przekąska">Przekąska</Checkbox>
                  </SimpleGrid>
                </CheckboxGroup>
              </FormControl>
            </ModalBody>
          </form>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit" form="addRecipeForm">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddRecipeModal;
