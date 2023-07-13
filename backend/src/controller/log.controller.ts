import { Request, Response} from 'express';
import { AppDataSource } from '../data-source';
import NotificationFactory from '../models/notification/notificationFactory';
import {Log}  from "../entity/log.entity";
import { Channel } from '../entity/channel.entity';
import { Category } from '../entity/category.entity';
import { Subscriber } from '../entity/subscriber.entity';
import date from 'date-and-time';
import { IPayload } from '../interface/IPayload';


const logControllerList = async ( req: Request, res: Response) => {

  const log = await AppDataSource.manager.find(Log, { order: { created_at: "DESC" } })
  const data = log.map(item => item["description"]);
  const dataContent = {
    "success": true,
    "message": "Respuesta Exitosa",
    "data": data
  }
  res.json(dataContent);

};

//Send
const logControllerSend = async (username:string, idChannel:number, payload: IPayload, category: string|undefined ) => {

  //Get Channel
  const channel = await AppDataSource.manager.findOneBy(Channel,{id: idChannel});

  //Send mesage
  const notification = NotificationFactory.sendMessage(idChannel);
  notification.sendMessage(payload.message);

  //Log register 
  const registerLog:string = ( 
    getDateTime()
    + " - " + username 
    + " - " + category + "( id: "+ payload.categorySelected + ")"
    + " - " + channel?.name + "(id: " + idChannel + ")"
    + " - " + notification.message
    + " - Sent Successfully: " + notification.sent
  );

  return registerLog;
}

const getChannels = async (categoryID: number, subscriberID: number, options: Object ) => {
  if(subscriberID){
    //Only the channels of one user select in Front
    options = {
      relations: ["channels"],
      where: {
        id: subscriberID,
      }
    }
  
  }else{
  
    options = { 
      relations: ["categories", "channels"], 
      where: {
        categories: {
          id : categoryID
        }
      }
    } 
  }
  return await AppDataSource.manager.find(Subscriber, options);
}

const logControllerSave = async (req: Request, res: Response ) => {

  const payload = req.body.payload;
  const categoryID = Number(payload.categorySelected);
  const subscriberID = Number(payload.subscriberSelected);
  const category = await AppDataSource.manager.findOneBy(Category,{id: categoryID })
  
  //If the user is selected, get the channels, else get all users of category selected and then the channels by everyone
  let channelsSubscribeds: Subscriber[];
  let options: Object = {};

  
  channelsSubscribeds =  await getChannels(categoryID, subscriberID, options); 

  //Iterate for channels subscribed in every user
  channelsSubscribeds.map( user => {

    //Take for each Channel, send to the user and then save in log table
    user.channels.map(channel => {

      logControllerSend( user.name, channel.id, payload, category?.name ).then( description =>{
        const logRepository = AppDataSource.getRepository(Log);
        const log = {description};
        logRepository.insert(log);
      })

    })

  });

  const dataContent = {
    "success": true,
    "message": "Respuesta Exitosa",
    "data": []
  }
  res.send(dataContent);
};

const getDateTime = () => {
  // Creating object of current date and time 
  const now  =  new Date();
  // Formatting the date and time by using date.format() method
  const datenow = date.format(now,'YYYY/MM/DD HH:mm:ss');

  return datenow;
}

export { logControllerList, logControllerSave }