<template>
  <Footer class="footer_guide border-1px">
    <span class="guide_item " :class="{on:$route.path === '/shouye'}" @click="goto('/shouye')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on:$route.path === '/fenlei'}" @click="goto('/fenlei')">
      <span class="item_icon">
        <i class="iconfont icon-sousuoremenfenlei"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on:$route.path === '/shiwu'}" @click="goto('/shiwu')">
      <span class="item_icon">
        <i class="iconfont icon-shiwu-shu"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" :class="{on:$route.path === '/gouwuche'}" @click="goto('/gouwuche')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on:$route.path === '/geren'}" @click="goto('/geren')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </span>
  </Footer>
</template>

<script>

  export default {
    name: 'App',
    methods: {
      goto(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .footer_guide //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 97px
    display flex

    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 0.05rem
      color #999999
      &.on
        color red
      span
        font-size 30px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 48px
</style>
