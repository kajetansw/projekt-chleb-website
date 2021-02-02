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
  HStack,
  Flex,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dropzone from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';

import { IngredientSection, Recipe, RecipeFormInput } from '@/models';
import { createRecipe } from '@/lib/db';
import MultiInput from '@/components/MultiInput';

type FormFieldValues = Omit<Recipe, 'uid' | 'likes' | 'inputDate' | 'imageSrc'>;

function toStringArray(values: (string | number)[]): string[] {
  return values.map((v) => `${v}`);
}

const AddRecipeModal = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, getValues, formState, reset } = useForm<FormFieldValues>();

  const [tags, setTags] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<IngredientSection[]>([]);
  const [imgFiles, setImgFiles] = useState<File[]>([]);
  const handleIngredientsChange = (idx: number) => (ingredientList: string[]) => {
    setIngredients((currentIngredients) => {
      const newIngredients = [...currentIngredients];
      newIngredients[idx] = {
        id: newIngredients[idx].id,
        title: newIngredients[idx].title,
        ingredients: ingredientList,
      };
      return newIngredients;
    });
  };
  const handleIngredientsSectionTitleChange = (idx: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value: title } = event.target;

    setIngredients((currentIngredients) => {
      const newIngredients = [...currentIngredients];
      newIngredients[idx] = {
        id: newIngredients[idx].id,
        title,
        ingredients: newIngredients[idx].ingredients,
      };
      return newIngredients;
    });
  };
  const handleAddIngredientsSection = () => {
    setIngredients((curr) => [...curr, { title: '', ingredients: [], id: uuidv4() }]);
  };
  const handleIngredientsSectionRemoval = (title: string) => () => {
    setIngredients((is) => is.filter((i) => i.title !== title));
  };

  const onSubmit = () => {
    const recipeToSave: RecipeFormInput = { ...getValues(), ingredientSections: ingredients, tags };
    createRecipe(recipeToSave, imgFiles[0]).then(() => {
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

  const onPendingFormClose = () => {
    const isFormTouched =
      Object.keys(formState.touched).some((k) => !!formState.touched[k]) || ingredients.length > 0;

    if (!isFormTouched || (isFormTouched && confirm('Czy na pewno chcesz porzucić zmiany?'))) {
      reset();
      onClose();
    }
  };

  const preventSubmitOnEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.keyCode === 13) e.preventDefault();
  };

  return (
    <>
      <Button mr={4} onClick={onOpen}>
        <AddIcon mr={3} /> Dodaj przepis
      </Button>

      <Modal isOpen={isOpen} onClose={onPendingFormClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dodaj przepis</ModalHeader>
          <ModalCloseButton />

          <form
            id="addRecipeForm"
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(e) => preventSubmitOnEnter(e)}
          >
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Tytuł</FormLabel>
                <Input ref={register} name="title" placeholder="Tytuł" />
              </FormControl>

              <FormControl mt={4}>
                <Flex justifyContent="space-between" align="center">
                  <FormLabel>Składniki</FormLabel>
                  <Button onClick={handleAddIngredientsSection}>
                    <AddIcon mr={3} /> Dodaj sekcję
                  </Button>
                </Flex>
                {ingredients.map((i, idx) => (
                  <Box key={i.id} border="1px solid #cfcfcf" px={4} py={3} mt={3} mb={6}>
                    <HStack my={3}>
                      <Input
                        onChange={handleIngredientsSectionTitleChange(idx)}
                        placeholder="Tytuł sekcji"
                      />
                      <Button onClick={handleIngredientsSectionRemoval(i.title)}>
                        <DeleteIcon />
                      </Button>
                    </HStack>
                    <MultiInput
                      onItemsChange={handleIngredientsChange(idx)}
                      name="ingredients"
                      placeholder="Składniki"
                    />
                  </Box>
                ))}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Instrukcja</FormLabel>
                <Textarea
                  ref={register}
                  name="instruction"
                  rows={10}
                  placeholder="Instrukcja"
                  onKeyDown={(e) => e.stopPropagation()}
                />
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
                <Dropzone onDrop={setImgFiles} maxFiles={1}>
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
                    <Checkbox value="Chleb na zakwasie">Chleb na zakwasie</Checkbox>
                    <Checkbox value="Chleb na drożdżach">Chleb na drożdżach</Checkbox>
                    <Checkbox value="Inny chleb">Inne chleby</Checkbox>
                    <Checkbox value="Bułka">Bułka</Checkbox>
                    <Checkbox value="Przekąska">Przekąska</Checkbox>
                    <Checkbox value="Deser">Deser</Checkbox>
                  </SimpleGrid>
                </CheckboxGroup>
              </FormControl>
            </ModalBody>
          </form>

          <ModalFooter>
            <Button onClick={onPendingFormClose} mr={3}>
              Cofnij
            </Button>
            <Button colorScheme="blue" type="submit" form="addRecipeForm">
              Zapisz
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddRecipeModal;
