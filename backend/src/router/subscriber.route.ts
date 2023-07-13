import {Router, Request, Response} from 'express';
import {subscriberControllerList} from '../controller/subscriber.controller';

const router = Router();

router.get('/list/:id?', async (req: Request, res: Response ) => {
  subscriberControllerList(req, res);
});

export default router;
