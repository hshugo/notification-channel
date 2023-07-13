import {Router, Request, Response} from 'express';
import { channelControllerList } from '../controller/channel.controller';
  
const router = Router();

//[1 (Sport), 2 (Finance), 3 (Movies)]
router.get('/list', async (req: Request, res: Response ) => {
  channelControllerList(req, res);
});

export default router;
