export interface Recipe {
  uid: string;
  title: string;
  ingredients: string[];
  instruction: string;
  timeOfPreparationInMins: number;
  likes: { userId: string }[];
  imageSrc: string;
  tags: string[];
  inputDate: string;
}

export type RecipeFormInput = Omit<Recipe, 'uid' | 'likes' | 'inputDate' | 'imageSrc'>;

export interface User {
  uid: string;
  email: string | null;
  name: string | null;
  provider: string | undefined;
  photoURL: string | null;
  admin: boolean;
  token: string;
}
