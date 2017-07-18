<template>
    <transition name="fade">
        <div v-show="loading">
            <p><i class="iconfont">&#xe613;</i></p>
            <b>拼命加载中...</b>
        </div>
    </transition>
</template>
<style lang='less' scoped>
    div{
        position: absolute;
        top: 0;
        right: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        p{
            width: 35px;
            height: 35px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -43px;
            margin-left: -25px;
            -webkit-animation: gif 1.4s infinite linear;
            animation: gif 1.4s infinite linear;
            i{
                position: relative;
                top: -4px;
                left: -3px;
                font-size: 40px;
                color: #ccc;
            }
        }
        @keyframes gif {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
        b{
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -43px;
            font-size: 13px;
            color: #ccc;
            font-weight: normal;
            letter-spacing: 1px;
        }
        .fade-enter-active, .fade-leave-active {
          transition: opacity 1s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
    }
</style>
<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                loading: 'getLoading'
            })
        }
    };
</script>
