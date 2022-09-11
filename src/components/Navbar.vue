<script>
    import {mapMutations, mapState} from 'vuex'
    export default {
        data(){
            return{
                darkMode:false,
            }
        },
        computed:{
            ...mapState([
                'nightMode'
            ])
        },
        methods:{
            ...mapMutations([
                'changeMode'
            ]),
            handleDarkMode(){
            this.darkMode = !this.darkMode;
            this.changeMode(this.darkMode)
            const dot = document.getElementById('toggleDot')
            if(this.darkMode === true){
                dot.style.left = '23px'
                dot.style.background= 'rgba(7, 14, 12, 0.85)';
            }else{
                dot.style.left = '3px'
                dot.style.background= '#fff';
            }
        }
    
        },
        mounted(){
            this.darkMode = this.nightMode
        }
    }
</script>

<template>
  <nav class="nav" :class="nightMode?'nav-night':''">
    <img src="@/assets/logo.png" alt="" class="logo">
    <ul class="buttons">
        <li><router-link to="" class="btn" :class="nightMode?'btn-night':''">Index</router-link></li>
        <li><router-link to="" class="btn" :class="nightMode?'btn-night':''">Vault</router-link></li>
        <li><router-link to="" class="btn" :class="nightMode?'btn-night':''">SWAP</router-link></li>
    </ul>
    <div class="right">
        <div class="toggleBtn" @click="handleDarkMode"><span id="toggleDot"></span></div>
        <button class="connect">Connect</button>
    </div>

  </nav>
</template>
<style lang="scss" scoped>
    .nav{
        width: 100%;
        background: linear-gradient(180deg, rgba(243, 243, 243, 0.132) 0%, rgba(243, 243, 243, 0.044) 100%);
        backdrop-filter: blur(20px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 24px;
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.01);
        @media only screen and (min-width:1600px){
            padding: 15px 100px;
        }
        @media only screen and (max-width:580px){
            padding: 15px 10px;
        }
        .logo{
            width: 100px;       
            @media only screen and (max-width:780px) {
                width: 70px;
            }     
            @media only screen and (max-width:580px) {
                width: 45px;
            } 
        }
        .buttons{
            display: flex;
            align-items: center;
            justify-content: center;
            list-style: none;
            &>*:not(:last-child){
                margin-right: 60px;
                @media only screen and (max-width:980px) {
                   margin-right: 20px;
                }
                @media only screen and (max-width:780px) {
                   margin-right: 10px;
                }
                @media only screen and (max-width:580px) {
                    margin-right: 0px;
                } 
            }
            .btn{
                font-weight: 500;
                font-size: 24px;
                padding: 10px 20px;
                border-radius: 7px;
                color: #676D7A;
                transition: all .25s;
                @media only screen and (max-width:780px) {
                    font-size: 20px;
                    padding: 6px 14px;
                } 
                @media only screen and (max-width:580px) {
                    font-size: 16px;
                    padding: 6px 10px;
                }
                @media only screen and (max-width:400px) {
                    font-size: 14px;
                    padding: 6px;
                }
                &:active,&:hover{
                    background: #85C250;
                    color: #FFFFFF;
                }
            }
            .btn-night{
                color: #ADADAD;
            }
            
        }
        .right{
            display: flex;
            align-items: center;
            justify-content: center;
            .toggleBtn{
                position: relative;
                width: 50px;
                height: 30px;
                background: #85C250;
                border-radius: 20px;
                transition: all .25s;
                cursor: pointer;
                margin-right: 146px;
                @media only screen and (max-width:980px) {
                   margin-right: 50px;
                }
                @media only screen and (max-width:780px) {
                    margin-right: 20px;
                } 
                @media only screen and (max-width:580px) {
                    transform: scale(.8);
                    margin-right: 10px;
                } 
                #toggleDot{
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    top: 3px;
                    left: 3px;
                    border-radius: 50%;
                    background-color: #fff;
                    transition: all .25s;
                }
            }
            .connect{
                padding: 15px 27px;
                background: #85C250;
                color: #fff;
                border-radius: 8px;
                font-weight: 700;
                font-size: 24px;
                border: none;
                outline: none;
                cursor: pointer;
                transition: all .25s;
                @media only screen and (max-width:780px) {
                    padding: 10px 20px;
                    font-weight: 700;
                    font-size: 20px;
                }
                @media only screen and (max-width:580px) {
                    padding: 5px 10px;
                    font-weight: 600;
                    font-size: 14px;
                } 
                @media only screen and (max-width:400px) {
                    padding: 5px 8px;
                    font-weight: 500;
                    font-size: 12px;
                }
                &:active,&:hover{
                    color: #85C250;
                    background:  #fff;
                    border: 2px solid #85C250;
                }
            }

        }
    }
    .nav-night{
        background: rgba(7, 14, 12, 0.85);
        backdrop-filter: blur(20px);
    }

</style>