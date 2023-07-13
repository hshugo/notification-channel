import { Request, Response} from 'express';
import { AppDataSource } from '../data-source';
import { Category } from '../entity/category.entity';

const categoryControllerList = async ( req: Request, res: Response) => {
  //Only list categories active
  const category = await AppDataSource.manager.find(Category, { 
    where: [
        { "active" : true },
    ]});
  const dataContent = {
    "success": true,
    "message": "Respuesta Exitosa",
    "data": category
  }

  res.json(dataContent);
};

export { categoryControllerList }
