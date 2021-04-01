<template>
    <view class="login">
       
    </view>
</template>

<script>
export default {
    data(){
        return{
            userInfo:{
                name:'',
                avatar:''
            },
            code:''
        }
    },
    methods:{
        getUser(e){
            uni.login({//获取code
                provider:'weixin',
                success:(res)=>{
                    let that = this;
                    that.code = res.code;
                    uni.getUserInfo({//获取用户信息
                        provider:'weixin',
                        success:(res)=>{
                            let user = res.userInfo;
                            that.$api.postUser({
                                username:user.nickname,
                                useravatar:user.avatarUrl
                            })
                            if(user){
                                that.userInfo.name = user.nickname;
                                that.userInfo.avatar = user.avatarUrl; 
                                that.getRequest();
                            }
                        }
                    })
                }
            })
        },
        getRequest(){
            let that = this;
            console.log(that.code)
            uni.request({
                url:'http://127.0.0.1:8011/user',
                method:'POST',
                header:{
                    'content-type':'application/x-www-form-urlencode'
                },
                data:{
                   code: that.code 
                },
                success(res){
                    console.log(res.data)
                }
            })
        },
        postUserInfo(){

        }
    }
}
</script>

<style lang="scss" scoped>
    .login{
        width: 100vw;
        height: 100vh;
        background: #be93c5;
        display: flex;
        // align-items: center;
        justify-content: center;
    }
    
    .login-user{
        view{
            margin: 20upx 0;
        }
    }
    .login-avatar{
        width: 250upx;
        height: 250upx;
        border-radius: 50%;

        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
</style>