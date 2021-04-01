<template>
  <view>
        <cu-custom bgColor="#fa8c15" isBack="true">
            <block slot="back">返回</block>
            <block slot="right">问题反馈</block>
        </cu-custom>
        <view class="fankui-box">
            <view class="myline" @tap="toFankui">
                <view class="fankui">
                    <text class="cuIcon-write text-black myicon"></text>
                </view>
                <text>反馈</text>
            </view>
            <view class="myline" @tap="toJilu">
                <view class="kefu">
                    <text class="cuIcon-text text-black myicon"></text>
                </view>
                <text>反馈记录</text>
            </view>
        </view>
  </view>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        toJilu(){
            uni.navigateTo({ url:'../list/index'})
        },
        toFankui(){
            uni.navigateTo({ url:'../fanDetail/index'});
        }
    }
}
</script>

<style lang="scss">
    .fankui-box{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        height: 400px;

        .fankui,
        .kefu{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: #fa8c15;
            text-align: center;
            line-height: 100px;

            .myicon{
                font-size:32px;
            }
        }
        .myline{
            text-align: center;
        }
    }
</style>