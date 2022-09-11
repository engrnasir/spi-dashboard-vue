<template>
  <footer class="footer">
    <div class="row">
        <div class="columns">
            <div class="col1">
                <img src="@/assets/logo.png" alt="" class="logo">
            </div>
            <div class="col" :class="nightMode?'col-night':''">
                <h3 class="title">Quick Links</h3>
                <ul class="items">
                    <li class="item"><a href="#">Etherscan</a></li>
                    <li class="item"><a href="#">Dextools</a></li>
                    <li class="item"><a href="#">Buy $SAPA</a></li>
                    <li class="item"><a href="#">Investing in SAPA index</a></li>
                </ul>
            </div>
            <div class="col" :class="nightMode?'col-night':''">
                <h3 class="title">Sapanity</h3>
                <ul class="items">
                    <li class="item"><a href="#"><img src="@/assets/telegram.png" alt=""> Telegram chat</a></li>
                    <li class="item"><a href="#"><img src="@/assets/announce.png" alt=""> Announcements</a></li>
                    <li class="item"><a href="#"><img src="@/assets/twitter.png" alt=""> Twitter</a></li>
                </ul>
            </div>
            <div class="col" :class="nightMode?'col-night':''">
                <h3 class="title">Resources</h3>
                <ul class="items">
                    <li class="item"><a href="#">Github</a></li>
                    <li class="item"><a href="#">Governance</a></li>
                    <li class="item"><a href="#">Docs</a></li>
                    <li class="item"><a href="#">Medium</a></li>
                    <li class="item"><a href="#">FAQs</a></li>
                </ul>
            </div>
        </div>
        <div class="h-line"></div>
        <div class="copyright-text" :class="nightMode?'copyright-text-night':''">
            <p class="text">Copyright © 2022 Sapa Vault Index</p>
            <div class="right-links">
                <span>All Rights Reserved </span>|
                <a href=""> Terms and Conditions </a>|
                <a href=""> Privacy Policy</a>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['nightMode'])
    }

}
</script>

<style lang="scss" scoped>
    .footer{
        width: 100%;
        padding-bottom: 50px;
        background: linear-gradient(180deg, rgba(124, 197, 60, 0.15), rgba(252, 252, 252, 0) 100%);

        .columns{
            padding: 109px 24px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            @media only screen and (max-width:720px){
                display: grid;                
                grid-template-columns: repeat(1,1fr);
                grid-gap: 20px;
                padding:  60px 24px;
            }
            .col1{
                .logo{
                    height: 130px;
                }
            }
            .col{
                .title{
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 22px;
                    color: #383838;
                    margin-bottom: 40px;
                    @media only screen and (max-width:720px){
                        margin-bottom: 20px;
                    }
                    @media only screen and (max-width: 580px){
                        font-size: 18px;
                        line-height: 20px;
                    }
                }
                .items{
                    list-style: none;
                    .item a{
                        text-decoration: none;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 20px;
                        color: #676D7A;
                        transition: all .2s;
                        display: flex;
                        align-items: center;
                        img{
                            width: 24px;
                            margin-right: 6px;
                        }
                        @media only screen and (max-width: 580px){
                            font-size: 15px;
                            line-height: 15px;
                        }
                        &:hover{                            
                            font-size: 20px;
                        }
                    }
                    .item{
                        margin-bottom: 18px;
                        @media only screen and (max-width: 580px){
                            margin-bottom: 10px;
                        }
                    }
                }
            }
            .col-night{
                .title{
                    color: #fff;
                }
                .items .item a{
                    color: #ADADAD;
                }
            }
        }
        .h-line{
            width: 100%;
            height: 0px;
            border: 1px solid #85C250;
            margin-bottom: 25px;
        }
        .copyright-text{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            color: #383838;
            @media only screen and (max-width:580px){
                font-size: 14px;
                line-height: 18px;
            }
            @media only screen and (max-width:920px){
                flex-direction: column;
                justify-content: center;
            }

            .right-links{
                @media only screen and (max-width:580px){
                    font-size: 12px;
                    line-height: 18px;
                }
                @media only screen and (max-width:380px){
                    font-size: 8px;
                }
                a{
                    text-decoration: underline;
                    color: #85C250;
                }
            }
        }
        .copyright-text-night{
            color: #ffffff;
        }
    }
</style>