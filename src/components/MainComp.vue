<template>
  <main class="main row" :class="nightMode? 'main-night':''">
    <div class="tokens">
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
        <div class="doughnut-container">
            <h3>Allocation</h3>
            <div class="popup">
                <div class="flex">
                    <img :src="require(`@/assets/${selectedToken.icon}`)" alt="" class="icon">
                    <h2>Uniswap</h2>
                </div>
                <h3>Allocation</h3>
                <div class="value">{{selectedToken.value}}%</div>
            </div>
            <DoughnutChart/>
        </div>
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
        .tokens{
            display: flex;
            align-items: flex-start;
            justify-content: space-around;

            table{
                width: 100%;
                margin-right: 247px;
                color: #383838;
                tr{
                    th{
                        font-weight: 600;
                        font-size: 24px;
                        margin-bottom: 30px;
                        &:first-child{
                            text-align: left;
                        }
                    }
                    .tokenIcon{
                            width: 55px;
                            margin-right: 20px;
                        }
                    .tokenTitle{
                        display: flex; 
                        align-items: center;
                        font-weight: 500;
                        font-size: 30.8223px;
                    }
                    .tokenValue{
                        text-align: center;
                        font-weight: 600;
                        font-size: 30.8223px;
                    }
                    .tokenChange{
                        font-weight: 600;
                        font-size: 30.8223px;
                        text-align: center;
                        color: #85C250;
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
                }
            }
            .doughnut-container{
                position:relative;
                h3{
                    text-align: right;
                    margin-bottom: 100px;
                    font-weight: 700;
                    font-size: 36px;
                    color: #85C250;
                }
                .popup{
                    position: absolute;
                    left: 100px;
                    top: 100px;
                    width: 334px;
                    padding: 25px 24px;
                    background: #FEFEFE;
                    border: 1px solid #85C250;
                    border-radius: 7px;

                    .flex{
                        display: flex;
                        align-items: center;
                        margin-bottom: 17px;
                        img{
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            margin-right: 18px;
                        }
                        h2{
                            font-weight: 600;
                            font-size: 28px;
                            color: #383838;
                        }
                    }
                    h3{
                        text-align: left;
                        font-weight: 600;
                        font-size: 16px;
                        color: #383838;
                        margin-bottom: 8px;
                    }
                    .value{
                        font-weight: 600;
                        font-size: 22px;
                        color: #676D7A;
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
            .doughnut-container{
                position:relative;
                h3{
                    text-align: right;
                    margin-bottom: 100px;
                    font-weight: 700;
                    font-size: 36px;
                    color: #85C250;
                }
                .popup{
                    background: #02140F;
                    .flex{
                        h2{
                            color: #ffffff;
                        }
                    }
                    h3{
                        color: #ffffff;
                    }
                    .value{
                        color: #ADADAD;
                    }
                }
            }
        }
    }

</style>