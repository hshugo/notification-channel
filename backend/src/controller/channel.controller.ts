import { Request, Response} from 'express';
import { AppDataSource } from '../data-source';
import { Channel } from '../entity/channel.entity';

const channelControllerList = async ( req: Request, res: Response) => {
  const channel_ = await AppDataSource.manager.find(Channel);
  const dataContent = {
    "success": true,
    "message": "Respuesta Exitosa",
    "data": [channel_]   
  }
  res.json(dataContent);

};

export { channelControllerList }
