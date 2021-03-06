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
          <div class="mask1" :class="{addWanimate2: houseMask}" v-show="houseMask"></div>
          <img src="../assets/yellowmask.png" alt="" style="display: none;" onclick ="return false">
          <img src="../assets/whitemask.png" alt="" style="display: none;" onclick ="return false">
          <img src="../assets/biglight.png" alt="" class="biglight" onclick ="return false">
          <button class="btn" @click.stop="getPrize" :disabled="buttonDisable">
            <div>{{'碰(' + clickNum + ')'}}</div>
          </button>
          <div class="prizeview">
            <div class="prizebox" :class="{ addanim: isAnim }">
              <img src="../assets/box.png" alt="" onclick ="return false">
            </div>
          </div>
          <img src="../assets/gz.png" alt="" class="gz" onclick ="return false">
        </div>
      </div>
      <div class="bottombac">
        <div class="frp">
          <div class="fr">
            <div class="gmingroup">
              <div class="gming">
                盲盒数{{productNum.countOne}}
              </div>
              <div class="gming g2">
                盲盒数{{productNum.countTwo}}
              </div>
              <div class="gming g3">
                盲盒数{{productNum.countThree}}
              </div>
            </div>
            <div class="goods goods1">
              <div class="dq">
                <img src="../assets/tsl.png" alt="" onclick ="return false">
              </div>
            </div>
            <div class="goods goods2">
              <div class="dq1">
                <img src="../assets/kpl.png" alt="" onclick ="return false">
              </div>
            </div>
            <div class="goods goods3">
              <div class="dq2">
                <img src="../assets/kkg.png" alt="" onclick ="return false">
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
              <div><img src="../assets/smalllight.png" alt="" onclick ="return false"></div>
              <div><img src="../assets/smalllight.png" alt="" onclick ="return false"></div>
            </div>
          </div>
          <div class="fr2">
            <div class="gmingroup">
              <div class="gming g4">
                盲盒数{{productNum.countFour}}
              </div>
              <div class="gming g5">
                盲盒数{{productNum.countFive}}
              </div>
            </div>
            <div class="goods goods1">
              <div class="dq3">
                <img src="../assets/zg.png" alt="" onclick ="return false">
              </div>
            </div>
            <div class="goods goods2">
              <div class="dq4">
                <img src="../assets/gzq.png" alt="" onclick ="return false">
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
              <div><img src="../assets/smalllight.png" alt="" onclick ="return false"></div>
              <div><img src="../assets/smalllight.png" alt="" onclick ="return false"></div>
            </div>
          </div>
         <div class="namelist">
            <div class="tittle">
              <div class="medal"><img src="../assets/medal.png" alt="" onclick ="return false"></div>
              <div class="medaltittle">中奖名单</div>
            </div>
            <div class="swiper-container" v-show="moreThen2">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in winnerList" :key="item.id" style="height: 42.35px;">
                  <div class="prizeline">
                    <div class="name">{{item.phone}}</div>
                    <div class="prize">{{item.minutes + '前抽中' + item.prizeInfo.name}}</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="prizeline">
                    <div class="name">大号整过11111</div>
                    <div class="prize">18分钟前抽中大号整过</div>
                  </div>
                  <div class="prizeline">
                    <div class="name">大号整过2222</div>
                    <div class="prize">18分钟前抽中大号整过</div>
                  </div>
                  <div class="prizeline">
                    <div class="name">大号整过3333333</div>
                    <div class="prize">18分钟前抽中大号整过</div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="prizeline">
                    <div class="name">大号整过11111</div>
                    <div class="prize">18分钟前抽中大号整过</div>
                  </div>
                  <div class="prizeline">
                    <div class="name">大号整过2222</div>
                    <div class="prize">18分钟前抽中大号整过</div>
                  </div>
                  <div class="prizeline">
                    <div class="name">大号整过3333333</div>
                    <div class="prize">18分钟前抽中大号整过</div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="prizeline">
                    <div class="name">大号整过11111</div>
                    <div class="prize">18分钟前抽中大号整过</div>
                  </div>
                  <div class="prizeline">
                    <div class="name">大号整过2222</div>
                    <div class="prize">18分钟前抽中大号整过</div>
                  </div>
                  <div class="prizeline">
                    <div class="name">大号整过3333333</div>
                    <div class="prize">18分钟前抽中大号整过</div>
                  </div>
                </div>
              </div>
            </div> -->
            <div class="" v-show="!moreThen2">
              <div class="prizeline" v-for="item in winnerList" :key="item.id">
                <div class="name">{{item.phone}}</div>
                <div class="prize">{{item.minutes + '前抽中' + item.prizeInfo.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 是否同意弹出框 -->
    <div class="openDia" v-if="getPrizeRule">
        <div class="contentBac">
          <div class="maskContent">
            <div class="closegroup" @click="closeAgreeBox">
              <img src="../assets/close.png" alt="" onclick ="return false">
            </div>
            <div class="whitebac">
              <div class="rulebac">
                <div class="opentittle">开盲盒酷碰乐 3 月活动细则</div>
                <div class="rulebacchild">
                  <div class="rulecontent rulecontent2">
                    <div class="blacktittle">一、活动时间节点：</div>
                    <div>获得活动资格时间 2021年2月28日 至 2021年3月30日24时</div>
                    <div>抽盲盒开放时间 2021年3月10日 至 2021年4月10日18时</div>
                    <div>优惠券有效期：获得优惠券之时至 2021年4月30日24时</div>
                    <div class="blacktittle">二、活动参与资格认定：</div>
                    <div>* 活动期间购买酷烹乐标准版的客户</div>
                    <div>* 活动期间酷烹乐标准版订单的推荐人</div>
                    <div>* 有尚未使用的尊享权的客户</div>
                    <div>以上三类客户可参加此次活动，资格认定以手机号为准，每个手机号只能参加一次抽取盲盒的活动</div>
                    <div class="blacktittle">三、盲盒内容和数量：</div>
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
                      <div>共计 3000 个超值盲盒(盲盒抽完，活动即自动停止)</div>
                    </div>
                    <div class="blacktittle">四、盲盒价格：538元</div>
                    <div class="blacktittle">五、具体细节</div>
                    <div class="graytittle">1) 活动期间购买酷烹乐（标准版）用户和相应转介绍客户（需正确填写介绍人）的手机号码在确认发货的一个工作日后自动获得抽奖资格</div>
                    <div class="graytittle">2) 抽奖平台：H5小游戏 3月10日上线。用下单程序填写的手机号登录，系统判断是否有资格</div>
                    <div>1. 有资格：进入直接抽奖</div>
                    <div>2. 无资格：咨询顾问或 400</div>
                    <div class="graytittle">3) 抽奖</div>
                    <div>1. 抽取次数最多 3 次，以最终确认结果为准，第三次抽取结果会自动确认结果</div>
                    <div>2. 前两次抽取会出现确认或放弃结果两个选择，第三次抽取结果会自动确认，确认后将收到以下短信内容：
                        亲爱的用户，恭喜您以 538 元的价格获得本次活动的 XXX 超值换购优
                        惠券一张，我司将于 3 个工作日内将对应的优惠券发放至您的账户内，
                        请于 30 日内登录 magimix 下单小程序，在我的优惠券中查看并使用优
                        惠券。如有疑问，请及时和您的美食顾问取得联系。
                    </div>
                    <div>举例 1：</div>
                    <div>用户小玛第一次抽中盲盒为果汁器，系统会扣除一次抽取机会并弹出对话
                        框抽中果汁器，同时要求选择“确认”或者“放弃”，小马选择确认则系
                        统将在三个工作日内把用 538 购买果汁器的优惠券自动发放到下单程序
                        后台。
                    </div>
                    <div>举例 2：</div>
                    <div>用户小捷第一次抽中盲盒为果汁器，系统会扣除一次抽取机会并弹出对话
                        框抽中果汁器，同时要求选择“确认”或者“放弃”，小捷不满意结果选
                        择“放弃”，则进入第二次抽取，第二次抽中酷烹乐标准版，小捷很喜欢
                        选择确认则系统将在三个工作日内把用 538 购买酷烹乐标准版的优惠券
                        自动发放到下单程序后台。
                    </div>
                    <div>举例 3：</div>
                    <div>用户小斯第一次抽中盲盒为大蒸锅，系统会扣除一次抽取机会并弹出对话
                        框抽中大蒸锅，同时要求选择“确认”或者“放弃”，小斯不满意结果选
                        择“放弃”，则进入第二次抽取，第二次抽中果汁器，小斯不满意结果选
                        择“放弃”，则进入第三次抽取，第三次抽中大蒸锅，由于次数用完抽奖
                        结果自动确认系统将在三个工作日内把用 538 购买大蒸锅的优惠券自动
                        发放到下单程序后台。
                    </div>
                    <div class="graytittle">4) 盲盒产品购买</div>
                    <div>1. 优惠券：确认抽奖结果后，在三个工作日内自动发放到下单程序后台</div>
                    <div>2. 购买：购买相应产品时使用优惠券抵扣，相应产品价格将变成 538 元，付款完成购买</div>
                    <div>3. 不购买：如果客户改变主意，可以不进行购买。优惠券将于 2021年4月30日24时自动消失</div>
                    <div class="graytittle">5) 发货</div>
                    <div>1. 盲盒奖品将于 2021 年 4 月底按照奖品下单先后次序发放</div>
                    <div class="graytittle">6) 退货</div>
                    <div>1. 活动期间正价购买的酷烹乐（标准版）退货问题与其所关联的盲盒权限绑定</div>
                    <div>2. 如果正价购买的酷烹乐（标准版）发起退货，其相关联的盲盒奖品和所绑定的转介绍关联的盲盒奖品，都需一并退回；奖品如已经打开则需补差价</div>
                    <div class="graytittle">7) 特权卡</div>
                    <div>特权卡为优先判定，即特权卡用户所对应手机号码可以直接进入 H5 活动页面参与抽盲盒，一旦进入抽盲盒阶段，特权卡将被视作使用</div>
                    <div class="graytittle">8) 关于手机号</div>
                    <div>1. 一个手机号最多只能参加一次抽盲盒活动</div>
                    <div>2. 已经参加过抽盲盒活动，后发起酷烹乐标准版退款退款，之后用相同手机号再次购买，也将没有抽盲盒的资格</div>
                    <div class="lastline">公司拥有活动解释权</div>
                  </div>
                </div>
              </div>
              <div class="agreegroup">
                <div class="agreerule" @click="agreeRule">已阅读，同意活动规则</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- 查看活动规则弹出框 -->
    <div class="openDia" v-show="prizeRule">
        <div class="contentBac">
          <div class="maskContent">
            <div class="closegroup" @click="closeRule">
              <img src="../assets/close.png" alt="" onclick ="return false">
            </div>
            <div class="whitebac">
              <div class="rulebac">
                <div class="opentittle">开盲盒酷碰乐 3 月活动细则</div>
                <div class="rulebacchild">
                  <div class="rulecontent">
                    <div class="blacktittle">一、活动时间节点：</div>
                    <div>获得活动资格时间 2021年2月28日 至 2021年3月30日24时</div>
                    <div>抽盲盒开放时间 2021年3月10日 至 2021年4月10日18时</div>
                    <div>优惠券有效期：获得优惠券之时至 2021年4月30日24时</div>
                    <div class="blacktittle">二、活动参与资格认定：</div>
                    <div>* 活动期间购买酷烹乐标准版的客户</div>
                    <div>* 活动期间酷烹乐标准版订单的推荐人</div>
                    <div>* 有尚未使用的尊享权的客户</div>
                    <div>以上三类客户可参加此次活动，资格认定以手机号为准，每个手机号只能参加一次抽取盲盒的活动</div>
                    <div class="blacktittle">三、盲盒内容和数量：</div>
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
                      <div>共计 3000 个超值盲盒(盲盒抽完，活动即自动停止)</div>
                    </div>
                    <div class="blacktittle">四、盲盒价格：538元</div>
                    <div class="blacktittle">五、具体细节</div>
                    <div class="graytittle">1) 活动期间购买酷烹乐（标准版）用户和相应转介绍客户（需正确填写介绍人）的手机号码在确认发货的一个工作日后自动获得抽奖资格</div>
                    <div class="graytittle">2) 抽奖平台：H5小游戏 3月10日上线。用下单程序填写的手机号登录，系统判断是否有资格</div>
                    <div>1. 有资格：进入直接抽奖</div>
                    <div>2. 无资格：咨询顾问或 400</div>
                    <div class="graytittle">3) 抽奖</div>
                    <div>1. 抽取次数最多 3 次，以最终确认结果为准，第三次抽取结果会自动确认结果</div>
                    <div>2. 前两次抽取会出现确认或放弃结果两个选择，第三次抽取结果会自动确认，确认后将收到以下短信内容：
                        亲爱的用户，恭喜您以 538 元的价格获得本次活动的 XXX 超值换购优
                        惠券一张，我司将于 3 个工作日内将对应的优惠券发放至您的账户内，
                        请于 30 日内登录 magimix 下单小程序，在我的优惠券中查看并使用优
                        惠券。如有疑问，请及时和您的美食顾问取得联系。
                    </div>
                    <div>举例 1：</div>
                    <div>用户小玛第一次抽中盲盒为果汁器，系统会扣除一次抽取机会并弹出对话
                        框抽中果汁器，同时要求选择“确认”或者“放弃”，小马选择确认则系
                        统将在三个工作日内把用 538 购买果汁器的优惠券自动发放到下单程序
                        后台。
                    </div>
                    <div>举例 2：</div>
                    <div>用户小捷第一次抽中盲盒为果汁器，系统会扣除一次抽取机会并弹出对话
                        框抽中果汁器，同时要求选择“确认”或者“放弃”，小捷不满意结果选
                        择“放弃”，则进入第二次抽取，第二次抽中酷烹乐标准版，小捷很喜欢
                        选择确认则系统将在三个工作日内把用 538 购买酷烹乐标准版的优惠券
                        自动发放到下单程序后台。
                    </div>
                    <div>举例 3：</div>
                    <div>用户小斯第一次抽中盲盒为大蒸锅，系统会扣除一次抽取机会并弹出对话
                        框抽中大蒸锅，同时要求选择“确认”或者“放弃”，小斯不满意结果选
                        择“放弃”，则进入第二次抽取，第二次抽中果汁器，小斯不满意结果选
                        择“放弃”，则进入第三次抽取，第三次抽中大蒸锅，由于次数用完抽奖
                        结果自动确认系统将在三个工作日内把用 538 购买大蒸锅的优惠券自动
                        发放到下单程序后台。
                    </div>
                    <div class="graytittle">4) 盲盒产品购买</div>
                    <div>1. 优惠券：确认抽奖结果后，在三个工作日内自动发放到下单程序后台</div>
                    <div>2. 购买：购买相应产品时使用优惠券抵扣，相应产品价格将变成 538 元，付款完成购买</div>
                    <div>3. 不购买：如果客户改变主意，可以不进行购买。优惠券将于 2021年4月30日24时自动消失</div>
                    <div class="graytittle">5) 发货</div>
                    <div>1. 盲盒奖品将于 2021 年 4 月底按照奖品下单先后次序发放</div>
                    <div class="graytittle">6) 退货</div>
                    <div>1. 活动期间正价购买的酷烹乐（标准版）退货问题与其所关联的盲盒权限绑定</div>
                    <div>2. 如果正价购买的酷烹乐（标准版）发起退货，其相关联的盲盒奖品和所绑定的转介绍关联的盲盒奖品，都需一并退回；奖品如已经打开则需补差价</div>
                    <div class="graytittle">7) 特权卡</div>
                    <div>特权卡为优先判定，即特权卡用户所对应手机号码可以直接进入 H5 活动页面参与抽盲盒，一旦进入抽盲盒阶段，特权卡将被视作使用</div>
                    <div class="graytittle">8) 关于手机号</div>
                    <div>1. 一个手机号最多只能参加一次抽盲盒活动</div>
                    <div>2. 已经参加过抽盲盒活动，后发起酷烹乐标准版退款退款，之后用相同手机号再次购买，也将没有抽盲盒的资格</div>
                    <div class="lastline">公司拥有活动解释权</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- 登录弹出框 -->
    <div class="openDia2" v-if="islogin">
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
                  <input type="button" class="getcode gradientgetcodebtn" :value="codeBtnValue" @click="getCode" :disabled="canClick" @focus="refreshBody">
                </div>
              </div>
              <div>
                <div class="loginbtn" @click="login">登录</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- 无参加活动权限 -->
    <div class="openDia" v-if="isEntitled">
        <div class="contentBac">
          <div class="maskContent3">
            <div class="whitebac">
              <div class="nozg">您好，您尚未获得参加本次活动的权限，请咨询您的专属美食顾问。如您还没有专属顾问可拨打<a href="tel:4000210088"> 4000210088 </a>电话咨询。</div>
            </div>
          </div>
        </div>
    </div>
    <!-- 确认和放弃弹出框 -->
    <div class="openDia" v-if="winPrize">
        <div class="contentBac">
          <div class="maskContent4">
            <div class="whitebac">
              <div class="prizetittle">恭喜您，中奖了！</div>
              <div class="prizeimg"><img :src="prizeInfo.src" alt="" onclick ="return false"></div>
              <div class="prizetips2">
                {{'恭喜您获得价值' + prizeInfo.price + '元的' + prizeInfo.name + '一份'}}
              </div>
              <div class="draw-result">
                <div class="confirm" @click="keepPrize">确认</div>
                <div class="save" @click="getPrize('getagain')" v-show="clickNum!=0">放弃，再抽一次</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- 查看中奖结果弹出框 -->
    <div class="openDia" v-if="prizeResult">
        <div class="contentBac">
          <div class="maskContent5">
            <div class="closegroup" @click="closeResult">
              <img src="../assets/close.png" alt="">
            </div>
            <div class="whitebac" v-if="!isPrize">
              <div class="prizetittlegray">您还未进行抽奖活动</div>
              <div class="prizetips">您暂时未获得任何奖品。</div>
            </div>
            <div class="whitebac" v-if="isPrize">
              <div class="prizetittle">恭喜您，中奖了!</div>
              <div class="prizeimg"><img :src="userSeePrizeInfo.src" alt="" onclick ="return false"></div>
              <div class="prizetips3">
                {{'恭喜您获得价值' + userSeePrizeInfo.price + '元的' + userSeePrizeInfo.name + '一份'}}
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- 点击保留后跟短信一样内容的弹出框 -->
    <div class="openDia" v-if="confirmMessage">
        <div class="contentBac">
          <div class="maskContent5">
            <div class="closegroup" @click="confirmMessage = false">
              <img src="../assets/close.png" alt="" onclick ="return false">
            </div>
            <div class="whitebac">
              <div class="prizetips4">
                {{'亲爱的用户，恭喜您以538元的活动价格获得价值￥' + prizeInfo.price + '元的' + prizeInfo.name + '换购优惠券一张，我司将于3个工作日内将对应的优惠券发放至您的账户内，请于30日内登录magimix下单小程序，在我的优惠券中查看并使用优惠券。如有疑问，请及时和您的美食顾问取得联系。'}}
                <!-- {{'【Magimix】亲爱的用户，恭喜您以'+ prizeInfo.price + '元的价格获得本次活动的' + prizeInfo.name + '超值换购优惠券一张，我司将于3个工作日内将对应的优惠券发放至您的账户内，请于30日内登录magimix下单小程序，在我的优惠券中查看并使用优惠券。如有疑问，请及时和您的美食顾问取得联系。'}} -->
              </div>
            </div>
          </div>
        </div>
    </div>
    <Toast :msg="toastText" v-if="showToast" />
  </div>
