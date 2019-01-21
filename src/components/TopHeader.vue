<template>
    <div class="header-wpt clearfix">
        <h1 class='title pull-left'>基于VUE的企业级项目管理平台</h1>
        <div class="pull-right">{{username}} <a title="注销" @click='logout'><Icon type='md-power' /></a></div>
        <div class="pull-right">
            <Menu mode="horizontal" @on-select="handleSelect" :active-name="activePath">
                <Submenu 
                    v-for="(item, index) in menu" 
                    :key="index"
                    :name="item.name" >
                    <template slot="title">
                        {{item.title}}
                    </template>
                    <MenuItem 
                        v-for="(t, ind) in item.children"
                        :key="ind"
                        :to="item.path + t.path"
                        :name="item.path + t.path">{{t.title}}</MenuItem>
                </Submenu>
            </Menu>
        </div>
    </div>
</template>

<script>
import { menu, flatMenu } from '../config/menu.js';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'TopHeader',
    computed: {
        ...mapGetters({
            activePath: 'getActivePath'
        }),
    },
    data () {
        return {
            username: '平台管理员',
            menu: [...menu.slice(1)]
        }
    },
    methods: {
        ...mapActions(['addMenuItem']),
        handleSelect(name) {
            this.addMenuItem(flatMenu.find(item => item.path === name));
        },
        logout () {

        }
    }
}
</script>

<style scoped>
.header-wpt{
    height: 5rem;
    line-height: 5rem;
    background: #f1faff;
    color: #595959;
    border-bottom: 1px solid #e7e7e7;
    font-size: 0.875rem;
    padding: 0 1.25rem;
}
.title {
    font-size: 1.5rem;
    color: #5e5e5e;
    font-weight: 300;
}
.ivu-menu-horizontal{
    height: 5rem;
    line-height: 5rem;
    background: transparent;
    margin-right: 4rem;
    font-size: .875rem;
}
</style>


