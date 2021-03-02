<template>
  <div class="home">
    <div>
      <div class="topbac">
        <div class="logo"><img src="../assets/logo.png" alt=""></div>
        <div class="box">
          
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
            <div>
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
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { draw } from '../api/http.js'

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created() {
    // 此时获取不到dom节点
    // 不涉及到dom操作的方法
    this.init()
  },
  mounted() {
    // 这个生命周期可以获取dom节点
  },
  methods: {
    init() {
      console.log('初始化事件')
      this.testDraw()
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
  .topbac{
    width: 100%;
    height: 1285px;
    background-image: url("../assets/topbac.jpg");
    background-size: 100% 100%;

    .logo{
      text-align: center;

      img{
        width: 325px;
        display: block;
        margin: auto;;
      }
    }

    .box{
      height: 1020px;
      margin-top: 274px;
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
        line-height: 1.5;
        padding-top: 23.5px;
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

