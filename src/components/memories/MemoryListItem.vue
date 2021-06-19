<template>
  <ion-item :router-link="`/memories/${memory.id}`" :key="memory.id">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title" ></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ memory.title }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/vue';
export default {
  name: "MemoryListItem",
  props: {
    memory: Object
  },
  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel
  }
}
</script>

<style scoped>

</style>