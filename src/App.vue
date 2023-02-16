<template>
  <main>
    <div class="left">
      <button @click="handleVErticalClick">Vertical</button>
    </div>
    <div>
      <base-carousel v-show="productShow == true && showSlide" ref="carousel" :key="updateComponent" />
    </div>
  </main>
</template>

<script>

import BaseCarousel from './components/BaseCarousel/index.vue';

export default{
  components:{
    BaseCarousel
  },
  data(){
    return{
      productShow: false,
      updateComponent: 0,
      productShow: 'Slide'
    }
  },
  methods:{
    handleVErticalClick(){
      this.productShow = true;
    },
    forceRerender(){
      this.updateComponent += 1;
    },
  },
  computed:{
    showSlide: function(){
      if(this.productShow == true){
        this.forceRerender();
        return true;
      }
    }
  },
};
</script>

<style scoped>
  .left{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .border-red{
    border: 1px solid red;
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