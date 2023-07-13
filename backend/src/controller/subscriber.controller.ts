import { Request, Response} from 'express';
import { AppDataSource } from '../data-source';
import { Subscriber } from '../entity/subscriber.entity';
  
const subscriberControllerList = async ( req: Request, res: Response ) => {

  const id = Number(req.params.id);
  const options = id? { where: {
    categories: { id },
  }} : {}
  const subscriber = await AppDataSource.manager.find(Subscriber , options);
  
  const dataContent = {
    "success": true,
    "message": "Respuesta Exitosa",
    "data": subscriber
  }

  res.json(dataContent);
  
};

export { subscriberControllerList }
