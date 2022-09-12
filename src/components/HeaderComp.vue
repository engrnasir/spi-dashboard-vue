<script>
import LineChart from "./LineChart.vue";
import { mapState } from "vuex";
import ConnecWallet from "./ConnecWallet.vue";
export default {
    data() {
        return {
            val1: 1.79,
            val2: "+$8.06 (+9.74%)",
            startingDate: new Date(),
            endingDate: new Date(),
            stats: [
                { title: "Market Cap", value: "$33.36M" },
                { title: "Volume (24hrs)", value: "$585.01K" },
                { title: "Current Supply", value: "372,144.2" },
                { title: "Streaming Fee", value: "0.95%" },
            ],
        };
    },
    computed:{
        ...mapState([
            'nightMode'
        ])
    },
    components: { LineChart, ConnecWallet }
}
</script>

<template>
  <header class="header" :class="nightMode? 'header-night':''">
    <img src="@/assets/hero.png" class="hero" alt="" v-if="!nightMode">
    <div class="wrapper row">
        <div class="content">
            <div class="left">
                <div class="heading" :class="nightMode? 'heading-night':''">
                    <img src="@/assets/logo.png" alt="">
                    <h1>spi</h1>
                    <p>(SAPA Index)</p>
                </div>
                <div class="date" :class="nightMode? 'date-night':''">
                    <div class="filter">
                        <p class="filter-item">1D</p>
                        <p class="filter-item">1W</p>
                        <p class="filter-item">1M</p>
                        <p class="filter-item">1Y</p>
                        <p class="filter-item">All</p>
                    </div>
                    <div class="range">
                        <div class="starting">
                            <input type="date" v-model="startingDate">
                        </div>
                        <span>to</span>
                        <div class="ending">
                            <input type="date" v-model="endingDate">
                        </div>
                    </div>
                </div>
    
            </div>
            <div class="right">
                <p class="firstval">${{val1}}</p>
                <p class="secondVal">{{val2}}</p>
            </div>
        </div>

        <div class="graph-container row">
            <div class="stats" :class="nightMode? 'stats-night':''">
                <h2>stats</h2>
                <ul class="items">
                    <li class="item" v-for="(stat,index) in stats" :key="index">
                        <p class="title">{{stat.title}}</p>
                        <p class="value">{{stat.value}}</p>
                    </li>
                </ul>
            </div>
            <div class="chart-container">
                <LineChart/>
            </div>
            <div class="wallet-container">
                <ConnecWallet/>
            </div>
         </div>


    </div>

  </header>
