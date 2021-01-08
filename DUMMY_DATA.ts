import { Recipe, Ingredient } from '@/models';

export const dummyIngredients: Ingredient[] = [
  {
    name: 'Test_ingredient1',
    amount: '1g',
  },
  {
    name: 'Test_ingredient_2',
    amount: '1g',
  },
  {
    name: 'Test_ingredient_3',
    amount: '1g',
  },
];

export const dummyRecipes: Recipe[] = [
  {
    uid: '1',
    ingredients: dummyIngredients,
    imageSrc: '/',
    instruction: 'Test_instruction1',
    likes: 100,
    timeOfPreparationInMins: 30,
    title: 'Test_title1',
  },
  {
    uid: '2',
    ingredients: dummyIngredients,
    imageSrc: '/',
    instruction: 'Test_instruction2',
    likes: 100,
    timeOfPreparationInMins: 30,
    title: 'Test_title2',
  },
  {
    uid: '3',
    ingredients: dummyIngredients,
    imageSrc: '/',
    instruction: 'Test_instruction3',
    likes: 100,
    timeOfPreparationInMins: 30,
    title: 'Test_title3',
  },
];
