<template>
    <div class="van-overlay">
        <div class="wrapper">
            <div class="block">{{msg}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
.van-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 1000000;
}
.wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 100%;
}
.block {
    max-width: 500px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 20px 30px;
    border-radius: 8px;
    color: #ffffff;
    font-size: 26px;
}
</style>
