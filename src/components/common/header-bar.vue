<template>
    <header>
        <div class="logo" :class="{'side-header': path === 'template' || path === 'controller'}">
            <i class="iconfont">&#xe624;</i>
            <span class="jiyun">webapp-starter</span>
        </div>
        <div class="tabs">
            <router-link class="link" :to="{name: 'introduction'}" :class="{'active': path === 'home' || path === ''}">产品介绍</router-link>
            <router-link class="link" :to="{name: 'controllerList'}" :class="{'active': path === 'controller'}">控制台</router-link>
            <a v-show="!getUser.userName" class="link" @click="handleCommand('login-in')">登录</a>
            <a v-show="!getUser.userName" class="link" @click="handleCommand('register')">注册</a>
            <el-dropdown trigger="click" class="user" @command="handleCommand" v-show="getUser.userName">
                <span class="el-dropdown-link">{{getUser.userName}}<i class="iconfont">&#xe62b;</i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="login-out">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>
<style lang="less" scoped>
    header{
        width: 100%;
        height: 40px;
        color: #252525;
        font-size: 12px;
        line-height: 40px;
        background-color: #fff;
        box-shadow: 0 1px 0 0 #E6E6E6;
        .logo{
            float: left;
            i{
                font-size: 18px;
                margin-left: 100px;
                color: #4965E2;
                font-weight: 100;
            }
            .jiyun{
                color: #4A4A4A;
                font-size: 14px;
                position: relative;
                top: -1px;
                margin-left: 3px;
            }
        }
        .side-header{
            i{
                margin-left: 15px;
            }
        }
        .tabs{
            float: right;
            margin-right: 15px;
            .link{
                float: left;
                display: inline-block;
                width: 80px;
                color: #252525;
                text-align: center;
                cursor: pointer;
                &:hover{
                    background-color: #F6F6F8;
                    color: #007FFF;
                }
            }
            .active{
                background-color: #F6F6F8;
                color: #007FFF;
            }
            .user{
                span{
                    width: 150px;
                    display: block;
                    text-align: center;
                    cursor: pointer;
                    i{
                        transform: scale(0.4);
                        color: #262626;
                        position: relative;
                        top: 2px;
                    }
                }
            }
        }
    }
</style>
<script>
    import { mapGetters } from 'vuex';
    import $ from 'webpack-zepto';
    import loginConfig from '../../config/login.config.js';
    export default {
        data() {
            return {
                path: ''
            };
        },
        computed: {
            ...mapGetters({
                getUser: 'getUser'
            })
        },
        watch: {
            '$route.path': function() {
                this.todo();
            }
        },
        mounted: function() {
            this.$nextTick(function() {
                this.todo();
            });
        },
        methods: {
            todo() {
                this.path = this.$route.path.split('/')[1];
                if (!this.getUser.userName && window.localStorage.token) {
                    this.getname();
                }
            },
            getname() {
                $.ajax({
                    type: 'get',
                    url: loginConfig['host'] + '/api/user/info',
                    loading: true,
                    success: (res) => {
                        this.$store.dispatch('user', res.account);
                        localStorage.userName = res.account;
                    }
                });
            },
            handleCommand(type) {
                switch (type) {
                    case 'login-in':
                        window.location.href = loginConfig['host'] + loginConfig['parame'] + '&state=' + encodeURIComponent(window.location.href);
                        break;
                    case 'register':
                        window.location.href = loginConfig['host'] + '/#/sign-in?redirect=' + encodeURIComponent(window.location.href);
                        break;
                    case 'login-out':
                        this.$store.dispatch('user', '');
                        window.localStorage.removeItem('userName');
                        window.localStorage.removeItem('token');
                        window.location.href = loginConfig['host'] + '/api/logout?redirect=' + encodeURIComponent(window.location.href);
                        break;
                    default:
                        break;
                }
            }
        }
    };
</script>