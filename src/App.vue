<template>
    <div class="wrapper">
        <header-bar class="header-bar"></header-bar>
        <router-view></router-view>
    </div>
</template>

<style lang="less">
    @import "./assets/less/reset.less";
</style>

<script>
    import HeaderBar from './components/common/header-bar.vue';
    import 'babel-polyfill';
    export default {
        name: 'App',
        components: {
            'header-bar': HeaderBar
        }
    };
</script>