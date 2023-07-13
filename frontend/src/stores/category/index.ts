import { defineStore } from 'pinia'
import axios from 'axios';
import {ICategory, ICategoryData} from '../../interface/ICategory';
import { LIST } from './contants';

export const useCategoryStore = defineStore('category', {
  state: () => ({
     category: [] as ICategoryData[],    
  }),
  actions: {
    async fetchCategory() {
      try {
        const res = await axios.get<ICategory>(LIST);
        this.category = res.data.data;
        this.category.unshift({id:0, name: "--Select category--"});
      } catch (err) {
        console.error(err);
      }
    },
  },
  getters: {
    getCategory: (state) => state.category,
  }
})







