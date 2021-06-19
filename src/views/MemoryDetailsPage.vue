<template>
<base-layout :pageTitle="loadedMemory ? loadedMemory.title : 'Loading ...' " pageDefaultBackLink="/memories">
  <h2 v-if="!loadedMemory">Could not find a memory for the given id!</h2>
  <memory-overview :memory="loadedMemory"></memory-overview>
</base-layout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoryOverview";
export default {
  name: "MemoryDetailsPage",
  components: {
    MemoryOverview
  },
  data(){
    return {
      memoryId: this.$route.params.id
    }
  },
  computed: {
    loadedMemory(){
      return this.$store.getters.memory(this.memoryId);
    }
  },
  watch: {
    '$route'(currentRoute){
      this.memoryId = currentRoute.params.id;
    }
  }
}
</script>

<style scoped>

</style>