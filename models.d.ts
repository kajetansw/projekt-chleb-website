export interface Recipe {
  uid: string;
  title: string;
  ingredients: string[];
  instruction: string;
  timeOfPreparationInMins: number;
  likes: number;
  imageSrc: string;
  tags: string[];
  inputDate: string;
}

export interface User {
  uid: string;
  email: string | null;
  name: string | null;
  provider: string | undefined;
  photoURL: string | null;
  admin: boolean;
}
