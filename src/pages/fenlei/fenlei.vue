<template>
  <div class="fenlei">
    <div class="fenlei_title">
      <div class="title_input">
        <i class="iconfont icon-search"></i>
        <span>搜索商品, 共22608款好物</span>
      </div>
    </div>
    <div class="fenlei_container">
      <div class="container_left" ref="left_nav">
        <ul class="left_nav">
          <!--active-->
          <li  v-for="(item,index) in categorys" :key="index"
              :class="{active:currentId*1 === item.id}">
            <router-link :to="{ name:'rightlist',query:{id:item.id}}">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <RightList/>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex';
  import RightList from './components/RightList'

  export default {
    data() {
      return {
        currentId: ''
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$store.dispatch('getFeileiData')
        this.currentId = this.$route.query.id ? this.$route.query.id:'1022001'
        this.scroll = new BScroll(this.$refs.left_nav, {
          scrollY: true,
          click: true
        })
      })
    },
    computed: {
      ...mapState({
        categorys: state => state.categorys.categorys
      })
    },
    watch:{
      $route(){
        this.currentId = this.$route.query.id
      }
    },
    components: {
      RightList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .fenlei_title
    z-index 100
    bottom-border-1px(gray)
    position relative
    width 750px
    height 88px
    .title_input
      display flex
      flex-flow row nowrap
      justify-content center
      align-items center
      position absolute
      width 690px
      top: 0
      right: 0
      bottom: 0
      left: 0
      margin auto
      height 56px
      color #666
      font-size 32px
      background-color #ededed
      .icon-search
        font-size 48px
      span
        display block

  .fenlei_container
    overflow hidden
    width 750px
    height 1148px
    .container_left
      float left
      width 162px
      height 100%
      .left_nav
        font-size 30px
        li
          display inline-block
          width 162px
          height 50px
          margin-top 40px
          text-align center
          &.active
            color #ab2b2b
            border-left 5px solid $red

</style>
