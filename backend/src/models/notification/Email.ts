import Notification from "./INotification";

export default class Email extends Notification {
  constructor() {
    super()
    this.message = 'Email Message: ->'
  }
  sendMessage(mge:string): boolean {
    this.message += mge;
    return Math.random() >= 0.1;
  }
}