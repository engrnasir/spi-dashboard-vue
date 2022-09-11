<template>
  <main class="main row" :class="nightMode? 'main-night':''">
    <div class="tokens">
        <h3 class="allocation">Allocation <div class="h-line"></div></h3>
        <table cellspacing="30">
        <tr>
            <th>TOKEN</th> <th>VALUE PER TOKEN</th> <th>24HR CHANGE</th>
        </tr>
        <template v-if="showAll">
            <tr v-for="(token, index) in tokens" :key="index">
                <td class="tokenTitle">
                    <img :src="require(`@/assets/${token.icon}`)" alt="" class="tokenIcon">
                    {{token.title}}
                </td> 
                <td class="tokenValue">${{token.value}}</td> 
                <td class="tokenChange">+{{token.change24}}%</td> 
            </tr>
        </template>
        <template v-else>
            <tr v-for="(token, index) in tokens.slice(0,5)" :key="index">
                <td class="tokenTitle">
                    <img :src="require(`@/assets/${token.icon}`)" alt="" class="tokenIcon">
                    {{token.title}}
                </td> 
                <td class="tokenValue">${{token.value}}</td> 
                <td class="tokenChange">+{{token.change24}}%</td> 
            </tr>
        </template>
        <tr>
            <button class="showBtn" @click="showAll =! showAll" v-if="showAll">Show Less</button>
            <button class="showBtn" @click="showAll =! showAll" v-else>Show All</button>
        </tr>
        </table>
       
    </div>
    
  </main>
</template>

<script>
import { mapState } from 'vuex';
import DoughnutChart from './DoughnutChart.vue';
export default {
    data() {
        return {
            showAll: false,
            selectedToken: { icon: "stoken1.png", title: "Uniswap", value: 40.10},
            tokens: [
                { icon: "token1.png", title: "Bone shibaswap", value: "1.95", change24: "8.97" },
                { icon: "token2.png", title: "Uniswap", value: "$27.15", change24: "8.97" },
                { icon: "token3.png", title: "Wrapped ETH", value: "1566.67", change24: "8.97" },
                { icon: "token4.png", title: "1inch", value: "0.67", change24: "8.97" },
                { icon: "token5.png", title: "Wrapped BTC", value: "19878.81", change24: "8.97" },
                { icon: "token1.png", title: "Bone shibaswap", value: "1.95", change24: "8.97" },
            ]
        };
    },
    computed:{
        ...mapState([
            'nightMode'
        ])
    },
    components: { DoughnutChart }
}
</script>

<style lang="scss" scoped>
    .main{
        margin-bottom: 150px;
        @media only screen and (max-width:780px) {
            margin-bottom: 80px;
        }
        .tokens{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            .allocation{
                width: 100%;
                font-weight: 700;
                font-size: 36px;
                color: #85C250;
                display: flex;
                justify-content: center;
                align-items: center;
                @media only screen and (max-width:580px) {
                    font-weight: 500;
                }
                @media only screen and (max-width:480px) {
                    font-size: 22px;
                }
                .h-line{
                    width: 100%; 
                    margin-left: 10px;                   
                    border-bottom: 2px solid #85c25086;
                }
            }
            table{
                width: 70%;                
                align-self: flex-end;
                color: #383838;
                @media only screen and (max-width:980px) {
                   width: 90%;
                }
                @media only screen and (max-width:780px) {
                   width: 100%;
                   border-spacing: 10px;
                }
                @media only screen and (max-width:580px) {  
                   border-spacing: 5px;
                }
                tr{
                    th{
                        font-weight: 600;
                        font-size: 24px;
                        margin-bottom: 30px;
                        @media only screen and (max-width:780px) {
                            font-size: 20px;
                        }
                        @media only screen and (max-width:580px) {
                            font-size: 16px;
                        }
                        @media only screen and (max-width:480px) {
                            font-size: 12px;
                        }
                        &:first-child{
                            text-align: left;
                        }
                    }
                    .tokenIcon{
                            width: 55px;
                            margin-right: 20px;
                            @media only screen and (max-width:780px) {
                                width: 30px;
                                margin-right: 10px;
                            }
                        }
                    .tokenTitle{
                        display: flex; 
                        align-items: center;
                        font-weight: 500;
                        font-size: 24px;
                        @media only screen and (max-width:780px) {
                            font-size: 18px;
                        }
                        @media only screen and (max-width:580px) {
                            font-size: 14px;
                        }
                        @media only screen and (max-width:480px) {
                            font-size: 10px;
                        }
                    }
                    .tokenValue{
                        text-align: center;
                        font-weight: 600;
                        font-size: 24px;
                        @media only screen and (max-width:780px) {
                            font-size: 18px;
                        }
                        @media only screen and (max-width:580px) {
                            font-size: 14px;
                        }
                        @media only screen and (max-width:480px) {
                            font-size: 10px;
                        }
                    }
                    .tokenChange{
                        font-weight: 600;
                        font-size: 24px;
                        text-align: center;
                        color: #85C250;
                        @media only screen and (max-width:780px) {
                            font-size: 18px;
                        }
                        @media only screen and (max-width:580px) {
                            font-size: 14px;
                        }
                        @media only screen and (max-width:480px) {
                            font-size: 10px;
                        }
                    }

                }
                .showBtn{
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 36px;
                    text-decoration-line: underline;
                    color: #85C250;
                    background: transparent;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    @media only screen and (max-width:780px) {
                        font-size: 20px;
                    }
                    @media only screen and (max-width:580px) {
                        font-size: 14px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
    .main-night{
        .tokens{
            table{
                tr{
                    th{
                        color: #ADADAD;
                    }
                    .tokenTitle{
                        color: #fff;
                    }
                    .tokenValue{
                        color: #fff;
                    }
                }
                .showBtn{
                    color: #fff;
                }
            }            
        }
    }

</style>