<template>
  <main>
    <div class="left">
      <button @click="handleVErticalClick">Vertical</button>
    </div>
    <div style="width: 100%">
      <base-carousel v-show="productShow" :key="updateComponent"/>
    </div>
  </main>
</template>

<script>

import BaseCarousel from './components/BaseCarousel/index.vue';

export default {
  components:{
    BaseCarousel
  },
  data(){
    return{
      productShow: false,
      updateComponent: 0
    }
  },
  methods:{
    handleVErticalClick(){
      this.productShow = true;
      this.forceRerender();
    },
    forceRerender(){
      this.updateComponent += 1;
    }
  }
};
</script>

<style scoped>
  .left{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right{
    display: flex;
    flex-direction: column;
  }

  main{
    display: grid;
    grid-template-columns: auto 50%;
    background: pink;
  }

</style>