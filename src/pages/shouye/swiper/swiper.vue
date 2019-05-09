<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/3.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/4.jpg" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css';
  import Swiper from 'swiper'
  export default {
    name:'NavSwiper',
    mounted() {
      new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true, // 循环模式选项
        autoplay: true, // 自动轮播
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-pagination-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 750px
    height 400px
    img
      width 100%
      height 100%
</style>
