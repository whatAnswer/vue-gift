<template>
  <div class="home">
    <div>
      <div class="topbac">
        <div class="righttips">
          <div class="rule" @click="showRule">活<br>动<br>规<br>则</div>
          <div class="result" @click="showReg">查<br>看<br>抽<br>奖<br>结<br>果</div>
        </div>
        <div class="logo"><img src="../assets/logo.png" alt=""></div>
        <div class="box">
          <div class="lightgroup">
            <div class="leftp">
              <div v-for="index of 13" :key="index">
                <img src="../assets/white.png" alt="" v-show="index % 2 == 0" class="white">
                <img src="../assets/yellow.png" alt="" v-show="index % 2 != 0" class="yellow">
              </div>
            </div>
            <div class="topp">
              <div v-for="index of 7" :key="index">
                <img src="../assets/white.png" alt="" v-if="index % 2 != 0" class="white">
                <img src="../assets/yellow.png" alt="" v-if="index % 2 == 0" class="yellow">
              </div>
            </div>
            <div class="rightp">
              <div v-for="index of 13" :key="index">
                <img src="../assets/white.png" alt="" v-if="index % 2 == 0" class="white">
                <img src="../assets/yellow.png" alt="" v-if="index % 2 != 0" class="yellow">
              </div>
            </div>
          </div>
          <img src="../assets/biglight.png" alt="" class="biglight">
          <div class="btn" @click="getPrize">
            <div>碰(3)</div>
          </div>
          <img src="../assets/gz.png" alt="" class="gz">
        </div>
      </div>
      <div class="bottombac">
        <div class="frp">
          <div class="fr">
            <div class="gmingroup">
              <div class="gming">
                盲盒数500
              </div>
              <div class="gming g2">
                盲盒数20
              </div>
              <div class="gming g3">
                盲盒数1000
              </div>
            </div>
            <div class="goods goods1">
              <div class="dq">
                <img src="../assets/tsl.png" alt="">
              </div>
            </div>
            <div class="goods goods2">
              <div class="dq1">
                <img src="../assets/kpl.png" alt="">
              </div>
            </div>
            <div class="goods goods3">
              <div class="dq2">
                <img src="../assets/kkg.png" alt="">
              </div>
            </div>
            <div>
              <div class="nameandprice">
                <div>玛捷斯吐司炉</div>
                <div class="price">市场价 1980</div>
              </div>
              <div class="nameandprice p2">
                <div>玛捷斯酷烹乐</div>
                <div class="price">市场价 11880</div>
              </div>
              <div class="nameandprice p3">
                <div>玛捷斯酷酷锅</div>
                <div class="price">市场价 2280</div>
              </div>
            </div>
            <div class="light">
              <div><img src="../assets/smalllight.png" alt=""></div>
              <div><img src="../assets/smalllight.png" alt=""></div>
            </div>
          </div>
          <div class="fr2">
            <div class="gmingroup">
              <div class="gming g4">
                盲盒数1000
              </div>
              <div class="gming g5">
                盲盒数480
              </div>
            </div>
            <div class="goods goods1">
              <div class="dq3">
                <img src="../assets/zg.png" alt="">
              </div>
            </div>
            <div class="goods goods2">
              <div class="dq4">
                <img src="../assets/gzq.png" alt="">
              </div>
            </div>
            <div>
              <div class="nameandprice p4">
                <div>特大号蒸锅</div>
                <div class="price">市场价 1590</div>
              </div>
              <div class="nameandprice p5">
                <div>玛捷斯果汁器</div>
                <div class="price">市场价 1180</div>
              </div>
            </div>
            <div class="light">
              <div><img src="../assets/smalllight.png" alt=""></div>
              <div><img src="../assets/smalllight.png" alt=""></div>
            </div>
          </div>
          <div class="namelist">
            <div class="tittle">
              <div class="medal"><img src="../assets/medal.png" alt=""></div>
              <div class="medaltittle">中奖名单</div>
            </div>
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="prizeline">
                    <div class="name">放飞风筝</div>
                    <div class="prize">15分钟前抽中果汁机</div>
                  </div>
                  <div class="prizeline">
                    <div class="name">千小库的家-030...</div>
                    <div class="prize">22分钟前抽中XL蒸锅</div>
                  </div>
                  <div class="prizeline">
                    <div class="name">深圳贺康</div>
                    <div class="prize">30分钟前抽中果汁机</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="openDia" v-show="prizeRule">
        <div class="mask"></div>
        <div class="contentBac">
          <div class="maskContent">
            <div class="closegroup" @click="closeRule">
              <img src="../assets/close.png" alt="">
            </div>
            <div class="whitebac">
              <div class="opentittle">《开盲盒 酷碰乐》Magimix Mart 3000个超值盲盒等你来开启</div>
              <div class="rulebac">
                <div class="rulebacchild">
                  <div class="rulecontent">
                    <div>因优异的功能和卓越的品质，以及日趋完善的客户服务体系，玛捷斯进入中国近两年时间，为越来越多的中国家庭喜爱、使用和分享。在2021牛年开启之时，MagimixMart首次亮相，甄选5款最受欢迎的产品、配件、甚至大家心仪已久的尚未正式上架的新品，来投入此次活动，确保每一个开启的盲盒都是超值好物。</div>
                    <div>1、活动时间：2021年2月28日至2021年3月30日</div>
                    <div>2、活动资格认定：</div>
                    <div>
                      * 活动期间购买酷烹乐标准版的客户<br>
                      * 活动期间酷烹乐标准版订单的推荐人<br>
                      * 有尚未使用的尊享权的客户
                    </div>
                    <div>以上三类客户可参加此次活动，资格认定以手机号为准，每个手机号只能参加一次抽取盲盒的活动</div>
                    <div>3、盲盒内容和数量：</div>
                    <div class="money">
                      <div>酷烹乐标准版</div>
                      <div>20套（官方售价11880元）</div>
                    </div>
                    <div class="money">
                      <div>CoCo锅</div>
                      <div>1000套（官方售价2280元）</div>
                    </div>
                    <div class="money">
                      <div>Vision透视吐司炉</div>
                      <div>500台（官方售价1980元）</div>
                    </div>
                    <div class="money">
                      <div>XL特大号蒸锅</div>
                      <div>1000套（官方售价1590元）</div>
                    </div>
                    <div class="money">
                      <div>果汁器</div>
                      <div>480个（官方售价1180元）</div>
                    </div>
                    <div class="money">
                      <div>共计</div>
                      <div class="righttext">3000个超值盲盒(盲盒抽完，活动即自动停止)</div>
                    </div>
                    <div>4、盲盒价格：538元</div>
                    <div>5、MagimixMart将于3月10日左右在官方微信公众号内开启盲盒抽奖活动，每个获得资格的手机号最多可连续抽取3次，以最后一次抽取确认的盲盒为准。</div>
                    <div>6、所有盲盒奖品的发放按具体到货时间以及下单先后次序发放。</div>
                    <div class="lastline">公司拥有活动解释权</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="openDia2" v-show="islogin">
        <div class="mask"></div>
        <div class="contentBac">
          <div class="maskContent2">
            <div class="whitebac">
              <div class="logtittle"></div>
              <div class="inputline">
                <div class="inputtext">手机号</div>
                <div class="inputp"><input type="text" placeholder="请输入手机号"></div>
              </div>
              <div class="inputline">
                <div class="inputtext">验证码</div>
                <div class="inputp codegroup">
                  <input type="text" placeholder="请输入验证码" class="code">
                  <input type="button" class="getcode gradientgetcodebtn" :value="codeBtnValue" @click="getCode" :disabled="canClick">
                </div>
              </div>
              <div>
                <div class="loginbtn" @click="login">登录</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Swiper from 'swiper';
