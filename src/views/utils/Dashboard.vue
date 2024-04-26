<template>
    <div class="page">
        <div class="header">
            <Header></Header>
        </div>
      <div class="content dashboard">
        <router-view/>
      </div>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    components:{
        Footer,
        Header
    }
  }
  </script>
  