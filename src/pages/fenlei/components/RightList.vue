<template>
  <div class="right_list">
    <div class="container_right">
      <div class="right_side">
        <div class="side_up">
          <img :src="categories.bannerUrl" v-if="categories">
        </div>
        <div class="side_down">
          <ul class="down_lists" v-if="categories">
            <li class="lists_item" v-for="(item, index) in categories.subCateList" :key="index">
              <div class="lists_img"><img :src="item.bannerUrl" alt=""></div>
              <div class="lists_name">{{item.name}}</div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        categories: [],
        categoryId: ''

      }
    },
    computed: {
      ...mapState({
        categorys: state => state.categorys.categorys
      })
    },
    mounted() {
      this.categoryId = this.$route.query.id ? this.$route.query.id : '1022001'
    },
    watch: {
      $route(){
        this.categoryId = this.$route.query.id;
        this.categories = this.categorys.find(item => item.id === categoryId * 1)
      },
      category() {
        this.categories = this.categorys.find(item => item.id === categoryId * 1)
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container_right
    float left
    padding 30px 30px 21px 30px
    .right_side
      width 528px
      height 1097px
      .side_up
        width 528px
        height 192px
        margin-bottom 32px
      /*background-image url("../images/fenlei.jpg")
      background-position 100% 100%*/
      .side_down
        width 528px
        height 1080px
        .down_lists
          display flex
          flex-direction row
          align-content space-around
          flex-flow row wrap
          width 100%
          height 100%
          .lists_item
            width 144px
            height 216px
            margin-right 30px
            .lists_img
              width 144px
              height 144px
            .lists_name
              width 144px
              height 72px
              font-size 24px
              color: #333;
              text-align: center
</style>
