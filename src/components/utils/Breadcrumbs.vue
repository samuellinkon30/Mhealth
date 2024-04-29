<template>
    <div class="breadcrumbs">
      <ul>
        <li v-for="(item, index) in list" :key="item">{{ item }}
          <v-icon v-show="index !== list.length - 1">mdi-chevron-right</v-icon>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      list: Array
    }
  };
  </script>
  
  <style scoped>
  .breadcrumbs {
    padding: 10px 30px;
    background-color: #9287b7;
    color: white;
  }
  .breadcrumbs ul {
    display: flex;
    gap: 10px;
  }
  .breadcrumbs li {
    list-style: none;
    gap: 10px;
  }
  
  </style>
  