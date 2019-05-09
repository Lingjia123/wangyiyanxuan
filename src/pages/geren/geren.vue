<template>
  <div class="profile">
    <Header class="header-contatiner">
      <div class="header_up">
        <div class="up_left">
          <i class="icon iconfont icon-shouye" @click="$router.back()"></i>
          <div class="left_title">
            <img src="./logo.png" alt="">
          </div>
        </div>
        <div class="up_right">
          <i class="icon iconfont icon-search"></i>
          <i class="icon iconfont icon-gouwuche"></i>
        </div>
      </div>
    </Header>
    <div class="profile_container">
      <div class="container">
        <div class="container_up">
          <img src="./wangyiyanxuan.png" alt="">
        </div>
        <div class="container_middle">
          <button class="button-up">
            <span class="button_name1">手机号码登录</span>
          </button>
          <button class="button-down">
            <span class="button_name2">邮箱帐号登录</span>
          </button>
          <div class="container_bottom">
            <span>手机号快捷注册</span>
            <i></i>
          </div>
        </div>
      </div>
    <div class="thirdWrap">
      <div class="itemwrap">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="itemwrap">
        <i class="iconfont icon-qq"></i>
          <span>QQ</span>
      </div>
      <div class="itemwrap">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
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
.profile
  .header-contatiner
    position relative
    width 100%
    height 87px
    background-color #fafafa
    .header_up
      position relative
      width 700px
      height 87px
      margin 0 auto
      .up_left
        display flex
        justify-content space-between
        align-items center
        width 610px
        height 100%
      .icon-shouye
        font-size 75px
      .left_title
        position absolute
        margin auto
        top 0
        left 0
        right 0
        bottom 0
        width 320px
        height 87px
        line-height 87px
        font-size 36px
        img
          position absolute
          margin auto
          top 0
          left 0
          right 0
          bottom 0
          width 170px
          height 54px
          background-position center


      .up_right
        position absolute
        width 140px
        height 100%
        right 0
        top 0
        display flex
        justify-content space-between
        align-items center
        i
          font-size 75px
          &:nth-of-type(2)
            font-size 60px




  .profile_container
    width 750px
    height 1246px
    background: #F2F5F4;
    .container
      width 100%
      height 700px
      .container_up
        position relative
        width 100%
        height 408px
        img
          position absolute
          margin auto
          top 0
          left 0
          right 0
          bottom 0
          width 266px
          height 90px
      .container_middle
        width 670px
        height 207px
        padding 0 20px
        margin 0 auto
        .button-up,.button-down
          width 100%
          height 92px
          border 1px solid $red
          margin-bottom 32px
          .button_name1,.button_name2
            text-align center
            font-size 32px
          .button_name1
            color white
          .button_name2
            color $red

        .button-up
          background-color $red


      .container_bottom
        position absolute
        width 690px
        height 40px
        span
          position absolute
          margin auto
          top 0
          left 0
          right 0
          bottom 0
          display inline-block
          font-size 24px
          text-align center

    .thirdWrap
      display flex
      justify-content  center
      position absolute
      bottom 100px
      width 750px
      height 38px
      .itemwrap
        position relative
        width 182px
        height 38px
        line-height 38px
        span
          display inline-block
          position absolute
          margin-left 40px
          font-size 24px
        i
          position absolute
          top 0
          width 48px
          height 38px
          display inline-block
          font-size 36px



</style>
