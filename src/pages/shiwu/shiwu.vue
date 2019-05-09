<template>
  <div class="shiwu">
    <Header class="header-contatiner">
      <div class="header_up">
        <div class="up_left">
          <i class="icon iconfont icon-shouye"></i>
          <div class="left_title">
            <span>发现</span>
            <span>甄选家</span>
          </div>
        </div>
        <div class="up_right">
          <i class="icon iconfont icon-search"></i>
          <i class="icon iconfont icon-gouwuche"></i>
        </div>
      </div>
      <div class="header_down">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <li>
              <a href="#">推荐</a>
            </li>
            <li>
              <a href="#">好货内部价</a>
            </li>
            <li>
              <a href="#">回购榜</a>
            </li>
            <li>
              <a href="#">晒单</a>
            </li>
            <li>
              <a href="#">开发者日记</a>
            </li>
            <li>
              <a href="#">回购榜</a>
            </li>
            <li>
              <a href="#">回购榜</a>
            </li>
            <li>
              <a href="#">回购榜</a>
            </li>
            <li>
              <a href="#">回购榜</a>
            </li>
          </div>
        </div>

      </div>
    </Header>
    <ul class="shiwu_container">
      <li class="container_card1">
      <div class="card1">
        <div class="card1_title">
         <span> <img src="./yanxuan.png" alt=""></span>
          <span>迷妹</span>
        </div>
        <div class="card1_name">
          一口价！全部只要9.9、19.9……为了帮你省钱，选妹拼了！
        </div>
        <div class="haibao"></div>
        <div class="u-rcount">
          <i></i>
          <span>121w人看过</span>
        </div>
      </div>
    </li>
      <li class="container_card1">
        <div class="card1">
          <div class="card1_title">
            <span> <img src="./yanxuan.png" alt=""></span>
            <span>迷妹</span>
          </div>
          <div class="card1_name">
            一口价！全部只要9.9、19.9……为了帮你省钱，选妹拼了！
          </div>
          <div class="haibao"></div>
          <div class="u-rcount">
            <i></i>
            <span>121w人看过</span>
          </div>
        </div>
      </li>
      <li class="container_card1">
        <div class="card1">
          <div class="card1_title">
            <span> <img src="./yanxuan.png" alt=""></span>
            <span>迷妹</span>
          </div>
          <div class="card1_name">
            一口价！全部只要9.9、19.9……为了帮你省钱，选妹拼了！
          </div>
          <div class="haibao"></div>
          <div class="u-rcount">
            <i></i>
            <span>121w人看过</span>
          </div>
        </div>
      </li>
      <li class="container_card1">
        <div class="card1">
          <div class="card1_title">
            <span> <img src="./yanxuan.png" alt=""></span>
            <span>迷妹</span>
          </div>
          <div class="card1_name">
            一口价！全部只要9.9、19.9……为了帮你省钱，选妹拼了！
          </div>
          <div class="haibao"></div>
          <div class="u-rcount">
            <i></i>
            <span>121w人看过</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css';
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
 .shiwu
   .header-contatiner
     width 100%
     height 192px
     background-color #fafafa
     .header_up
       position relative
       width 700px
       height 100px
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
          width 320px
          height 100%
          line-height 100px
          font-size 36px
          span
            display inline-block
            &:nth-of-type(1)
              color $red
              font-size 58px
              margin-right 10px


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

     .header_down
       width 750px
       height 92px
       background pink
       .swiper-container
         height 100%
         line-height 100%
         width 750px
         width
         li
          font-size 36px
          margin 0 15px



   .shiwu_container
     width 750px
     height 18677px
     .container_card1
       width 750px
       height 687px
       padding 36px 30px
       .card1
         width 690px
         height 604px
         .card1_title
           position relative
           width 100%
           height 54px
           line-height 54px
           img
             border-radius 50%
           span
             position absolute
             top 0
             font-size 36px
             display inline-block
             &:nth-of-type(2)
               left 74px


         .card1_name
           width 690px
           height 104px
           font-size 36px
           margin 8px 0 16px 0
         .haibao
           width 690px
           height 376px
           background-image url("./shiwu.jpg")
           background-position 100% 100%
         .u-rcount
           width 135px
           height 36px
           font-size 24px
           color #999
           left 30px
</style>
