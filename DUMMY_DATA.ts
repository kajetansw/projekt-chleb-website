import { Recipe } from '@/models';

export const dummyIngredients: string[] = [
  'Test_ingredient_1',
  'Test_ingredient_2',
  'Test_ingredient_3',
];

export const dummyRecipes: Recipe[] = [
  {
    uid: '1',
    ingredients: dummyIngredients,
    imageSrc: '/bread1.jpg',
    instruction: 'Test_instruction1',
    likes: 10,
    timeOfPreparationInMins: 10,
    title: 'Chleb żytni',
  },
  {
    uid: '2',
    ingredients: dummyIngredients,
    imageSrc: '/bread1.jpg',
    instruction: 'Test_instruction2',
    likes: 20,
    timeOfPreparationInMins: 20,
    title: 'Test_title2',
  },
  {
    uid: '3',
    ingredients: dummyIngredients,
    imageSrc: '/bread1.jpg',
    instruction: 'Test_instruction3',
    likes: 30,
    timeOfPreparationInMins: 30,
    title: 'Test_title3',
  },
];
