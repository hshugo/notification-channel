<template>
  <div>
    <form class="notification-form" @submit.prevent="handleSubmit">
      <h3>Send Notification</h3>

      <label for="category"> * Category:</label>
      <select id="categorySelected" v-model="formData.categorySelected"  @change="storeSubs.fetchSubscriber(formData.categorySelected)">
        <option v-for="category in getCategory" 
          :key="category.id" 
          :value="category.id">{{ category.name }} </option>
      </select>
      <div v-if="!isValidCategory" class="error">Please, select a category!</div>

      <label for="subscribers">Subscribers:</label>
      <label>(Optional if you want send only one)</label>
      <select id="subscriberSelected" v-model="formData.subscriberSelected">
        <option v-for="subscriber in getSubscriber"
        :key="subscriber.id" 
        :value="subscriber.id">{{ subscriber.name }} </option>
      </select>
      <label for="Message">* Message:</label>      

      <textarea id="message" v-model="formData.message"></textarea>
      <div v-if="!isValidMessage" class="error">Please, add a message!</div>
      <input class="button" type="submit" value="Submit">
    </form>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { storeToRefs } from "pinia"
  import { useCategoryStore } from "../stores/category"
  import { useSubscriberStore } from "../stores/subscriber" 
  import IFormData from '../interface/IFormData'
  import { useLogStore } from '../stores/log';

    const props = defineProps({
      formData: {
        type: Object as () => IFormData,
        required: true
      }
    })
   
    //Get information from Stores
    const store = useCategoryStore();
    const { getCategory } = storeToRefs(store);
    const { fetchCategory } = store;

    const storeSubs = useSubscriberStore();
    const {getSubscriber} = storeToRefs(storeSubs);
    const{fetchSubscriber} = storeSubs;
    
    const storeLogs = useLogStore();
    const { addLog } = storeLogs;

    // Define reactive state for form data
    const formData = reactive(props.formData);
    
    // Validate fields
    let isValidCategory = ref(true);
    let isValidMessage = ref(true);

    // Submit form
    const handleSubmit = () => {
      // Validate fields
      isValidCategory.value = formData.categorySelected ? true: false;
      isValidMessage.value = formData.message.length > 0 ? true: false ;
      if (!isValidCategory.value || !isValidMessage.value ) return;
      addLog(formData);
      formData.categorySelected=0 
      formData.subscriberSelected=0
      formData.message = ''
      alert("Notification sent succesfully");
    };
    fetchCategory(),
    fetchSubscriber()
</script>