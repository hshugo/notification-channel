import Notification from "./INotification";

export default class Sms extends Notification {
  constructor() {
    super()
    this.message = 'SMS Message: -->'
    this.sent = false;
  }
  sendMessage(mge:string): void {
    this.message += mge;
    this.sent = Math.random() >= 0.1; 
  }

}