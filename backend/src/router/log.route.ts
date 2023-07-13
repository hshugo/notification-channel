import {Router, Request, Response} from 'express';
import { logControllerList, logControllerSave } from '../controller/log.controller';

const router = Router();
router.get('/list', async (req: Request, res: Response) => {
  logControllerList(req, res);
});

router.post('/save', async (req, res) => {
  logControllerSave(req, res);
});

export default router;
