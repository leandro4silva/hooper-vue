<template>
    <div class="content">
      <img src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
      <hooper :settings="hooperSettings">
        <slide v-for="item, key in data" :key="key">
          <img style="width: 100%" src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="">
        </slide>
      </hooper>
    </div>
</template>

<script src="./script.js"></script>
<style src="./styles.css"></style>