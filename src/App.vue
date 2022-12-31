<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <side-bar v-if="$route.path === '/' ? false : true"></side-bar>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <nav-bar v-if="$route.path === '/' ? false : true"></nav-bar>

        <router-view />
      </div>
      <!-- End of Main Content -->
      <footer-vue v-if="$route.path === '/' ? false : true"></footer-vue>
    </div>
    <!-- End of Content Wrapper -->
  </div>
</template>
<script>
import NavBar from "./Layout/NavBar.vue";
import SideBar from "./Layout/SideBar.vue";
import FooterVue from "./Layout/FooterVue.vue";
export default {
  name: "App",
  components: {
    SideBar,
    NavBar,
    FooterVue,
  },

  data(){
     return {
      // showSideBar: false,
      // showTopBar: false,
      // showFooter: false,
     }
  }, 
  methods: {
    // showSideAndTopBar(){
    //   if (localStorage.getItem('token')) {
    //     this.showSideBar = true;
    //     this.showTopBar = true;
    //     this.showFooter = true;
    //   }
    // }
  },

  // created(){
  //   // this.showSideAndTopBar();
  //   this.token;
  //   console.log('token', this.token);
  // },

  computed: {
    token: {
    get() {
      return localStorage.getItem('token')
    },
  }
  },

  watch: {
  '$route' (to, from) {
    console.log('token', this.token)
    console.log("good", to, from);
    this.token;
    // Update the UI when the route changes
  }
}

};
</script>

<style>
</style>
