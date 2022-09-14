<template>
  <div class="dashboard" :class="nightMode? 'dashboard-night':''">
    <div class="overlay" @click="togglePopup(false)" v-show="showPopup"></div>
    <PopupTokens1 v-show="showPopup"/>
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
  import { mapMutations } from 'vuex';
import Navbar from "../components/Navbar.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import MainComp from "@/components/MainComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import PopupTokens1 from '@/components/popupTokens.vue';  

export default {
  name: "DashboardView",
  computed: {
    nightMode(){ return this.$store.state.nightMode; },
    showPopup(){ return this.$store.state.showPopup; } 
  },
  methods:{
      ...mapMutations([
          'togglePopup',
      ]),
  },
  components: { Navbar, HeaderComp, MainComp, FooterComp, PopupTokens1 }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
.dashboard{
position: relative;
z-index: 999;
}
.dashboard-night{
background: rgb(7, 14, 12);
backdrop-filter: blur(20px);
}
*,*::after,*::before{
padding: 0;
margin: 0;
box-sizing: border-box;
}
html{
font-family: 'Poppins', sans-serif;
background: #f3f3f3;
}
a{
text-decoration: none;
}
.row{
width: 100%;
max-width: 1600px;
margin-left: 50%;
transform: translateX(-50%);
padding: 0 24px;
@media only screen and (max-width:580px){
  padding: 0 10px;
}
}
.overlay{
background-color: rgba(0, 0, 0, 0.7);
backdrop-filter: blur(20px);
width: 100%;
min-height: 120vh;
position: fixed;
top: 0;
left: 0;
z-index: 1;
}
</style>