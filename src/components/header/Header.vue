<template>
 <Header class="header_guide">
     <div class="header-inner">
       <img class='logo' src="./images/logo.png" alt="">
       <div class="header-input">
         <i class="iconfont icon-search"></i>
         <span class="placeholder">搜索商品, 共22129款好物</span>
       </div>
       <button class="login">登录</button>
     </div>
   <div class="header_nav" ref="wrapper">
     <ul class="nav_lists" style="margin:0;padding-left:20px">
       <li class="list_item active">
         <span class="item_name ">推荐</span>
       </li>
       <li class="list_item" v-for="(item,index) in navList" :key="index">
         <span class="item_name" >{{item.text}}</span>
       </li>
     </ul>
       <div class="header-toggle">
         <span class="iconfont icon-arrow-bottom"></span>
       </div>
   </div>
 </Header>
</template>

<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll'
  export default {

    computed:{
      ...mapState({
        navList: state=>state.shouye.navList
      })
    },

    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollX: true,
          click: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/mixins.styl'
.header_guide
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  width 750px
  height 150px
  .header-inner
    display flex
    flex-flow row nowrap
    justify-content space-around
    align-items center
    height 88px
    width 100%
    background #fff
    box-sizing border-box
    .logo
      width 138px
      height 40px
    .header-input
      position relative
      width 442px
      height 56px
      line-height 56px
      font-size 30px
      background-color: #ededed;
      border-radius 10px
      padding 0 10px
      i
        font-size 48px
      .placeholder
        position absolute
        margin auto
        display inline-block
        color: #666
        text-align center
    .login
      height: 40px
      font-size 24px
      border-radius 10px
      outline none
      color $red
      border 1px solid $red
      background-color #fff
  .header_nav
    position relative
    width 100%
    height 60px
    overflow hidden
    .nav_lists
      width 1650px
      height 60px
      font-size 30px
      box-sizing content-box
      .list_item
        float left
        height 50px
        margin 5px 20px
        list-style none
        text-align center
        color: #333;
        &.active
          border-bottom 5px solid $red
          color $red
    .header-toggle
      position absolute
      right 0
      top -5px
      width 99px
      height 40p
      line-height 40px
      text-align center
      background-color #fff
      .icon-arrow-bottom
        font-size 40px



</style>
