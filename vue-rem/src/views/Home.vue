<template>
  <div class="home">
    <div>
      <div class="topbac">
        <div><img src="../assets/logo.png" alt="" class="logo"></div>
        <div class="banner"></div>
        <div></div>
      </div>
      <div class="bottombac"></div>
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
  }
  .bottombac{
    width: 100%;
    height: 1285px;
    background-image: url("../assets/bottombac.jpg");
    background-size: 100% 100%;
  }
  .logo{
    width: 325px;
  }
</style>

