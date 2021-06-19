<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image</ion-label>
        <ion-input type="url" required v-model="enteredImageUrl" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" required v-model="enteredDescription" />
      </ion-item>
        <ion-button type="submit" expand="full">Save</ion-button>
    </ion-list>
  </form>
</template>

<script>
import {IonButton, IonInput, IonItem, IonLabel, IonList, IonTextarea} from "@ionic/vue";

export default {
  name: "CreateMemoryFormView",
  emits: ['save-memory'],
  components:{
    IonLabel,
    IonInput,
    IonList,
    IonItem,
    IonTextarea,
    IonButton
  },
  data() {
    return {
      enteredTitle: '',
      enteredImageUrl: '',
      enteredDescription: ''
    }
  },
  methods: {
    submitForm(){
      const memoryData = {
        title: this.enteredTitle,
        image: this.enteredImageUrl,
        description: this.enteredDescription
      };
      this.$emit('save-memory', memoryData);
    }
  }
}
</script>

<style scoped>

</style>