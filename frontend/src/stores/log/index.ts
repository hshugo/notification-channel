import axios from 'axios';
import { defineStore } from 'pinia'
import FormData from '../../interface/IFormData';
import { LIST, SAVE } from './contants';

export const useLogStore = defineStore('logs', {
  state: () => ({
     logs: [] as string[],
  }),
  actions: {
    async fetchLogs() {
      try {
        const res = await axios.get(LIST);
        this.logs = res.data.data;
      } catch (err) {
        console.error(err);
      }
    },
    async addLog(payload: FormData) {
      try {
        const res = await axios.post(SAVE,
          {payload}
        );
        this.logs = res.data.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
  getters: {
    getLogs: (state) => state.logs,
  }
})