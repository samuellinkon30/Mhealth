<template>
    <v-layout class="footer">
        <v-footer class="d-flex flex-column"> 
        <div class="px-4 py-2 text-center w-100">
            <!-- <span>Transformando sonhos em realidade</span><br> -->
            @Copyright <strong>Mlovi Multi</strong> - {{ new Date().getFullYear() }}
        </div>
        </v-footer>
    </v-layout>
  </template>

  <script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style>
footer.v-footer.v-theme--light.d-flex.flex-column {
    padding: 0;
    margin: initial;
}
.v-layout.footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 0;
    margin: 0;
}
.v-layout.footer > footer {
    background-color: #33265d !important;
    color: white;
}
</style>