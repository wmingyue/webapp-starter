<template>
    <div class="confirm-con" v-show="confirmConfig.show" transition="fade">
        <div class="panel" :class="[confirmType]">
            <div class="panel-heading">{{confirmConfig.title}}</div>
            <i class="iconfont close" @click="cancelFunc()">&#xe607;</i>
            <div class="panel-body">
                <p class="confirm-msg">{{confirmConfig.msg}}</p>
            </div>
            <div class="panel-footer">
                <button class="btn delete" @click="applyFunc()">{{confirmConfig.applyStr}}</button>
                <button class="btn cancel" @click="cancelFunc()">{{confirmConfig.cancelStr}}</button>
            </div>
        </div>
    </div>
</template>
<style lang='less' scoped>
    .confirm-con {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .3);
        .panel{
            position: fixed;
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
            min-width: 410px;
            background-color: #fff;
            border-radius: 4px;
            box-sizing: border-box;
            box-shadow: 0 15px 15px 0 rgba(0,0,0,0.16);
            .panel-body {
                min-height: 120px;
                margin-top: -20px;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-pack: center;
                justify-content: center;
            }
            .panel-heading{
                background: #F5F8FA;
                font-size: 14px;
                color: #354052;
                padding: 13px 20px;
                border-radius: 4px 4px 0 0;
            }
            .close{
                position: relative;
                top: -32px;
                left: 93%;
                cursor: pointer;
                color: #bfcbd9;
                &:hover{
                    color: #20a0ff;
                }
            }
            .confirm-msg {
                width: 290px;
                font-size: 14px;
                color: #5a5050;
                line-height: 30px;
                text-align: center;
            }
            .panel-footer{
                background: #F5F8FA;
                height:40px;
                border-radius: 4px;
                .btn{
                    height:40px;
                    font-size: 14px;
                    color: #FFFFFF;
                    border:none;
                    line-height: 40px;
                    float: right;
                    cursor: pointer;
                    &:hover{
                        opacity: .9;
                    }
                }
                .cancel{
                    background: #CFCFCF;
                    width:90px;
                }
                .delete{
                    background: #4982F6;
                    width:120px;
                    border-radius: 0 0 4px 0;
                }
            }
        }
    }
</style>
<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                confirmConfig: 'getConfirmConfig'
            }),
            confirmType() {
                return 'panel-' + this.confirmConfig.type;
            }
        },
        methods: {
            applyFunc() {
                if (typeof this.confirmConfig.applyFunc !== 'function') {
                    throw new Error('ApplyFunc must be a function!');
                }
                this.confirmConfig.applyFunc && this.confirmConfig.applyFunc();
                this.hide();
            },
            cancelFunc() {
                if (typeof this.confirmConfig.cancelFunc !== 'function') {
                    throw new Error('CancelFunc must be a function!');
                }
                this.confirmConfig.cancelFunc && this.confirmConfig.cancelFunc();
                this.hide();
            },
            hide() {
                this.$store.dispatch('hideConfirm');
            }
        }
    };
</script>
