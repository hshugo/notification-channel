import Push from './Push'
import Email from './Email'
import SMS from './Sms'
import INotification from './INotification'

export default class NotificationFactory {
    static sendMessage(typenotification: number): INotification {
      switch(typenotification){
        case 1:
            return new SMS()
            break;
        case 2:
            return new Email()
            break;
        default:
            return new Push()
            break;
        }
    }
}
