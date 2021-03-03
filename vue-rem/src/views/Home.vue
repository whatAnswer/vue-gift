<template>
  <div class="home">
    <div>
      <div class="topbac">
        <div class="righttips">
          <div class="rule" @click="showRule">活<br>动<br>规<br>则</div>
          <div class="result" @click="showResult">查<br>看<br>抽<br>奖<br>结<br>果</div>
        </div>
        <div class="logo"><img src="../assets/logo.png" alt=""></div>
        <div class="box">
          <div class="lightgroup">
            <div class="leftp">
              <div v-for="index of 13" :key="index">
                <div class="yellow" v-if="index % 2 != 0" :class="{addYanimate: isShowWhite}"></div>
                <div class="white" v-if="index % 2 == 0" :class="{addWanimate: isShowYellow}"></div>
              </div>
            </div>
            <div class="topp">
              <div v-for="index of 7" :key="index">
                <div class="white" v-if="index % 2 != 0" :class="{addWanimate: isShowYellow}"></div>
                <div class="yellow" v-if="index % 2 == 0" :class="{addYanimate: isShowWhite}"></div>
              </div>
            </div>
            <div class="rightp">
              <div v-for="index of 13" :key="index">
                <div class="yellow" v-if="index % 2 != 0" :class="{addYanimate: isShowWhite}"></div>
                <div class="white" v-if="index % 2 == 0" :class="{addWanimate: isShowYellow}"></div>
              </div>
            </div>
          </div>
          <img src="../assets/biglight.png" alt="" class="biglight">
          <div class="btn" @click="getPrize">
            <div>{{'碰(' + clickNum + ')'}}</div>
          </div>
          <div class="prizeview">
            <div class="prizebox" :class="{ addanim: isAnim }">
              <img src="../assets/box.png" alt="">
            </div>
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
                <div class="swiper-slide" v-for="item in winnerList" :key="item.id">
                  <div class="prizeline">
                    <div class="name">{{item.name}}</div>
                    <div class="prize">{{item.minutes + '前抽中' + item.prizeInfo.name}}</div>
                  </div>
                </div>
              </div>
              <!-- <div class="swiper-wrapper" v-if="winnerList.length <= 2">
                <div class="prizeline">
                  <div class="name">放飞风筝</div>
                  <div class="prize">15分钟前抽中果汁机</div>
                </div>
                <div class="prizeline">
                  <div class="name">放飞风筝</div>
                  <div class="prize">15分钟前抽中果汁机</div>
                </div>
              </div> -->
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
    <div class="openDia2" v-if="islogin">
        <div class="mask"></div>
        <div class="contentBac">
          <div class="maskContent2">
            <div class="whitebac">
              <div class="logtittle"></div>
              <div class="inputline">
                <div class="inputtext">手机号</div>
               <div class="inputp"><input type="text" placeholder="请输入手机号" maxlength="11" @blur="refreshBody" v-model="phoneNum" @input="phoneNum=phoneNum.replace(/[^\d]/g,'')"></div>
              </div>
              <div class="inputline">
                <div class="inputtext">验证码</div>
                <div class="inputp codegroup">
                  <input type="text" placeholder="请输入验证码" class="code" @blur="refreshBody" v-model="codeNum" @input="codeNum=codeNum.replace(/[^\d]/g,'')">
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
    <div class="openDia" v-if="isEntitled">
        <div class="mask"></div>
        <div class="contentBac">
          <div class="maskContent3">
            <div class="whitebac">
              <div class="nozg">您好，您尚未获得参加本次活动的权限，请咨询您的专属美食顾问。如您还没有专属顾问可拨打<a href="tel:4000210088"> 4000210088 </a>电话咨询。</div>
            </div>
          </div>
        </div>
    </div>
    <div class="openDia" v-if="winPrize">
        <div class="mask"></div>
        <div class="contentBac">
          <div class="maskContent4">
            <div class="whitebac">
              <div class="prizetittle">恭喜您，中奖了！</div>
              <div class="prizeimg"><img src="../assets/kpl.png" alt=""></div>
              <div class="prizetips2">
                恭喜您获得价值XXX元的xxx一份
              </div>
              <div class="draw-result">
                <div class="confirm" @click="closeWinPrize">保留</div>
                <div class="save" @click="closeWinPrize">放弃，再抽一次</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="openDia" v-if="unWinPrize">
        <div class="mask"></div>
        <div class="contentBac">
          <div class="maskContent6">
            <div class="whitebac">
              <div class="prizetittlegray">很遗憾，您未中奖</div>
              <div class="prizetips">您未获得任何奖品，再接再励！</div>
             <div class="confirm2">确定</div>
            </div>
          </div>
        </div>
    </div>
    <div class="openDia" v-if="prizeResult">
        <div class="mask"></div>
        <div class="contentBac">
          <div class="maskContent5">
            <div class="closegroup" @click="closeResult">
              <img src="../assets/close.png" alt="">
            </div>
            <!-- <div class="whitebac">
              <div class="prizetittlegray">很遗憾，您未中奖</div>
              <div class="prizetips">您未获得任何奖品，请再接再励！</div>
            </div> -->
            <div class="whitebac">
              <div class="prizetittle">恭喜您，中奖了!</div>
              <div class="prizeimg"><img src="../assets/kpl.png" alt=""></div>
              <div class="prizetips2">
                恭喜您获得价值XXX元的xxx一份
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="openDia" v-if="postAddr">
        <div class="mask"></div>
        <div class="contentBac">
          <div class="maskContent7">
            <div class="whitebac">
              <div class="postgroup">
                <div class="postaddr">邮寄地址：</div>
                <div class="postinput"><textarea name="" id=""></textarea></div>
              </div>
              <div class="confirm2">确定</div>
            </div>
          </div>
        </div>
    </div>
    <div class="openDia" v-if="loading">
        <div class="mask"></div>
        <div class="contentBac">
          <div class="maskContent5">
            <img src="../assets/load.gif" alt="" class="loadgif">
          </div>
        </div>
    </div>
     <Toast :msg="toastText" v-if="showToast" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Toast from "@/components/Toast.vue";
