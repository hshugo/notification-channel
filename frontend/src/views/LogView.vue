<template>
    <div class="content">
        <h3>Log History</h3> 
        <div><h6 v-for="log in getLogs">{{ log }}</h6></div>
    </div>
</template>
<script setup lang="ts">
  import { useLogStore } from "../stores/log";
  import { storeToRefs } from "pinia";

  //Get information from Store
  const store = useLogStore();
  const { getLogs } = storeToRefs(store);
  const { fetchLogs } = store;
  
  fetchLogs()
  
</script>