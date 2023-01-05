<template id="app">
  <div class="content">
    <hooper :settings="hooperSettings2">
      <slide>
        <div class="images img1">
          <h2>Slider 1</h2>
        </div>
      </slide>
      <slide>          
        <div class="images img2">
          <h2>Slider 2</h2>
        </div> 
      </slide>
      <slide>          
        <div class="images img3">
          <h2>Slider 3</h2>
        </div>       
      </slide>
      <slide>  
        <div class="images img4">
          <h2>Slider 4</h2>
        </div> 
      </slide>
      <slide>     
        <div class="images img5">
          <h2>Slider 5</h2>
        </div>
      </slide>
    </hooper>
    <h1>Teste</h1>
    <hooper :settings="hooperSettings">
      <slide>
        <div class="images img1">
          <h2>Slider 1</h2>
        </div>
      </slide>
      <slide>          
        <div class="images img2">
          <h2>Slider 2</h2>
        </div> 
      </slide>
      <slide>          
        <div class="images img3">
          <h2>Slider 3</h2>
        </div>       
      </slide>
      <slide>  
        <div class="images img4">
          <h2>Slider 4</h2>
        </div> 
      </slide>
      <slide>     
        <div class="images img5">
          <h2>Slider 5</h2>
        </div>
      </slide>
    </hooper>
  </div>
</template>

<script>
import {Hooper, Slide} from 'hooper'
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide
  },
  data(){
    return {
      hooperSettings:{
        itemsToShow: 2,
        vertical: true
      },
      hooperSettings2:{
        itemsToShow: 2,
        vertical: false
      }
    }
  }
};
</script>

<style>
  .content{
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .hooper{
    width: 200px;
    border: 1px solid red;
    display: flex;
  }


</style>
