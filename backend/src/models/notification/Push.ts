import Notification from "./INotification";

export default class Push extends Notification {
  constructor() {
    super()
    this.message = 'Push Message: -->';
    this.sent = false;
  }
  sendMessage(mge:string): void {
    this.message += mge;
    this.sent = Math.random() >= 0.1; 
  }
}