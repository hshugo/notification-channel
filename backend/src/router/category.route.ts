import {Router, Request, Response} from 'express';
import {categoryControllerList} from '../controller/category.controller';

const router = Router();

//[1 (Sport), 2 (Finance), 3 (Movies)]
router.get('/list', async (req: Request, res: Response ) => {
  categoryControllerList(req, res);
});

export default router;
