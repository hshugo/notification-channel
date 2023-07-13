import {Router} from 'express';
import categoryRoute from "./category.route";
import channelRoute from "./channel.route";
import subscriberRoute from "./subscriber.route";
import logRoute from "./log.route";

const router = Router();
router.use("/category",categoryRoute);
router.use("/channel",channelRoute);
router.use("/subscriber",subscriberRoute);
router.use("/log",logRoute);

export default router;