export interface Recipe {
  uid: string;
  title: string;
  ingredients: string[];
  instruction: string;
  timeOfPreparationInMins: number;
  likes: number;
  imageSrc: string;
}
