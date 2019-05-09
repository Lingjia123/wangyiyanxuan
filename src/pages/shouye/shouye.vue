<template>
  <div>
    <Header/>
    <div class="main">
      <div class="shouye-content">
        <NavSwiper ref="swiper"/>
        <div class="protect-rule">
          <ul class="rule_item" style="margin:0;padding: 0 10px">
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
        <div class="navs">
          <ul class="nav-container" style="margin:0;padding:0">
            <li class="nav_item" v-for="(nav,index) in navList" :key="index">
              <span><img :src="nav.picUrl" alt=""></span>
              <div>{{nav.text}}</div>
            </li>
          </ul>
        </div>
        <div class="card">
          <div class="card_title">
            <span>-新人专享礼-</span>
          </div>
          <div class="card_content">
            <div class="content_left">
              <div class="left-title">新人专享礼包</div>
              <div class="imgwrap"><img src="./swiper/images/yuan.png" alt=""></div>
            </div>
            <div class="content_right">
              <div class="right_up ">
                <div class="up">
                  <span class="name1">福利社</span>
                  <span class="name2">今日特价</span>
                  <div class="picWrap"><img src="./swiper/images/up.png" alt="">
                    <div class="discount">
                      <span class="line1">￥170</span>
                      <span class="line1">￥299</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right_dowm">
                <div class="up">
                  <span class="name1">福利社</span>
                  <span class="name2">今日特价</span>
                  <div class="picWrap"><img src="./swiper/images/yashua.png" alt="">
                    <div class="discount">
                      <span class="line1">￥170</span>
                      <span class="line1">￥299</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Manufacturers/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';

  import Header from '../../components/header/Header'
  import NavSwiper from './swiper/swiper'
  import Manufacturers from './Manufacturers/Manufacturers'


  export default {
    mounted() {
      this.$nextTick(() => {
        this.$store.dispatch('getShouyeData')
        const height = document.documentElement.clientHeight
        const content = document.querySelector('.main')
        content.style.height = height + 'px'
        this.scroll = new BScroll('.main', {
          click: true,
          scrollY: true
        })
      })
    },
    computed: {
      ...mapState({
        navList: state => state.shouye.navList
      })
    },
    components: {
      Header,
      NavSwiper,
      Manufacturers
    },


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .main
    display: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .protect-rule
      width 100%
      height 72px
      color: #B4282D;
      .rule_item
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

    .nav-container
      width 750px
      height 372px
      display flex
      flex-direction row
      align-content space-around
      flex-flow row wrap
      .nav_item
        flex 1
        width 110px
        height 156px
        list-style none
        font-size 24px
        margin 10px 20px 9px
        img
          width 110px
          height 110px

  .card
    z-index -99
    width 750px
    height 528px
    margin 20px 0
    .card_title
      position relative
      width 690px
      height 90px
      line-height 90px
      padding 0 30px
      span
        display inline-block
        position absolute
        left: 0
        right: 0
        bottom: 0
        top: 0
        margin auto
        width 250px
        font-size 42px

    .card_content
      clearFix()
      width 720px
      padding-left 30px
      height 438px
      .content_left
        width 342px
        height 434px
        margin-right 4px
        background: #F9E9CF;
        float left
        .left-title
          width 312px
          height 48px
          padding-left 30px
          padding-top 30px
          font-size 40px
        .imgwrap
          width 258px
          height 257px
          margin 37px 42px

      .content_right
        position relative
        width 342px
        height 437px
        float left
        margin-bottom 5px
        .right_up, .right_dowm
          display flex
          width 100%
          height 215px
          background #FBE2D3;
          font-size 25px
          .up
            display flex
            flex-direction column
            .name1, .name2
              display block
              margin-top 10px
            .picWrap
              width 200px
              height 200px
              position absolute
              right: 0
              .discount
                width 90px
                height 90px
                position absolute
                top 0
                right 40px
                background: #F59524;
                border-radius: 50%;
                color: #fff;
                text-align: center;
                font-size 24px
        .right_dowm
          background-color #FFECC2


</style>

