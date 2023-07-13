<template>
  <div>
      <FormNotification :formData="formData"></FormNotification>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import FormNotification from '../components/FormNotification.vue';
  import IFormData from '../interface/IFormData';

  const formData = reactive<IFormData> ({
    categorySelected:0,
    subscriberSelected:0,
    message: ''
  })
</script>