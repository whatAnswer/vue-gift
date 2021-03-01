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
            <div class="goods">
              <div class="gming">
                盲盒数500
              </div>
              <div class="">
                <img src="../assets/tsl.png" alt="">
              </div>
              <div class="nameandprice">
                <div>玛捷斯吐司炉</div>
                <div class="price">市场价 1980</div>
              </div>
            </div>
          </div>
          <div class="fr2">

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

export default {
  name: "Home",
  components: {
    HelloWorld
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
        }
        .price{
          font-size: 16.57px;
          margin-top: -5px;
        }
      }

      .fr2{
        width: 703px;
        height: 344px;
        background-image: url("../assets/frame.png");
        background-size: 100% 100%;
        margin: auto;
        margin-top: 18px;
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

