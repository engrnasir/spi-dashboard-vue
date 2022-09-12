<template>
    <div class="connectWallet" :class="nightMode? 'connectWallet-night':''">
                <div class="navigation">
                    <div class="buttons">
                        <div class="btn">swap</div>
                        <div class="btn">liquidity</div>
                    </div>
                    <div class="spillage">
                        <p class="text">Slippage</p>
                        <p class="value"><input type="number" placeholder="1" v-model="spillageVal">%</p>
                    </div>
                </div>
                <div class="swap-container">
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
    
                        <div class="balance">
                            Balance {{balance}} <button class="maxBtn">Max</button>
                        </div>
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
                </div>
                <div class="connectbtn">Connect Wallet</div>
            </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        data() {
            return {
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
    }
    </script>
    

<style lang="scss" scoped>
       .connectWallet{
                width: 100%;
                max-width: 485px;
                background: #FFFFFF;
                border-radius: 7px;
                padding: 34px 20px;
                display: flex;
                flex-direction: column;
                @media only screen and (max-width:1560px) {
                    max-width: 100%;                    
                }
               

                .navigation{
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    text-transform: capitalize;
                    @media only screen and (max-width:580px) {
                        flex-direction: column;

                    }
                    .buttons{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #D1E8BD;
                        border-radius: 7px;
                        @media only screen and (max-width:580px) {
                            width: 100%;
                            justify-content: space-between;
                            margin-bottom: 30px;
                        }
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
                            @media only screen and (max-width:580px) {
                                width: 50%;
                                text-align: center;
                            }
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
                            padding: 10px 12px;
                            input[type="number"]{
                                text-align: right;
                                width: 40px;
                                border: none;
                                outline: none;
                                font-weight: 600;
                                font-size: 16px;
                                background: transparent;
                                &::-webkit-outer-spin-button,
                                &::-webkit-inner-spin-button {
                                    -webkit-appearance: none;
                                    margin: 0;
                                }
                            }
                        }
                    }
                }
                .swap-container{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    @media only screen and (max-width:1560px) and (min-width: 1030px) {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-start;
                    }
                }
                .swap{
                    .swapHeader{
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        margin-bottom: 20px;
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
                        @media only screen and (max-width:580px) {
                            width: 100%;
                        }
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
                    @media only screen and (max-width:1560px) and (min-width: 1030px) {
                        transform: translateY(0px) rotate(90deg);
                        align-self: center;                    
                    }
                    &:active,&:hover{
                        background-color: #85C250;
                    }
                    img{
                        height: 35px;
                    }
                }
                .connectbtn{
                    width: 100%;
                    max-width: 560px;
                    margin-left: 50%;
                    transform: translateX(-50%);
                    background: #85C250;
                    color: #ffff;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 14px 20px;
                    font-weight: 700;
                    font-size: 24px;
                    margin-top: 32px;
                    transition: all .25s;
                    @media only screen and (max-width:780px) {
                        padding: 10px 15px;
                        font-weight: 600;
                        font-size: 20px;
                        
                    }
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
                            input[type="number"]{
                               color: #fff;
                            }
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

</style>