<template>
  <div id="app">
    <Layout>
      <Header>
        <top-header></top-header>
        <tabs-menu></tabs-menu>
      </Header>
      <Content  :style="{padding: hasPadding ? '1rem 2.5rem' : 0}">
        <router-view />
      </Content>
    </Layout>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader';
import TabsMenu from './components/TabsMenu';
import { flatMenu } from './config/menu';
import { mapActions } from 'vuex';
export default {
  name: 'App',
  data () {
    return {
      hasPadding: true,
    }
  },
  methods: {
    ...mapActions(['setActivePath', 'addMenuItem']),
  },
  watch:{
    $route(to){
      this.setActivePath(to.path);

      // no padding routes
      let arr = ['/monitor/global']
      this.hasPadding = arr.indexOf(to.path) >= 0 ? false : true
    }
  },
  mounted () {
    let path = this.$router.history.current.path
    if (path !== '/') {
      this.addMenuItem(flatMenu.find(item => item.path === path))
    }
  },
  components: {
    TopHeader,
    TabsMenu
  }
}
</script>

<style>
html { 
  font-size: 10px;
  min-width: 1080px;
}
@media screen and (min-width: 998px) {
  html { font-size: 12px; }
}
@media screen and (min-width: 1200px) {
  html { font-size: 14px; }
}
@media screen and (min-width: 1400px) {
  html { font-size: 16px; }
}
@media screen and (min-width: 2000px) {
  html { font-size: 18px; }
}
body {
  overflow-y: hidden;
}
/* 浮动 */
.pull-left{
  float: left;
}
.pull-right{
  float: right;
}
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
.clearfix{*+height:1%;}

/* 修复发布问题 */
.ivu-layout-header{
  height: 8rem !important;
  padding: 0 !important;
}
.ivu-layout-content{
  height: calc(100vh - 8rem);
  max-height: calc(100vh - 8rem);
  overflow-y: auto;
  background: rgb(236, 240, 245);
}
</style>
