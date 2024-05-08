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

<style scoped>
.content.dashboard {
  background-color: #f2f2f2;
  position: relative;
  min-height: 90vh;
  padding-bottom: 5%;
}

</style>
  