</template>
<style lang="scss" scoped>
    .header{
        width: 100%;
        position: relative;
        margin-bottom: 48px;
        .hero{
            width: 639px;
            position: absolute;
            right: 0;
            top: 0;
            opacity: .4;
            @media only screen and (max-width:960px) {
                width: 400px;
            }
        }
    }
   
    .wrapper{
        
        .content{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 80px 0;
            @media only screen and (max-width:1560px) {
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
            }
            .left{
                .heading{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin-bottom: 40px;
                    text-transform: uppercase;
                    img{
                        width: 48px;
                        margin-right: 15px;
                    }
                    h1{
                        font-weight: 600;
                        font-size: 48px;
                        margin-right: 22px;
                        @media only screen and (max-width:400px) {
                            font-size: 40px;
                        }
                    }
                    p{
                        font-weight: 500;
                        font-size: 28px;
                        @media only screen and (max-width:400px) {
                            font-size: 20px;
                        }
                    }
                }
                .heading-night{
                    color:#fff;
                }
                .date{
                    display: flex;
                    align-items: center;
                    @media only screen and (max-width:780px) {
                        align-items: flex-start;
                        flex-direction: column;
                    }  
                    .filter{
                        display: flex;;
                        align-items: center;
                        justify-content: center;
                        border-radius: 7px;
                        background: #D1E8BD;
                        margin-right: 28px;
                        @media only screen and (max-width:780px) {
                            margin-bottom: 30px;
                        }
                        .filter-item{
                            padding: 12px;
                            color: #383838;
                            border-radius: 7px;
                            transition: all .25s;
                            font-weight: 600;
                            font-size: 16px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                            &:active,&:hover{
                                background: #85C250;
                            }
                        }
                    }
                    .range{
                        display: flex;
                        align-items: center;
                        @media only screen and (max-width:580px) {
                            align-items: flex-start;
                            flex-direction: column;
                        }
                        input[type="date"]{
                            width: max-content;
                            min-width: 140px;
                            padding: 12px 15px;
                            background: #D1E8BD;
                            border-radius: 7px;
                            font-family: 'Poppins', sans-serif;
                            font-weight: 600;
                            font-size: 16px;
                            border: none;
                        }
                        input[type="date"]::-webkit-calendar-picker-indicator {
                            color: rgba(0, 0, 0, 0);
                            opacity: 1;
                            display: block;
                            background-image: url('@/assets/downward-arrow.png');
                            background-repeat: no-repeat;
                            width: 15px;
                            height: 15px;
                            border-width: thin;
                            cursor: pointer;
                        }
                        .starting {
                            margin-right: 20px;
                        }
                        span{
                            font-weight: 500;
                            font-size: 16px;
                            margin-right: 20px;
                            @media only screen and (max-width:580px) {
                                padding: 10px;
                            }
                        }
                        .ending{}
                    }
                }
                .date-night{
                    color: #676D7A;
                }
            }
            .right{
                text-align: right;
                margin-right: 20%;
                @media only screen and (max-width:1560px) {
                   margin-right: 0;
                   text-align: left;
                   display: flex;
                   align-items: center;
                   margin-top: 40px;
                }
                .firstval{
                    font-weight: 600;
                    font-size: 48px;
                    color: #85C250;
                    margin-bottom: 32px;
                    @media only screen and (max-width:1560px) {
                        margin-bottom: 0;
                        margin-right: 15px;
                    }
                    @media only screen and (max-width:580px) {
                        font-size: 36px;
                    }
                }
                .secondVal{
                    font-weight: 600;
                    font-size: 28px;
                    color: #D1E8BD;
                    @media only screen and (max-width:580px) {
                        font-size: 20px;
                    }
                }
            }
        }
        .graph-container{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding-bottom: 100px;
            border-bottom: 1px solid #85C250;
            @media only screen and (max-width:1560px) {
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

           
            .stats{
                @media only screen and (max-width:1560px) {
                    width: 100%;
                    margin-bottom: 30px;
                }
                h2{
                    text-align: center;
                    text-transform: capitalize;
                    width: 210px;
                    padding: 14px;
                    background: linear-gradient(180deg, #D1E8BD 0%, rgba(209, 232, 189, 0.25) 100%);
                    border-bottom: 1px solid #85C250;
                    border-radius: 7px 7px 0px 0px;
                    @media only screen and (max-width:1560px) {
                        width: 100%;
                        font-size: 30px;
                    }
                    @media only screen and (max-width:780px) {
                        font-weight: 500;
                    }
                }
                .items{
                    list-style: none;
                    width: 210px;
                    background: linear-gradient(180deg, #D1E8BD 0%, rgba(209, 232, 189, 0.25) 100%);
                    border-radius: 0px 0px 7px 7px;
                    padding-bottom: 36px;
                    @media only screen and (max-width:1560px) {
                        width: 100%;
                        display: flex;
                        justify-content: space-around;
                    }
                    @media only screen and (max-width:560px) {
                        display: grid;
                        grid-template-columns: repeat(2,1fr);
                        justify-items: center;
                    }
                    .item{
                        padding: 36px 16px;
                        padding-bottom: 0;
                        color: #85C250;
                        font-weight: 500;
                        @media only screen and (max-width:580px) {
                            padding: 20px;
                        }
                        .title{
                            font-size: 20px;
                            margin-bottom: 23px;
                            @media only screen and (max-width:780px) {
                                font-size: 16px;
                            }
                            @media only screen and (max-width:580px) {
                                margin-bottom: 10px;
                                width: max-content;
                            }
                        }
                        .value{
                            font-size: 36px;
                            @media only screen and (max-width:780px) {
                                font-size: 28px;
                            }
                            @media only screen and (max-width:580px) {
                                font-size: 22px;
                            }
                        }

                    }
                }
            }
            .stats-night{
                h2{
                    background: linear-gradient(96deg, rgba(209, 232, 189, 0.26) 1.72%, rgba(133, 194, 80, 0.26) 122.85%);
                    color: #fff;
                }
                .items{
                    background: linear-gradient(172.57deg, #51683D 2.9%, rgba(81, 104, 61, 0) 69.84%);
                }
            }
            .chart-container{
                
                height: 600px;
                width: 600px;
                margin: 0 50px;
                align-self: center;
                border-left: 1px solid #85C250;
                padding-left: 20px; 
                @media only screen and (max-width:1560px) {
                    width: 100%;
                    margin-bottom: 30px;
                    border-left: none;
                    padding-left: 0px; 
                }
            }
            .wallet-container{
                width: 100%;
            }
            
         
        }
        

    }
    .header-night{
        background-image: url('@/assets/herobg-night.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        .graph-container{
            border:none;
        }   
    }

</style>