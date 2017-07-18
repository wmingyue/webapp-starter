<template>
    <div class="main clearfix">
        <sidebar-control class="side-bar auto-height"></sidebar-control>
        <div class="containers auto-height">
            <div class="con-main">
                <router-view></router-view>
            </div>
            <Loading></Loading>
            <Confirm></Confirm>
        </div>
    </div>
</template>
<style lang="less">
</style>

<script>
    import sidebarControl from '../common/sidebar-control.vue';
    import Confirm from '../base/confirm.vue';
    import Loading from '../base/loading.vue';
    // 用户中心的入口
    export default {
        components: {
            'sidebar-control': sidebarControl,
            Confirm,
            Loading
        }
    };
</script>