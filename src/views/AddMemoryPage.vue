<template>
<base-layout pageTitle="Add a Memory" pageDefaultBackLink="/memories">
  <create-memory-form-view @save-memory="saveMemory"></create-memory-form-view>
</base-layout>
</template>

<script>
import CreateMemoryFormView from "../components/memories/CreateMemoryFormView";

export default {
  name: "AddMemoryPage",
  components: {
    CreateMemoryFormView
  },
  methods: {
    saveMemory(memoryData){
      this.$store.dispatch('addMemory', memoryData);
      this.$router.replace('/memories');
    }
  }
}
</script>

<style scoped>

</style>