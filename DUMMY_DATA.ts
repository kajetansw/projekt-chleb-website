import { Recipe } from '@/models';

export const dummyIngredients: string[] = [
  'Test_ingredient_1',
  'Test_ingredient_2',
  'Test_ingredient_3',
];

export const dummyTags: string[] = ['Test_tag1', 'Test_tag2', 'Test_tag3'];

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
    tags: dummyTags,
  },
  {
    uid: '2',
    ingredients: dummyIngredients,
    imageSrc: '/bread2.jpg',
    instruction:
      'In hac habitasse platea dictumst. Nullam accumsan ante a lorem dapibus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec dapibus felis tempus orci cursus volutpat. Ut et ipsum dignissim, volutpat ipsum eget, interdum metus. Nulla tempor dui egestas tristique interdum. Integer rhoncus nunc vitae libero sodales elementum. Aliquam mattis blandit massa, vitae consectetur metus dictum a. Cras ornare ligula sed neque pharetra, sed dignissim erat ultricies. Quisque pellentesque urna ac pellentesque tristique. Mauris convallis iaculis libero a gravida. Etiam laoreet vitae lectus porta dignissim. Proin aliquam et tortor vel aliquet. Donec vel blandit neque. Fusce ac elit gravida, finibus nisi a, consequat nulla.\n\nMauris venenatis sagittis sodales. Praesent vulputate feugiat accumsan. Sed at tincidunt eros. Aenean id tempor mauris, non suscipit orci. Vivamus et tincidunt enim. Sed ut cursus purus. Nam quis lorem imperdiet, sodales lorem rutrum, pretium lacus. Phasellus sagittis feugiat purus, at tristique sapien porttitor eget. Etiam tincidunt augue eu molestie mollis. Praesent ut arcu magna. Praesent maximus, nibh ut finibus pellentesque, dui tortor condimentum elit, vulputate volutpat lectus ipsum accumsan orci. Maecenas nulla velit, auctor et mi eget, placerat lacinia sapien. Nulla a enim mollis, aliquam libero in, bibendum massa. Integer ut urna eu ex commodo consectetur. Duis dignissim, lacus tincidunt viverra mollis, enim justo dignissim enim, tempus tincidunt nibh libero id nibh.',
    likes: 20,
    timeOfPreparationInMins: 20,
    title: 'Ciastka czekoladowe z jagodami',
    tags: dummyTags,
  },
  {
    uid: '3',
    ingredients: dummyIngredients,
    imageSrc: '/bread3.jpg',
    instruction:
      'In scelerisque metus non ornare ullamcorper. Ut rutrum viverra tortor, vitae maximus quam consectetur in. Nulla a arcu vestibulum, ullamcorper nisl feugiat, sollicitudin odio. Maecenas pellentesque purus nisl, vitae cursus mi vestibulum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tempor leo, at vehicula elit faucibus ut. Morbi ut elementum purus. Sed quis aliquam dui. Sed fringilla neque non dolor pretium ornare.\n\nCurabitur varius, enim sodales gravida volutpat, felis est porta nisl, a mollis sem est mollis est. Sed hendrerit justo commodo neque ultrices, quis ullamcorper sapien vehicula. Aenean vitae ex vitae diam eleifend tincidunt. Donec metus tortor, facilisis ac ante non, vulputate condimentum nulla. Suspendisse ac consequat turpis. Sed viverra nulla velit, sit amet aliquam nisi venenatis nec. Pellentesque in leo a urna ultrices vehicula pulvinar et nisi. Phasellus non metus facilisis, malesuada ipsum eget, pretium ante. Nam nec lobortis eros, sed bibendum ipsum.\n\nDonec quis egestas sapien. Fusce justo eros, vestibulum in lacinia et, faucibus non nunc. Vivamus eu finibus turpis. Donec lacus tortor, fringilla eget arcu consectetur, tincidunt consectetur tellus. Vivamus scelerisque lorem nibh, vel lacinia ligula tincidunt quis. Sed vel elit ac sem accumsan aliquam. Praesent blandit molestie ligula, eget blandit mi sodales nec.',
    likes: 30,
    timeOfPreparationInMins: 30,
    title: 'Chleb żytni',
    tags: dummyTags,
  },
  {
    uid: '4',
    ingredients: dummyIngredients,
    imageSrc: '/bread1.jpg',
    instruction:
      'Curabitur nunc odio, rutrum sit amet ante nec, bibendum volutpat turpis. In vitae tincidunt purus, non finibus ipsum. Ut imperdiet dolor aliquet luctus tincidunt. Duis lobortis finibus nisi, et auctor leo tincidunt vulputate. Cras vitae bibendum justo. In id pretium leo, in vehicula mauris. Sed fringilla dolor non tellus finibus posuere. Integer nisl felis, accumsan eu porta vitae, molestie ac felis.\n\nDonec porta eleifend turpis, vel vestibulum leo condimentum sit amet. Vivamus imperdiet tempus mauris, at lobortis urna. Pellentesque eu aliquam ipsum. Aliquam erat volutpat. Donec faucibus at dui mattis vestibulum. In fringilla ante leo. Nam sit amet efficitur enim, vel maximus ipsum. Donec dictum sagittis tortor, id maximus quam dapibus nec. Morbi viverra rutrum nulla, a pharetra nibh condimentum vel. Sed a pellentesque dolor. Aliquam consectetur odio in faucibus interdum. Etiam dignissim suscipit cursus. Etiam facilisis dapibus sapien, nec tristique tellus cursus eu. Maecenas sed augue hendrerit, interdum urna sit amet, viverra nulla.',
    likes: 40,
    timeOfPreparationInMins: 40,
    title: 'Chleb pszenny XXL',
    tags: dummyTags,
  },
  {
    uid: '5',
    ingredients: dummyIngredients,
    imageSrc: '/bread2.jpg',
    instruction:
      'In hac habitasse platea dictumst. Nullam accumsan ante a lorem dapibus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec dapibus felis tempus orci cursus volutpat. Ut et ipsum dignissim, volutpat ipsum eget, interdum metus. Nulla tempor dui egestas tristique interdum. Integer rhoncus nunc vitae libero sodales elementum. Aliquam mattis blandit massa, vitae consectetur metus dictum a. Cras ornare ligula sed neque pharetra, sed dignissim erat ultricies. Quisque pellentesque urna ac pellentesque tristique. Mauris convallis iaculis libero a gravida. Etiam laoreet vitae lectus porta dignissim. Proin aliquam et tortor vel aliquet. Donec vel blandit neque. Fusce ac elit gravida, finibus nisi a, consequat nulla.\n\nMauris venenatis sagittis sodales. Praesent vulputate feugiat accumsan. Sed at tincidunt eros. Aenean id tempor mauris, non suscipit orci. Vivamus et tincidunt enim. Sed ut cursus purus. Nam quis lorem imperdiet, sodales lorem rutrum, pretium lacus. Phasellus sagittis feugiat purus, at tristique sapien porttitor eget. Etiam tincidunt augue eu molestie mollis. Praesent ut arcu magna. Praesent maximus, nibh ut finibus pellentesque, dui tortor condimentum elit, vulputate volutpat lectus ipsum accumsan orci. Maecenas nulla velit, auctor et mi eget, placerat lacinia sapien. Nulla a enim mollis, aliquam libero in, bibendum massa. Integer ut urna eu ex commodo consectetur. Duis dignissim, lacus tincidunt viverra mollis, enim justo dignissim enim, tempus tincidunt nibh libero id nibh.',
    likes: 50,
    timeOfPreparationInMins: 50,
    title: 'Ciasteczka XXL',
    tags: dummyTags,
  },
  {
    uid: '6',
    ingredients: dummyIngredients,
    imageSrc: '/bread3.jpg',
    instruction:
      'In scelerisque metus non ornare ullamcorper. Ut rutrum viverra tortor, vitae maximus quam consectetur in. Nulla a arcu vestibulum, ullamcorper nisl feugiat, sollicitudin odio. Maecenas pellentesque purus nisl, vitae cursus mi vestibulum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tempor leo, at vehicula elit faucibus ut. Morbi ut elementum purus. Sed quis aliquam dui. Sed fringilla neque non dolor pretium ornare.\n\nCurabitur varius, enim sodales gravida volutpat, felis est porta nisl, a mollis sem est mollis est. Sed hendrerit justo commodo neque ultrices, quis ullamcorper sapien vehicula. Aenean vitae ex vitae diam eleifend tincidunt. Donec metus tortor, facilisis ac ante non, vulputate condimentum nulla. Suspendisse ac consequat turpis. Sed viverra nulla velit, sit amet aliquam nisi venenatis nec. Pellentesque in leo a urna ultrices vehicula pulvinar et nisi. Phasellus non metus facilisis, malesuada ipsum eget, pretium ante. Nam nec lobortis eros, sed bibendum ipsum.\n\nDonec quis egestas sapien. Fusce justo eros, vestibulum in lacinia et, faucibus non nunc. Vivamus eu finibus turpis. Donec lacus tortor, fringilla eget arcu consectetur, tincidunt consectetur tellus. Vivamus scelerisque lorem nibh, vel lacinia ligula tincidunt quis. Sed vel elit ac sem accumsan aliquam. Praesent blandit molestie ligula, eget blandit mi sodales nec.',
    likes: 60,
    timeOfPreparationInMins: 60,
    title: 'Chleb żytni XXL',
    tags: dummyTags,
  },
];
