<template>
  <view>
        <cu-custom bgColor="#fa8c15" isBack="true">
            <block slot="back">返回</block>
            <block slot="right">前人详情</block>
        </cu-custom>
        <!-- 内推详情 -->
        <!-- 头像 -->
        <view class="topbg">
            <view class="cu-avatar round my-avatar" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
        </view>
        <view class="neidetail">
            <view class="cu-list menu-avatar">
                <view class="cu-item">
                    <view class="content flex-sub">
                        <view>昵称-姓名</view>
                        <view class="text-gray text-sm flex justify-between">
                            专业年级
                        </view>
                        <view class="text-gray text-sm flex">认证职位信息</view>
                    </view>
                </view>
            </view>
        </view>
        <!-- 职位详情 -->
        <view class="zhidetail">
            <h1>职位描述</h1>
            <text>
                1.XXX
                2.XXX
            </text>
        </view>

        <!-- 底部悬浮 -->
        <view class="nei-bottom">
            <view class="left">喜欢</view>
            <view class="right">分享</view>
        </view>
  </view>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    
}
</script>

<style lang="scss">
    .neitype{
        margin-right: 10px;
    }
    .zhidetail{
        background: #fff;
        padding: 10px;
        
        h1{
            margin-bottom: 10px;
        }
    }
    .nei-bottom{
        position: fixed;
        bottom: 20px;
        width: 80%;
        height: 50px;
        transform: translateX(15%);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left,
        .right{
            width: 48%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 25px;
            background: #fff;
        }
        .right{
            background: #fa8c15;
        }
    }
    .topbg{
        height: 150px;
        width: 100%;
        background: #fa8c15;
        position: relative;
        .my-avatar{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            position:absolute;
            bottom: -20px;
            right: 40px;
            z-index: 99;
        }
    }
</style>