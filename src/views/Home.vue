<template>
 <base-layout pageTitle="Home">
    <ion-button router-link="/memories">All Memories</ion-button>
      <ion-list v-if="itemList">
          <ion-item :key="index" v-for="(item, index) in itemList"> {{ item.title }} </ion-item>
      </ion-list>
    <ion-spinner v-if="loading"></ion-spinner>
 </base-layout>
</template>
<script>
import { IonList, IonItem, IonSpinner, IonButton} from '@ionic/vue';

export default({
  name: 'Home',
  data: () => ({
    itemList: null,
    loading: false,
  }),
  components: {
    IonList,
    IonItem,
    IonSpinner,
    IonButton
  },
  async mounted(){
    this.loading = true;

    try{

      const test = await fetch('https://jsonplaceholder.typicode.com/posts');
      this.itemList = await test.json();
      this.loading = false;

    }catch (e) {
      console.log(e);
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>