import Swiper from 'swiper';
import { getVerifyCode, logIn, getAllPrize, getAPrize } from '../api/http.js'
import { instance } from '../api/request.js'
import { setInterval } from 'timers';
import '../style/swiper.min.css'
import '../style/dia.scss'

export default {
  name: "Home",
  components: {
    HelloWorld,
    Toast
  },
  data() {
    return {
      prizeRule: false, //奖品结果弹出框
      islogin: false, //登录弹出框
      isEntitled: false, //是否有资格抽奖
      winPrize: false, //中奖
      unWinPrize: false, //未中奖
      prizeResult: false, //中奖结果弹出框
      loading: false,
      codeBtnValue: "发送验证码",
      waitTime: 60,
      isAnim: false,
      isShowWhite: false,
      isShowYellow: false,
      codeTimer: '',
      canClick: false,
      moreThen2: true,
      showToast: false,
      toastText: "",
      phoneNum: "",
      codeNum: "",
      toastTimer: "",
      clickNum: 50,
      winnerList: [],
      postAddr: false
    }
  },
  created() {
    // 此时获取不到dom节点
    // 不涉及到dom操作的方法
    this.init()
  },
  mounted() {
    // 这个生命周期可以获取dom节点
    this.showReg(); //一进页面就展示登录弹出框
    this.refreshBody();

    new Swiper ('.swiper-container', {
      autoplay : true,     
      speed: 3000,
      loop : true,
      direction: 'vertical',
      autoHeight: true,
      freeMode:true,
      autoplayDisableOnInteraction: false
    })
  },
 methods: {
    init() {
      this.getPrizeList();
    },

    refreshBody(){
      document.querySelector('body').scrollTop = document.querySelector('body').scrollTop;
    },

    //获取中奖列表
    getPrizeList(){
      getAllPrize().then(res=>{
        if (res.code === 0) {
          console.log("中奖列表");
          console.log(res)
          res.datas.forEach((item)=>{
            item.minutes = this.dealMinutes(item.minutes);
          });
          this.dealMinutes(61);
          this.winnerList = res.datas;
        }else {
          this.openToast(res.message);
          this.closeToast();
        }
      }).finally(()=>{
        console.log('成功与否都会执行')
      })
    },

    //抽奖
    getPrize() {
      if(this.clickNum <= 0){
        return;
      }
      // ajax
      let params = {
        token: JSON.parse(localStorage.getItem('cj_userData')).token
      }

      getAPrize(params).then(res=>{
        if (res.code === 0) {
          console.log("");
          console.log(res)
        }else {
          this.openToast(res.message);
          this.closeToast();
        }
      }).finally(()=>{
        this.loading = true;
        clearTimeout(timer1);
        let timer1 = setTimeout(()=>{
          this.loading = false;
          this.isAnim = true;
          this.isShowWhite = true;
          this.isShowYellow = true;

          clearTimeout(timer);
          let timer = setTimeout(()=>{
            this.winPrize = true;
            this.isAnim = false;
            this.isShowWhite = false;
            this.isShowYellow = false;
          }, 1000)
        }, 3000)
      })
    },

    login() {
      //ajax
      let params = {
        'num': this.phoneNum,
        'code': this.codeNum
      }
      logIn(params).then(res=>{
        if (res.code === 0) {
          this.closeReg();
          localStorage.setItem('cj_userData', JSON.stringify(res.data));
          this.refreshPage(res.data)
        }else {
          this.openToast(res.message);
          this.closeToast();
        }
      }).finally(()=>{
        console.log('成功与否都会执行')
      })
    },

    getCode() {
      //未填写手机号的验证
      if(this.phoneNum == ""){
        this.openToast("请输入手机号！");
        this.closeToast();
        return;
      }

      //调用验证码60s倒计时
      this.codeTime();

      getVerifyCode(this.phoneNum).then(res=>{
        if (res.code === 0) {
          console.log(res);
        }else if(res.code == -1){
          this.closeReg();
          this.isEntitled = true;
        }
      }).finally(()=>{
        console.log('成功与否都会执行');
      })
    },

    codeTime() {
      if (this.waitTime == 0) {
          this.canClick = false;
          this.codeBtnValue = "发送验证码";
          this.waitTime = 60;
          clearTimeout(this.codeTimer);
      } else {
          this.canClick = true;
          this.codeBtnValue = this.waitTime + "S重新发送";
          this.waitTime--;
          clearTimeout(this.codeTimer);
          this.codeTimer = setTimeout(()=>{
            clearTimeout(this.codeTimer);
            this.codeTime();
          }, 1000)
      }
    },

    refreshPage(res) {
      this.clickNum = res.loginUser.number
    },

    openToast(text) {
      this.toastText = text;
      this.showToast = true;
    },

    closeToast() {
      this.toastTimer = setTimeout(()=>{
        clearTimeout(this.toastTimer);
        this.showToast = false;
      }, 1500)
    },

    dealMinutes(minutes) {
      if(minutes >= 60 && minutes < 24 * 60){
        minutes = parseInt(minutes / 60) + "小时" + ((minutes % 60) > 0 ? (minutes % 60) + "分钟" : "")
      }
      console.log(minutes);
      return minutes;
    },

    showResult(){
      this.prizeResult = true;
    },

    closeResult() {
      this.prizeResult = false;
    },

    showRule() {
      this.fixBody()
      this.prizeRule = true;
    },
    
    closeRule() {
      this.freeBody()
      this.prizeRule = false;
    },

    showReg() {
      this.fixBody();
      this.islogin = true;
    },
    
    closeReg() {
      this.freeBody()
      this.islogin = false;
    },

    fixBody() {
      document.querySelector('body').style.overflow = "hidden";
      document.querySelector('body').style.position = "fixed";
    },

    freeBody() {
      document.querySelector('body').style.overflow = "auto";
      document.querySelector('body').style.position = "relative"; 
    },

    closeWinPrize(){
      this.winPrize = false;
    }
  }
};
</script>
<style lang="scss" scoped>
  .yellow{
    width: 25px;
    height: 27px;
    background-image: url("../assets/yellow.png");
    background-size: 100% 100%;
    border-radius: 50%;
    margin-bottom: 45px;
  }

  .white{
    width: 22px;
    height: 24px;
    background-image: url("../assets/white.png");
    background-size: 100% 100%;
    border-radius: 50%;
    margin-bottom: 45px;
  }

  .topbac .addYanimate {
    animation: yellowtowhite 0.4s infinite ease;
    -webkit-animation: yellowtowhite 0.4s infinite ease;
    animation-fill-mode:forwards;
  }
  .topbac .addWanimate {
    animation: whitetoyellow 0.4s infinite ease;
    -webkit-animation: whitetoyellow 0.4s infinite ease;
    animation-fill-mode: forwards;
  }

  @-webkit-keyframes yellowtowhite {
      0% {
        background-image: url('../assets/yellow.png');
        // box-shadow: yellow 0 0 0 0;
      }

      100% {
        background-image: url('../assets/white.png');
        // box-shadow: white 4px 6px 23px 6px;
      }
  }

  @keyframes yellowtowhite {
      0% {
        background-image: url('../assets/yellow.png');
        // box-shadow: yellow 0 0 0 0;
      }

      100% {
        background-image: url('../assets/white.png');
        // box-shadow: white 4px 6px 23px 6px;
      }
  }

   @-webkit-keyframes whitetoyellow {
      0% {
        background-image: url('../assets/white.png');
        //  box-shadow: white 0 0 0 0;
      }

      100% {
        background-image: url('../assets/yellow.png');
        // box-shadow: yellow 4px 6px 23px 6px;
      }

  }

  @keyframes whitetoyellow {
      0% {
        background-image: url('../assets/white.png'); 
        //  box-shadow: white 0 0 0 0;
      }

      100% {
        background-image: url('../assets/yellow.png');
        // box-shadow: yellow 4px 6px 23px 6px;
      }
  }

  .addanim {
    -webkit-animation: move1 0.5s ease-in 1;
    animation: move1 0.5s ease-in 1;
    animation-fill-mode:forwards;
    -webkit-animation-fill-mode: forwards;
  }

  @keyframes move1 {
    from {  margin-top: -125px;  }
    to {  margin-top: 0;  }
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

    .prizeview{
      width: 300px;
      height: 120px;
      position: absolute;
      bottom: 107px;
      left: 60px;
      z-index: 1;
      border-radius: 15px;
      overflow: hidden;
    }
    
    .prizebox{
      margin-top: -125px;
      width: 124px;
      height: 124px;
      border: 4px solid #ffffff;
      margin-left: 94px;

      img{
        width: 120px;
      }

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
      z-index: 2;
      border-radius: 15px;
      opacity: 0.5;
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

      // div{
      //   height: 71px;

      // }
    }

    .topp{
      display: inline-block;
      font-size: 0;
      top: 75px;
      position: absolute;
      width: 600px;
      left: 58px;
      z-index: 2;
      text-align: center;
      
      div{
        display: inline-block;
        vertical-align: middle;
        margin-right: 29px;
      }
    }

    .rightp{
      width: 25px;
      display: inline-block;
      right: 11px;
      top: 90px;
      position: absolute;
      z-index: 2;

      // div{
      //   height: 71px;
      // }
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

