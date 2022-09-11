<script>
import LineChart from "./LineChart.vue";
import { mapState } from "vuex";
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
            spillageVal: 1,
            currencies: [
                { icon: "eth-icon.png", title: "ETH", value: "eth" },
                { icon: "logo.png", title: "SPI", value: "spi" },
            ],
            swapFrom: "eth",
            swapTo: "spi",
            balance: 0
        };
    },
    computed:{
        ...mapState([
            'nightMode'
        ])
    },
    methods:{
        updateIcon(swap) {
            if (swap === "from") {
                const currency = this.currencies.find((el) => el.value === this.swapFrom);
                document.getElementById("swapFromIcon").src = require(`@/assets/${currency.icon}`);
            }
            else if (swap === "to") {
                const currency = this.currencies.find((el) => el.value === this.swapTo);
                document.getElementById("swapToIcon").src = require(`@/assets/${currency.icon}`);
            }
        },
        swapReverse() {
            const temp = this.swapFrom;
            this.swapFrom = this.swapTo;
            this.swapTo = temp;
            this.updateIcon("from");
            this.updateIcon("to");
        }
    },
    components: { LineChart }
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

        <div class="graph-container">
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
            <div class="connectWallet" :class="nightMode? 'connectWallet-night':''">
                <div class="navigation">
                    <div class="buttons">
                        <div class="btn">swap</div>
                        <div class="btn">liquidity</div>
                    </div>
                    <div class="spillage">
                        <p class="text">spillage</p>
                        <p class="value">{{spillageVal}}%</p>
                    </div>
                </div>
                <div class="swap swapFrom">
                    <div class="swapHeader">
                        <img src="@/assets/eth-icon.png" alt="" id="swapFromIcon" class="icon">
                        <div class="selectInput">
                            <p class="title">Swap From</p>
                            <select name="firstCurrency" id="" @change="updateIcon('from')" v-model="swapFrom">
                                <option :value="currency.value" v-for="(currency, index) in currencies" :key="index">{{currency.title}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="inputs">
                        <div class="input firstInput">
                            <input type="number" placeholder="0.00">
                        </div>
                        <div class="input">
                            $<input type="number" placeholder="0.00">
                        </div>

                    </div>

                </div>
                <div class="balance">
                    Balance {{balance}} <button class="maxBtn">Max</button>
                </div>
                <div class="swapButton" @click="swapReverse">
                    <img src="@/assets/up-arrow.png" alt="">
                    <img src="@/assets/down-arrow.png" alt="">
                </div>
                <div class="swap swapTo">
                    <div class="swapHeader">
                        <img src="@/assets/logo.png" alt="" id="swapToIcon" class="icon">
                        <div class="selectInput">
                            <p class="title">Swap To</p>
                            <select name="firstCurrency" id="" @change="updateIcon('to')" v-model="swapTo">
                                <option :value="currency.value" v-for="(currency, index) in currencies" :key="index">{{currency.title}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="inputs">
                        <div class="input firstInput">
                            <input type="number" placeholder="0.00">
                        </div>
                        <div class="input">
                            $<input type="number" placeholder="0.00">
                        </div>

                    </div>

                </div>
                <div class="connectbtn">Connect Wallet</div>
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
        }
    }
   
    .wrapper{
        
        .content{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 80px 0;

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
                        font-weight: 700;
                        font-size: 48px;
                        margin-right: 22px;
                    }
                    p{
                        font-weight: 500;
                        font-size: 28px;
                    }
                }
                .heading-night{
                    color:#fff;
                }
                .date{
                    display: flex;
                    align-items: center;
                    .filter{
                        display: flex;;
                        align-items: center;
                        justify-content: center;
                        border-radius: 7px;
                        background: #D1E8BD;
                        margin-right: 28px;
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
                @media only screen and (max-width:1220px){
                    margin-right: 0;
                }
                .firstval{
                    font-weight: 700;
                    font-size: 48px;
                    color: #85C250;
                    margin-bottom: 32px;
                }
                .secondVal{
                    font-weight: 600;
                    font-size: 28px;
                    color: #D1E8BD;
                }
            }
        }
        .graph-container{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding-bottom: 100px;
            border-bottom: 1px solid #85C250;

           
            .stats{
                h2{
                    text-align: center;
                    text-transform: capitalize;
                    width: 210px;
                    padding: 14px;
                    background: linear-gradient(180deg, #D1E8BD 0%, rgba(209, 232, 189, 0.25) 100%);
                    border-bottom: 1px solid #85C250;
                    border-radius: 7px 7px 0px 0px;
                }
                .items{
                    list-style: none;
                    width: 210px;
                    background: linear-gradient(180deg, #D1E8BD 0%, rgba(209, 232, 189, 0.25) 100%);
                    border-radius: 0px 0px 7px 7px;
                    padding-bottom: 36px;
                    .item{
                        padding: 36px 16px;
                        padding-bottom: 0;
                        color: #85C250;
                        .title{
                            font-weight: 500;
                            font-size: 20px;
                            margin-bottom: 23px;
                        }
                        .value{
                            font-weight: 700;
                            font-size: 36px;
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
                width: 100%;
                margin: 0 50px;
                align-self: center;
                border-left: 1px solid #85C250;
                padding-left: 20px;
            }
            
            .connectWallet{
                width: 485px;
                background: #FFFFFF;
                border-radius: 7px;
                padding: 34px 20px;
                display: flex;
                flex-direction: column;


                .navigation{
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    text-transform: capitalize;
                    .buttons{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #D1E8BD;
                        border-radius: 7px;
                        &:first-child{
                            margin-right: 20px;
                        }
                        .btn{
                            font-weight: 600;
                            font-size: 16px;
                            padding: 12px 15px;
                            border-radius: 7px;
                            color: #676D7A;
                            cursor: pointer;
                            
                            &:hover,&:active{
                                background: #85C250;
                                color: #000;
                            }
                        }
                    }
                    .spillage{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 50px;
                        .text{
                            font-weight: 600;
                            font-size: 16px;
                            color: #676D7A;
                            margin-right: 20px;
                        }
                        .value{
                            font-weight: 600;
                            font-size: 16px;
                            color: #676D7A;
                            border: 1px solid #D1E8BD;
                            border-radius: 0 7px 7px 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 10px 12px;
                        }
                    }
                }
                .swap{
                    .swapHeader{
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        margin-bottom: 30px;
                        .icon{
                            height: 50px;
                            margin-right: 16px;
                        }
                        .selectInput{
                            .title{
                                font-weight: 500;
                                font-size: 13px;
                                color: #676D7A;                               
                                
                            }
                            select{
                                position: relative;
                                background: transparent;
                                border: none;
                                outline: none;
                                font-weight: 600;
                                font-size: 22px;
                                padding: 12px 0;
                                cursor: pointer;                               
                            }   
                            
                        }

                    }
                    .inputs{
                        display: flex;
                        border: 1px solid #85C250;
                        border-radius: 7px;
                        width: 406px;
                        .firstInput{
                            border-right: 1px solid #85C250;                       
                        }
                        .input{
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            width: 50%;
                            padding: 17px 15px;
                            color: #383838; 
                            font-weight: 700;
                           input{
                            width: 100%;
                            font-size: 18px;
                            background: transparent;
                            outline: none;
                            padding: 3px;
                            border: none;
                            &:focus{
                            }
                           }
                        }
                        input::-webkit-outer-spin-button,
                        input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                        }
                    }
                }
                .balance{
                    font-weight: 500;
                    font-size: 13px;
                    color: #676D7A;
                    display: flex;
                    align-items: center;
                    margin-top: 20px;
                    .maxBtn{
                        font-weight: 600;
                        font-size: 13px;    
                        color: #85C250;
                        width: 48px;
                        height: 24px;
                        border: 1px solid #D1E8BD;
                        border-radius: 7px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-transform: uppercase;
                        margin-left: 12px;
                        cursor: pointer;
                        &:active,&:hover{
                            background-color: #85C250;
                            color: #fff;
                        }
                    }
                }
                .swapButton{
                    width: 64.16px;
                    height: 64.16px;
                    border-radius: 50%;
                    background: #D1E8BD;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    align-self: flex-end;
                    transform: translateY(15px);
                    cursor: pointer;
                    &:active,&:hover{
                        background-color: #85C250;
                    }
                    img{
                        height: 35px;
                    }
                }
                .connectbtn{
                    width: 100%;
                    background: #85C250;
                    color: #ffff;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 14px 20px;
                    font-weight: 700;
                    font-size: 24px;
                    margin-top: 52px;
                    transition: all .25s;
                    &:active,&:hover{
                        border: 3px solid #D1E8BD;
                        color: #85C250;
                        background: #ffff;
                        cursor: pointer;
                    }

                }
            }
            .connectWallet-night{
                background: #070E0C;
                .navigation{
                    .spillage{
                        .text{
                            color: #fff;
                        }
                        .value{
                            background: #070E0C;
                            border: 1px solid rgba(27, 209, 156, 0.12);
                            color: #fff;
                        }
                    }
                }
                .swap{
                    .swapHeader{
                        .icon{
                            height: 50px;
                            margin-right: 16px;
                        }
                        .selectInput{
                            select{
                              color: #fff;                           
                            }     
                        }

                    }
                    .inputs{
                        .input{
                            color: #ffffff; 
                            input{
                                color:#fff;
                            }
                        }
                    }
                }
                .balance{
                    color: #ADADAD;
                    .maxBtn{
                        background: transparent;                      
                    }
                }
                .swapButton{
                    background: #D1E8BD;
                }
                .connectbtn{
                    color:  #070E0C;
                    &:active,&:hover{
                        border: 3px solid #070E0C;
                        color: #070E0C;
                        background: #ffff;
                        cursor: pointer;
                    }

                }
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