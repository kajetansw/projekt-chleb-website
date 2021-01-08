export interface Ingredient {
  amount: string;
  name: string;
}

export interface Recipe {
  uid: string;
  title: string;
  ingredients: Ingredient[];
  instruction: string;
  timeOfPreparationInMins: number;
  likes: number;
  imageSrc: string;
}
