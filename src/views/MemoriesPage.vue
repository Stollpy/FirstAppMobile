<template>
  <base-layout pageTitle="All Memories" pageDefaultBackLink="/home">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
      <memories-list :memories="memories"></memories-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
import MemoriesList from "../components/memories/MemoriesList";

export default {
  name: "MemoriesPage",
  components: {
    MemoriesList,
    IonButton,
    IonIcon
  },
  data() {
    return {
      add
    }
  },
  computed: {
    memories(){
      return this.$store.getters.memories
    }
  }
}
</script>

<style scoped>

</style>