export interface ICategoryData {
  id: number;
  name: string;
}

export interface ICategory {
  success: number;
  message: string;
  data: ICategoryData[] 
}