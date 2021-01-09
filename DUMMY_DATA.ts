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
    instruction:
      'Curabitur nunc odio, rutrum sit amet ante nec, bibendum volutpat turpis. In vitae tincidunt purus, non finibus ipsum. Ut imperdiet dolor aliquet luctus tincidunt. Duis lobortis finibus nisi, et auctor leo tincidunt vulputate. Cras vitae bibendum justo. In id pretium leo, in vehicula mauris. Sed fringilla dolor non tellus finibus posuere. Integer nisl felis, accumsan eu porta vitae, molestie ac felis.\n\nDonec porta eleifend turpis, vel vestibulum leo condimentum sit amet. Vivamus imperdiet tempus mauris, at lobortis urna. Pellentesque eu aliquam ipsum. Aliquam erat volutpat. Donec faucibus at dui mattis vestibulum. In fringilla ante leo. Nam sit amet efficitur enim, vel maximus ipsum. Donec dictum sagittis tortor, id maximus quam dapibus nec. Morbi viverra rutrum nulla, a pharetra nibh condimentum vel. Sed a pellentesque dolor. Aliquam consectetur odio in faucibus interdum. Etiam dignissim suscipit cursus. Etiam facilisis dapibus sapien, nec tristique tellus cursus eu. Maecenas sed augue hendrerit, interdum urna sit amet, viverra nulla.',
    likes: 10,
    timeOfPreparationInMins: 10,
    title: 'Chleb pszenny',
  },
  {
    uid: '2',
    ingredients: dummyIngredients,
    imageSrc: '/bread2.jpg',
    instruction: 'Test_instruction2',
    likes: 20,
    timeOfPreparationInMins: 20,
    title: 'Ciasteczka',
  },
  {
    uid: '3',
    ingredients: dummyIngredients,
    imageSrc: '/bread3.jpg',
    instruction: 'lorem',
    likes: 30,
    timeOfPreparationInMins: 30,
    title: 'Chleb żytni',
  },
];
