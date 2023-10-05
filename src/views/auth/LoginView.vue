<template>
    <Content :style="{padding: '500px 0', minHeight: '280px', }" class="demo-login-background">
        <div >
            <div class="demo-login">
                <Login @on-submit="handleSubmit">
                    <UserName name="username" placeholder="請輸入帳號"/>
                    <Password name="password" placeholder="請輸入密碼"/>
                    <div class="demo-auto-login">
                        <Checkbox v-model="autoLogin" size="large">自動登入</Checkbox>
                        <!-- <a>忘記密碼</a> -->
                    </div>
                    <Submit name="login">登入</Submit>>
                </Login>
            </div>
            </div>
    </Content>
</template>
<script>
// import { resolveComponent } from 'vue';

export default {
    name: 'LoginView',
    setup() {
    },
    data () {
        return {
            autoLogin: true
        }
    },
    methods: {
        handleSubmit (valid, { username, password }) {
            if (valid) {
                this.$Modal.info({
                    title: '輸入的內容如下：',
                    content: 'username: ' + username + ' | password: ' + password
                });
            }
        }
    }
}
</script>
<style>
    .demo-login-background{
        width: 100%;
        height: 100%;
        background-image: url('../../assets/123.jpg');
        background-color:rgba(0, 0, 0, 0.7);
        background-blend-mode: multiply;
    }
    .demo-login{
        width: 400px;
        margin: 0 auto !important;

    }
    .demo-auto-login{
        margin-bottom: 24px;
        text-align: left;
    }
    .demo-auto-login a{
        float: right;
    }
</style>