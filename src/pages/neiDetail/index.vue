<template>
  <view>
        <cu-custom bgColor="#fa8c15" isBack="true">
            <block slot="back">返回</block>
            <block slot="right">内推详情</block>
        </cu-custom>
        <!-- 内推详情 -->
        <!-- 公司 -->
        <view class="neidetail">
            <view class="cu-list menu-avatar">
                <view class="cu-item">
                    <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
                    <view class="content flex-sub">
                        <view>公司名</view>
                    </view>
                    <view class="text-red neitype">内推形式</view>
                </view>
            </view>
        </view>
        <!-- 推荐人 -->
        <view class="neidetail">
            <view class="cu-list menu-avatar">
                <view class="cu-item">
                    <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
                    <view class="content flex-sub">
                        <view>昵称-姓名</view>
                        <view class="text-gray text-sm flex justify-between">
                            专业年级
                        </view>
                        <view class="text-gray text-sm flex">认证职位信息</view>
                    </view>
                    <view class="cu-tag round bg-blue text-white">极速联系</view>
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
</style>