</template>

<script>
// @ is an alias to /src
import Toast from "@/components/Toast.vue";
import Swiper from 'swiper';
import { getVerifyCode, logIn, getAllPrize, getAPrize, savePrize, userPrizeResult, postAgree, getUserInfo, getPrizeCount } from '../api/http.js'
import '../style/swiper.min.css'
import '../style/dia.scss'
import axios from 'axios'

export default {
  name: "Home",
  components: {
    Toast
  },
  data() {
    return {
      productNum: {
        countOne: 0,
        countTwo: 0,
        countThree: 0,
        countFour: 0,
        countFive: 0,
      },
      swiperTimer: '',//创建swiper的定时器
      moreThen2: true, //中奖列表数据
      buttonDisable: false, // 碰按钮等ajax回来再点击
      confirmMessage: false, //点击确认奖品后的提示文字框
      getPrizeRule: false, //同意抽奖规则弹出框
      prizeRule: false, //奖品结果弹出框
      islogin: false, //登录弹出框
      isEntitled: false, //是否有资格抽奖
      winPrize: false, //中奖，确认和放弃弹出框
      prizeResult: false, //中奖结果弹出框，点击查看中奖结果
      codeBtnValue: "发送验证码", //发送验证码按钮展示文字
      waitTime: 60, //验证码等待时间
      isAnim: false, //盒子动画
      codeTimer: '', //验证码一次性定时器
      canClick: false, //验证码是否可点击
      showToast: false, //是否展示toast提醒
      toastText: "", //toast提醒文字
      phoneNum: "", //电话号码
      codeNum: "", //验证码
      toastTimer: "", //toast提醒定时器
      clickNum: 0, //页面碰之后的展示次数
      winnerList: [], //中奖名单列表
      prizeInfo: { //选则放弃确认弹出框和确认后跟短信内容一致弹出框的奖品信息展示
        price: "",
        name: "",
        src: ""
      },
      houseMask: false, //跑马灯动画
      isPrize: false, //查看中奖结果是否中奖文字不同展示
      userSeePrizeInfo: { //查看中奖结果中奖后文字展示
        price: "",
        name: "",
        src: ""
      },
      houseTimer: null,//跑马灯定时器
      boxTimer: ""//抽奖纸箱子定时器
    }
  },
  created() {
    console.log(process.env)
    // 此时获取不到dom节点
    // 不涉及到dom操作的方法
    this.init()
  },
  mounted() {
    // 这个生命周期可以获取dom节点
    // this.showReg(); //一进页面就展示登录弹出框
    this.moniterNet();//监听网络
    this.getPrizeList();//调取中奖列表
  },

  methods: {
    init() {
      this.showReg(); //一进页面就展示登录弹出框
    },

    //获取剩余奖品数量接口
    getPrizeCounts(){
      getPrizeCount().then(res=>{
        if (res.code === 0) {
          console.log(res)
          this.productNum = {
            countOne: res.datas[0]['quantity'],
            countTwo: res.datas[1]['quantity'],
            countThree: res.datas[2]['quantity'],
            countFour: res.datas[3]['quantity'],
            countFive: res.datas[4]['quantity'],
          }
        } else if(res.code === -1 && res.message == 'token失效'){
          this.tokenLostShowLog()
        } else {
          this.openToast(res.message);
          this.closeToast();
        }
      })
    },

    // 用户信息数据
    getUserInfo() {
      getUserInfo().then(res=>{
        
        if (res.code === 0) {
          const storage = {}
          storage.loginUser = res.data
          storage.token = JSON.parse(localStorage.getItem('cj_userData'))&&JSON.parse(localStorage.getItem('cj_userData')).token
          localStorage.setItem('cj_userData', JSON.stringify(storage))

          this.clickNum = JSON.parse(localStorage.getItem('cj_userData'))&&(JSON.parse(localStorage.getItem('cj_userData')).loginUser.number) || 0

        } else if(res.code === -1 && res.message == 'token失效'){
          this.tokenLostShowLog()
        } else {
          this.openToast(res.message);
          this.closeToast();
        }
      }).finally(()=>{
        this.getPrizeCounts()
      })
    },
    //中奖列表中滚动效果插件
    creatSwiper() {
      new Swiper ('.swiper-container', {
        autoplay : true,     
        speed: 3000,
        loop : true,
        direction: 'vertical',
        freeMode: true,
        autoplayDisableOnInteraction: false,
        observer: true,
        observeParents: true,
        slidesPerView : 3,
        spaceBetween : 0,
      })
    },
    //刷新页面，防止登录弹出框点击不了
    refreshBody(){
      document.querySelector('body').scrollTop = document.querySelector('body').scrollTop + 1;
      window.scroll(0, 0);
    },

    //用户点击同意规则
    agreeRule() {
      postAgree().then(res=>{
        if (res.code === 0) {
          this.closeAgreeBox();
          this.openToast("您已确认同意活动规则");
          this.closeToast();

          this.refreshStorage()
        }else if(res.code === -1 && res.message == 'token失效'){
          this.tokenLostShowLog()
        }else {
          this.openToast(res.message);
          this.closeToast();
        }
      }).finally(()=>{
      })
    },

    refreshStorage() {
      const storage = JSON.parse(localStorage.getItem('cj_userData'))&&JSON.parse(localStorage.getItem('cj_userData'))
      storage.loginUser.agreeStatus = '2'
      localStorage.setItem('cj_userData', JSON.stringify(storage))
    },

    //获取中奖列表
    getPrizeList(){
      axios({
        method: 'get',
        // url: `${process.env.BASE_URL}/lottery/lotteryUser/getWinLotteryUserList`,
        url: `${process.env.VUE_APP_URL}/lotteryUser/getWinLotteryUserList`,
        headers: {
          // 'token': JSON.parse(localStorage.getItem('cj_userData'))&&(JSON.parse(localStorage.getItem('cj_userData')).token) || ""
        }
      }).then(res=>{
        if (res.data.code === 0) {
          // console.log("中奖列表");
          // console.log(res)
          res.data.datas.forEach((item)=>{
            item.minutes = this.dealMinutes(item.minutes);
          });
          this.winnerList = res.data.datas;
         
          if(this.winnerList.length > 2){
            this.swiperTimer = setTimeout(()=>{
              clearTimeout(this.swiperTimer);
              this.creatSwiper();
            }, 1000)
          }else {
            this.moreThen2 = false;
          }
          
        }else {
          this.openToast(res.data.message);
          this.closeToast();
        }
      }).finally(()=>{
        console.log('成功与否都会执行')
      })
    },

    //抽奖
    getPrize(getagain) {
      let params = {
        type: 1
      };
      // 点击再抽一次过来的，先关闭掉再抽一次的弹出框
      if(getagain == 'getagain'){
        this.closeWinPrize();
        params.type = 2;
        
        const storage = JSON.parse(localStorage.getItem('cj_userData'))&&JSON.parse(localStorage.getItem('cj_userData'))
        storage.loginUser.confirmStatus = '2'
        localStorage.setItem('cj_userData', JSON.stringify(storage))
      }

      const userInfo = JSON.parse(localStorage.getItem('cj_userData'))

      //判断用户是否点击同意规则，未同意弹出同意提示框
      if(userInfo.loginUser.agreeStatus  === '1' ){
        this.fixBody();
        this.getPrizeRule = true;
        return;
      }

      // 用户抽奖后未点击确认或者再抽一次，下次点击抽奖按钮提醒用户再次选择
      if(userInfo.loginUser.confirmStatus === '1' && userInfo.loginUser.prizeInfo){
        this.prizeInfo.name = userInfo.loginUser.prizeInfo && userInfo.loginUser.prizeInfo.name || '';
        this.prizeInfo.price = userInfo.loginUser.prizeInfo && userInfo.loginUser.prizeInfo.price || '';
        this.prizeInfo.src = userInfo.loginUser.prizeInfo && userInfo.loginUser.prizeInfo.image || '';
        //展示放弃保留弹出窗
        this.winPrize = true;
        return;
      }

      if (this.clickNum <=0 ) {
        // this.openToast('剩余抽奖次数为0');
        // this.closeToast();
        this.showResult()
        return
      }
      //抽奖按钮先改成不可点击
      this.buttonDisable = true;
      //抽奖动画效果
      this.houseMask = true; //跑马灯

      getAPrize(params.type).then(res=>{
        if (res.code === 0 && res.data !== null) {
          this.isAnim = true;
          this.houseMask = false;
          this.boxTimer = setTimeout(()=>{
            clearTimeout(this.boxTimer);
            this.winPrize = true;
            this.isAnim = false;
          }, 1000)

          //更新碰之后的点击次数
          this.clickNum = res.data.number

          //更新本地缓存抽奖次数
          let cj_userData = JSON.parse(localStorage.getItem('cj_userData'));
          cj_userData.loginUser.number = this.clickNum;
          localStorage.setItem('cj_userData', JSON.stringify(cj_userData));

          //获奖信息
          if(res.data.prizeInfo !== null){
            this.prizeInfo.name = res.data.prizeInfo.name;
            this.prizeInfo.price = res.data.prizeInfo.price;
            this.prizeInfo.src = res.data.prizeInfo.image;
          }

        }else if(res.code === -1 && res.message == 'token失效'){
          this.tokenLostShowLog()
        }else {
          this.openToast(res.message);
          this.closeToast();
        }
      }).finally(()=>{
        this.buttonDisable = false;
        this.getPrizeCounts()
        this.houseMask = false; //跑马灯结束
      })
    },

    //跑马灯动画
    animationHouse() {
      this.houseMask = true;
      this.houseTimer = setTimeout(()=>{
        clearTimeout(this.houseTimer);
        this.isAnim = true;
        this.houseMask = false;
        this.boxTimer = setTimeout(()=>{
          clearTimeout(this.boxTimer);
          this.winPrize = true;
          this.isAnim = false;
        }, 1000)
      }, 2500)
    },

    //检查是否有token
    showReg() {
      const token = JSON.parse(localStorage.getItem('cj_userData'))&&(JSON.parse(localStorage.getItem('cj_userData')).token) || ""
      if (token) {
        this.clickNum = JSON.parse(localStorage.getItem('cj_userData'))&&(JSON.parse(localStorage.getItem('cj_userData')).loginUser.number) || 0
        this.getUserInfo()
        return
      }
      
      this.fixBody();
      this.islogin = true;
    },

    //登录
    login() {
      //ajax
      if(this.phoneNum == ""){
        this.openToast("请输入手机号！");
        this.closeToast();
        return;
      }

      if(this.codeNum == ""){
        this.openToast("请输入验证码！");
        this.closeToast();
        return;
      }
      let params = {
        'num': this.phoneNum,
        'code': this.codeNum
      }
      logIn(params).then(res=>{
        if (res.code === 0) {
          this.closeReg(); //关闭登陆弹出框
          //像缓存里存用户数据
          localStorage.setItem('cj_userData', JSON.stringify(res.data));
          //更新点击次数的显示
          this.clickNum = res.data && res.data.loginUser && res.data.loginUser.number || 0
          //判断用户是否点击同意规则，未同意弹出同意提示框
          if(res.data && res.data.loginUser && res.data.loginUser.agreeStatus === '1'){//用户未点击同意
            this.fixBody();
            this.getPrizeRule = true;
          }

        }else {
          this.openToast(res.message);
          this.closeToast();
        }
      }).finally(()=>{
        this.getPrizeCounts()
      })
    },

    //获取验证码
    getCode() {
      this.refreshBody();
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
          this.openToast("验证码已发送！");
          this.closeToast();
        }else if(res.code == -1){
          this.closeReg();
          this.isEntitled = true;
        }
      }).finally(()=>{
        console.log('成功与否都会执行');
      })
    },

    //验证码时间倒计时
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
    
    //保留奖品操作
    keepPrize() {
      //保留奖品
      this.closeWinPrize();
      //如果是最后一次中奖保留奖品，不需要给后台发请求
      if(this.clickNum == 0) {
        this.confirmMessage = true;
        this.getPrizeCounts()
        return;
      }
      //调取后台接口通知保留
      savePrize().then(res=>{
        if (res.code === 0) {
          this.confirmMessage = true;
          // 次数变为0
          this.clickNum = 0;
          // 更新本地缓存里的次数
          let cj_userData = JSON.parse(localStorage.getItem('cj_userData'));
          cj_userData.loginUser.number = 0;
          localStorage.setItem('cj_userData', JSON.stringify(cj_userData));
        }else if(res.code === -1 && res.message == 'token失效'){
          this.tokenLostShowLog();
        }else {
          this.openToast(res.message);
          this.closeToast();
        }
      }).finally(()=>{
        this.getPrizeCounts()
      })
    },
    
    //弹出toast提醒
    openToast(text) {
      this.toastText = text;
      this.showToast = true;
    },

    //关闭toast提醒
    closeToast() {
      this.toastTimer = setTimeout(()=>{
        clearTimeout(this.toastTimer);
        this.showToast = false;
      }, 1500)
    },

    //中将时间处理函数
    dealMinutes(minutes) {
      if(!minutes){
        return; 
      }
      if(minutes >= 60 && minutes < (24 * 60)){
        minutes = parseInt(minutes / 60) + "小时" + ((minutes % 60) > 0 ? (minutes % 60) + "分钟" : "")
      }else if(minutes > (24 * 60)){
        let day = parseInt(minutes / (24 * 60)) + "天"
        let hours = parseInt((minutes % (24 * 60)) / 60) + "小时"
        let second = parseInt(parseInt((minutes % (24 * 60)) % 60)) + "分钟"
        minutes = day + hours + second
      }else {
        minutes = minutes + "分钟"
      }
      // console.log(minutes);
      return minutes;
    },

    //断网监听
    moniterNet() {
      let el = document.querySelector('body');  
      if (el.addEventListener) {  
        window.addEventListener("offline", ()=> {  
          this.openToast('网络无连接');
          this.closeToast();
        }, true);  
      }  
      else if (el.attachEvent) {  
        window.attachEvent("onoffline", ()=> {  
          this.openToast('网络无连接');
          this.closeToast();
        });  
      }  
      else {    
        window.onoffline = function () {  
          this.openToast('网络无连接');
          this.closeToast();
        };  
      } 
    },

    //查看自己是否中奖
    showResult(){
      userPrizeResult().then(res=>{
        if (res.code === 0) {
          if(res.data&&(res.data.prizeInfo !== null)){//中奖了
            this.userSeePrizeInfo.name = res.data.prizeInfo.name
            this.userSeePrizeInfo.src = res.data.prizeInfo.image
            this.userSeePrizeInfo.price = res.data.prizeInfo.price
            this.isPrize = true
            this.prizeResult = true;
          }else {//未中奖展示未中奖弹出框
            this.isPrize = false
            this.prizeResult = true;
          }
        }else if(res.code === -1 && res.message == 'token失效'){
          this.tokenLostShowLog();
        }else {
          this.openToast(res.message);
          this.closeToast();
        }
      }).finally(()=>{
        console.log('成功与否都会执行');
      })
      
    },
    //关闭是否同意弹出框
    closeAgreeBox(){
      this.freeBody();
      this.getPrizeRule = false
    },
    //关闭中奖结果弹出框
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
    //登陆超时
    tokenLostShowLog(){
      this.openToast("登录超时，请重新登录");
      this.closeToast();
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
  img{ pointer-events: none; }

  .addanim {
    -webkit-animation: move1 0.5s ease-in 1;
    animation: move1 0.5s ease-in 1;
    animation-fill-mode:forwards;
    -webkit-animation-fill-mode: forwards;
  }

  @keyframes move1 {
    from {  margin-top: -135px;  }
    to {  margin-top: 0;  }
  }

  .swiper-container{
    height: 128px;
  }

  .addWanimate2 {
    animation: yellobac 0.5s infinite;
    animation-fill-mode: forwards;
  }

  .mask1{
    margin: auto;
    width: 100%;
    height: 1011px;
    background-image: url('../assets/whitemask.png');
    background-size: 100% 100%;
    position: absolute;
    bottom: -8.6px;
    z-index: 2;
  }

  @keyframes yellobac {
      0% {
        background-image: url('../assets/whitemask.png');
      }
      50% {
        background-image: url('../assets/yellowmask.png');
      }
      100% {
        background-image: url('../assets/whitemask.png');
      }
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
      z-index: 4;
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
      width: 100%;
      height: 1021px;
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
      left: 120px;
      z-index: 1;
      border-radius: 15px;
      overflow: hidden;
    }
    
    .prizebox{
      margin-top: -135px;
      width: 124px;
      height: 124px;
      // border: 4px solid #ffffff;
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
      right: 81px;
      z-index: 3;
      font-size: 45.19px;
      color: #ffffff;
      font-weight: bold;
      padding: 0;
      margin: 0;
      outline: none;
      appearance: none;
      background-color: transparent;
      border: none;

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
      left: 115px;
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
          width: 366px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: left;
        }
      }
    }
  }
</style>

