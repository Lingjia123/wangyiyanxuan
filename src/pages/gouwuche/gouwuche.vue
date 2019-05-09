<template>
  <div class="gouwuche">
    <div class="title">
      <div class="title1">
        <span>购物车</span>
        <span>领券</span>
      </div>
    </div>
    <div class="list">
      <ul class="list_item">
        <li class="item">
          <i class="item-icon"></i>
          <span>网易自营品牌</span>
        </li>
        <li class="item">
          <i class="item-icon"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="item">
          <i class="item-icon"></i>
          <span>48小时快速退款</span>
        </li>
      </ul>
    </div>
    <div class="gouwuche-wrap">
    <div class="gouwuche-img">
      <img src="./gouwuche.png" alt="">
    </div>
      <div class="login">
        <span class="name">去添加点什么吧</span>
        <div class="log"><span>登录</span></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .title
    width 100%
    height 88px
    .title1
      clearFix()
      width 690px
      height 88px
      line-height 88px
      margin 0 auto
      span
        float left
        display inline-block
        font-size 36px
        &:nth-of-type(2)
          float right
  .list
    background-color: #f4f4f4;
    .list_item
      width 100%
      height 72px
      display flex
      justify-content space-around
      align-items center
      .item
        list-style none
        font-size 24px
        &:nth-of-type(1)
          i
            background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
        &:nth-of-type(2)
          i
            background-image url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
        &:nth-of-type(3)
          i
            background-image url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
        .item-icon
          width 32px
          height 32px
          background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
          background-size 32px 32px
          background-repeat no-repeat
          background-position center
          margin 0 10px 0 0
          display inline-block
  .gouwuche-wrap
    position relative
    width 750px
    height 1246px
    background-color: #f4f4f4;
    .gouwuche-img
      position absolute
      top 0
      right 0
      left 0
      bottom 0
      margin  auto
      width 100%
      height 300px
      img
        margin 0 auto


    .login
      width 100%
      height 169px
      position absolute
      top 700px
      .name
        position absolute
        top 0
        left 300px
        display inline-block
        text-align center
        font-size 24px
        color #999

      .log
        position absolute
        bottom 0
        width 480px
        height 92px
        line-height 92px
        text-align center
        background-color $red
        left 130px
        span
          display inline-block
          font-size 36px
          color white

</style>
