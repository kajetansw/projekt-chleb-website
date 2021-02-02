import { IngredientSection } from '@/models';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, FormLabel, HStack, Input } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import MultiInput from '@/components/MultiInput';

interface IngredientSectionsInputProps {
  ingredientsSections: IngredientSection[];
  onIngredientSectionsChange: (resolver: (is: IngredientSection[]) => IngredientSection[]) => void;
}

const IngredientSectionsInput = ({
  ingredientsSections,
  onIngredientSectionsChange,
}: IngredientSectionsInputProps) => {
  const handleAddIngredientsSection = () => {
    onIngredientSectionsChange((curr) => [...curr, { title: '', ingredients: [], id: uuidv4() }]);
  };
  const handleIngredientsSectionTitleChange = (idx: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value: title } = event.target;

    onIngredientSectionsChange((currentIngredients) => {
      const newIngredients = [...currentIngredients];
      newIngredients[idx] = {
        id: newIngredients[idx].id,
        title,
        ingredients: newIngredients[idx].ingredients,
      };
      return newIngredients;
    });
  };
  const handleIngredientsSectionRemoval = (title: string) => () => {
    onIngredientSectionsChange((is) => is.filter((i) => i.title !== title));
  };
  const handleIngredientsChange = (idx: number) => (ingredientList: string[]) => {
    onIngredientSectionsChange((currentIngredients) => {
      const newIngredients = [...currentIngredients];
      newIngredients[idx] = {
        id: newIngredients[idx].id,
        title: newIngredients[idx].title,
        ingredients: ingredientList,
      };
      return newIngredients;
    });
  };

  return (
    <>
      <Flex justifyContent="space-between" align="center">
        <FormLabel>Składniki</FormLabel>
        <Button onClick={handleAddIngredientsSection}>
          <AddIcon mr={3} /> Dodaj sekcję
        </Button>
      </Flex>
      {ingredientsSections.map((i, idx) => (
        <Box key={i.id} border="1px solid #cfcfcf" px={4} py={3} mt={3} mb={6}>
          <HStack my={3}>
            <Input onChange={handleIngredientsSectionTitleChange(idx)} placeholder="Tytuł sekcji" />
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
    </>
  );
};

export default IngredientSectionsInput;
