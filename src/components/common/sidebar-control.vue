<template>
    <aside class="side-bar">
        <div class="list">
            <router-link class="first-menu" :to="{name: 'controllerList'}" :class="{'sub-active': subActive === 'controllerList'}">
                <div>
                    <i class="iconfont">&#xe62e;</i>
                    <span class="link">列表页</span>
                </div>
            </router-link>
        </div>
    </aside>
</template>
<style lang="less" scoped>
    @import "../../assets/less/sidebar.less";
</style>
<script>
    export default {
        data() {
            return {
                subActive: '',
                secondMenu: ''
            };
        },
        watch: {
            '$route.path': function() {
                this.subActive = this.$route.name;
                this.secondMenu = this.$route.path.split('/')[2];
            }
        },
        mounted: function() {
            this.$nextTick(function() {
                this.subActive = this.$route.name;
                this.secondMenu = this.$route.path.split('/')[2];
            });
        },
        methods: {
        }
    };
</script>
