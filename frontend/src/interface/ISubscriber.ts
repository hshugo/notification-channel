export interface ISubscriberData {
  id: number;
  name: string;
  email: string;
  phone: number;
  subscriber: number[];
  channels: number[];
}

export interface ISubscriber {
  success: number;
  message: string;
  data: ISubscriberData[];
}