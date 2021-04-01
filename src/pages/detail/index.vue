<template>
  <view>
        <cu-custom bgColor="#fa8c15" isBack="true">
            <block slot="back">返回</block>
            <block slot="right">详情</block>
        </cu-custom>
        动态详情
        <view class="neidetail">
            <view class="cu-list menu-avatar">
                <view class="cu-item">
                    <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
                    <view class="content flex-sub">
                        <view>公司名</view>
                    </view>
                    <view class="text-red neitype">内推形式</view>
                </view>
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
    
}
</script>

<style>

</style>