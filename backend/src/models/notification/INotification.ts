// Factory
interface INotification {
  message: string;
  sent: boolean;
  sendMessage(mge:string): void;
}

export default class Notification implements INotification {
  message:string = 'Not Defined--';
  sent:boolean = false;
  
  sendMessage(mge:string): void {
    this.message += mge;
    //(Suposition) The mayor of the cases is true, so the message was sent correctly
    this.sent = Math.random() >= 0.1; 
  }

}