import { draw } from '../api/http.js'
import { setInterval } from 'timers';
import '../style/swiper.min.css'
import '../style/dia.scss'

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      prizeRule: false, //奖品结果弹出框
      islogin: false, //奖品结果弹出框
      codeBtnValue: "发送验证码",
      waitTime: 60,
      codeTimer: '',
      canClick: false
    }
  },
  created() {
    // 此时获取不到dom节点
    // 不涉及到dom操作的方法
    this.init()
  },
  mounted() {
    // 这个生命周期可以获取dom节点

    this.showReg();
    new Swiper ('.swiper-container', {
      autoplay : true,     
      speed: 3000,
      loop : true,
      direction: 'vertical',
      autoHeight: true,
      freeMode:true
    })

    let wait = 60;
    let setTimeoutTimer;
  },
  methods: {
    init() {
      console.log('初始化事件')
      this.testDraw()
    },

    //抽奖
    getPrize() {
      console.log('抽奖');
    },

    //跑马灯动画
    houseAnimation() {
      let timer = setInterval(()=>{
        
      }, 3000);
    },

    login() {
      //ajax

      //无论是否成功先关闭登录框
      this.closeReg();
    },

    getCode() {
      //ajax
      console.log('11111111111');
      this.codeTime();
    },

    codeTime() {
      if (this.waitTime == 0) {
          this.canClick = false;
          this.codeBtnValue = "发送验证码";
          wait = 60;
          clearTimeout(this.codeTimer);
      } else {
          this.canClick = true;
          this.codeBtnValue = this.waitTime + "S重新发送";
          this.waitTime--;
          clearTimeout(this.codeTimer);
          this.codeTimer = setTimeout(()=>{
              this.codeTime()
          }, 1000)
      }
    },

    showRule() {
      this.prizeRule = true;
    },
    
    closeRule() {
      this.prizeRule = false;
    },

    showReg() {
      console.log("111111111");
      document.querySelector('body').style.overflow = "hidden";
      document.querySelector('body').style.position = "fixed";
      this.islogin = true;
    },
    
    closeReg() {
      document.querySelector('body').style.overflow = "auto";
      document.querySelector('body').style.position = "relative";
      this.islogin = false;
    },

    // 你的点击方法
    click() {
      console.log('点击事件')
    },
    // 测试get请求接口调用
    testDraw() {
      draw().then(res=>{
        if (res.code === 0) {
          console.log(res)
        }
      }).finally(()=>{
        console.log('成功与否都会执行')
      })
    }
  }
};
</script>
<style lang="scss" scoped>
  .white,
  .yellow {
      animation-name: test;
      animation-duration: 5s;
      // opacity: 0;
  }

  .white {
    animation-delay: 5s;
    -webkit-animation-delay: 5s
  }
  .yellow {
    animation-delay: 10s;
    -webkit-animation-delay: 10s
  }

  @-webkit-keyframes test {
      0% {
          opacity: 0;
      }

      50% {
          opacity: 1;
      }

      100% {}

  }

  @keyframes test {
      0% {
          opacity: 0;
      }

      50% {
          opacity: 1;
      }

      100% {}
  }

  .swiper-container{
    height: 128px;
  }

  .swiper-container-free-mode > .swiper-wrapper {
    -webkit-transition-timing-function: linear;    /*之前是ease-out*/
    -moz-transition-timing-function: linear;
    -ms-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
    margin: 0 auto;
  }

  .topbac{
    width: 100%;
    height: 1285px;
    background-image: url("../assets/topbac.jpg");
    background-size: 100% 100%;
    position: relative;

    .righttips{
      position: absolute;
      right: 0;
      top: 320px;
    }

    .rule{
      width: 47px;
      height: 110px;
      background-image: url("../assets/rule.png");
      background-size: 100% 100%;
      font-size: 18.08px;
      color: #ffffff;
      font-weight: bold;
      line-height: 23px;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding-top: 12px;
      padding-left: 8px;
    }

    .result{
      width: 47px;
      height: 149px;
      background-image: url("../assets/result.png");
      background-size: 100% 100%;
      font-size: 18.08px;
      color: #ffffff;
      font-weight: bold;
      line-height: 23px;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding-top: 10px;
      padding-left: 8px;
    }

    .logo{
      text-align: center;

      img{
        width: 325px;
        display: block;
        margin: auto;;
      }
    }

    .box{
      margin: auto;
      width: 646px;
      height: 1020px;
      margin-top: 274px;
      background-image: url("../assets/megin.png");
      background-size: 100% 100%;
      position: relative;
    }

    .biglight{
      width: 334px;
      height: 612px;
      position: absolute;
      top: 125px;
      left: 100px;
      opacity: 0.25;
    }

    .btn{
      width: 305px;
      height: 146px;
      background-image: url("../assets/btn6.png");
      background-size: 100% 100%;
      position: absolute;
      bottom: 100px;
      right: 18px;
      z-index: 3;
      font-size: 45.19px;
      color: #ffffff;
      font-weight: bold;

      div{
        position: absolute;
        left: 125px;
        top: 43px;
      }
    }

    .gz{
      width: 300px;
      height: 95px;
      position: absolute;
      bottom: 137px;
      left: 60px;
      z-index: 1;
      border-radius: 15px;
      opacity: 0.5;
    }

    .yellow{
      width: 25px;
      height: 27px;
    }

    .white{
      width: 20px;
    }

    .lightgroup{
      position: relative;
      height: 100%;
    }

    .leftp{
      width: 25px;
      display: inline-block;
      left: 10px;
      top: 90px;
      position: absolute;
      font-size: 0;
      z-index: 2;

      div{
        height: 71px;
      }
    }

    .topp{
      display: inline-block;
      font-size: 0;
      top: 75px;
      position: absolute;
      width: 600px;
      left: 28px;
      z-index: 2;
      
      div{
        width: 75px;
        display: inline-block;
        vertical-align: middle;
      }
    }

    .rightp{
      width: 25px;
      display: inline-block;
      right: 11px;
      top: 50px;
      position: absolute;
      z-index: 2;

      div{
        height: 71px;
      }
    }
  }
  .bottombac{
    width: 100%;
    height: 1285px;
    background-image: url("../assets/bottombac.jpg");
    background-size: 100% 100%;

    .frp{
      padding-top: 148px;  

      .fr{
        width: 703px;
        height: 344px;
        background-image: url("../assets/frame.png");
        background-size: 100% 100%;
        margin: auto;
        text-align: left;
        font-size: 0;
        position: relative;

        .light{
          position: absolute;
          top: 8px;
          left: 63px;
          opacity: 0.25;

          div{
            display: inline-block;
            vertical-align: middle;
          }

          img{
            width: 290px;
            display: block;
          }
        }

      }

      .goods{
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          height: 190px;
        }

      .goods1{
        margin-left: 20px;
      }

      .goods2{
        margin-left: 5px;
      }

      .goods3{
        margin-left: 10px;
      }

      .gmingroup{
        padding-top: 2px;
        font-size: 0;
      }

      .gming{
        background-image: url("../assets/num.png"); 
        width: 133px;
        height: 63px;
        color: #ffffff;
        background-size: 100% 100%;
        font-size: 18.08px;
        font-weight: bold;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 75px;
        margin: auto;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        margin-left: 83px;
      }

      .g2{
        margin-left: 79px;
      }

      .g3{
        margin-left: 64px;
      }

      .g4{
        margin-left: 165px;
      }

      .g5{
        margin-left: 107px;
      }

      .nameandprice{
        width: 135px;
        height: 62px;
        background-image: url("../assets/price.png"); 
        background-size: 100% 100%;
        font-size: 19.58px;
        font-weight: bold;
        color: #cd2f30;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 1.5;
        padding-top: 9px;
        margin: auto;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        margin-left: 81px;
        margin-top: 2px;
      }

      .p2{
        margin-left: 78px;
      }

      .p3{
        margin-left: 63px;
      }

      .p4{
        margin-left: 166px;
        // margin-top: -5px;
      }

      .p5{
        margin-left: 110px;
        margin-top: 0px;
      }

      .dq{
        width: 242px;
        margin-left: 20px;
        margin-top: -2px;
        margin-left: 2px;

        img{
          width: 242px;
          height: 177px;
        }
      }

      .dq1{
        width: 136px;
        margin-top: -8px;
        margin-left: 23px;

        img{
          width: 136px;
          height: 159px;
        }
      }

      .dq2{
        width: 174px;
        margin-top: 28px;
        margin-left: 35px;

        img{
          width: 174px;
          height: 116px;
        }
      }

      .dq3{
        width: 132px;
        margin-top:-3px;
        margin-left: 145px;

        img{
          width: 132px;
          height: 158px;
        }
      }

      .dq4{
        width: 141px;
        margin-top: 20px;
        margin-left: 105px;

        img{
          width: 141px;
          height: 120px;
        }
      }

      .price{
        font-size: 16.57px;
        margin-top: -5px;
      }

      .fr2{
        width: 703px;
        height: 344px;
        background-image: url("../assets/frame.png");
        background-size: 100% 100%;
        margin: auto;
        margin-top: 18px;
        text-align: left;
        font-size: 0;
        position: relative;

        .light{
          position: absolute;
          top: 8px;
          left: 63px;
          opacity: 0.25;

          div{
            display: inline-block;
            vertical-align: middle;
          }

          img{
            width: 290px;
            display: block;
          }
        }
      }

      .namelist{
        width: 658px;
        height: 336px;
        background-image: url("../assets/namelist.png");
        background-size: 100% 100%;
        margin: auto;
        margin-top: 35px;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 66px;
        padding-top: 82px;
        overflow: hidden;

        .tittle{
          font-size: 0;
          margin-bottom: 31.5875px;
        }

        .medal{
          display: inline-block;
          vertical-align: middle;

          img{
            display: block;
            width: 25px;
            height: 32px;
          }
        }

        .medaltittle{
          display: inline-block;
          vertical-align: middle;
          font-size: 25.56px;
          color: #a64122;
          font-weight: bold;
          margin-left: 21px;
        }

        .prizeline{
          line-height: 1.5;
          margin-top: 8.825px;
          display: box;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -moz-align-items: center;
          -ms-align-items: center;
          -o-align-items: center;
          align-items: center;
          align-content: center;
          -moz-box-pack: center;
          box-pack: justify;
          -moz-box-pack: justify;
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -moz-justify-content: space-between;
          -ms-justify-content: space-between;
          -o-justify-content: space-between;
          justify-content: space-between;
        }

        .name{
          font-size: 22.35px;
          color: #d84b26;
          font-weight: bold;
          width: 188px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: left;
        }

        .prize{
          font-size: 22.35px;
          color: #d84b26;
          font-weight: bold;
        }
      }
    }
  }
</style>

