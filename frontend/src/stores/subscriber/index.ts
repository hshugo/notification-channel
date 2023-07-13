import { defineStore } from 'pinia'
import axios from 'axios';
import { ISubscriberData, ISubscriber } from '../../interface/ISubscriber';
import { LIST } from './contants';

export const useSubscriberStore = defineStore('subscriber', {
  state: () => ({
    subscriber: [] as ISubscriberData[],
  }),
  actions: {
    async fetchSubscriber(idSubscribed?: number) {
      try {
        const list = idSubscribed ? LIST+"/"+idSubscribed : LIST;
        const res = await axios.get<ISubscriber>(list);
        this.subscriber = res.data.data;
        this.subscriber.unshift({id:0, name: "All", email: "", phone:0, subscriber:[],channels:[]});
      } catch (err) {
        console.error(err);
      }
    },
  },
  getters: {
    getSubscriber: (state) => state.subscriber,
  }
})







