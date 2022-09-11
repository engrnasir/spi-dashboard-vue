<template>
  <div class="dashboard" :class="nightMode? 'dashboard-night':''">
    <!-- Navbar -->
    <Navbar/>
    <!-- Header -->
    <HeaderComp/>
    <!-- Main -->
    <MainComp/>
    <!-- Footer -->
    <FooterComp/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import MainComp from "@/components/MainComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import { mapState } from 'vuex';
export default {
    name: "DashboardView",
    computed:{
      ...mapState(['nightMode'])
    },
    components: { Navbar, HeaderComp, MainComp, FooterComp }
}
</script>
<style lang="scss" scoped>
  .dashboard-night{
    background: rgb(7, 14, 12);
    backdrop-filter: blur(20px);
  }
</style>