<template>
  <view>
        <cu-custom bgColor="#BE93C5" isBack="true">
            <block slot="back">返回</block>
            <block slot="right">公告</block>
        </cu-custom>
        <!-- 时间轴 -->
        <view class="cu-timeline">
            <view class="cu-time">昨天</view>
                <view class="cu-item cur cuIcon-noticefill">
                    <view class="content bg-green light shadow-blur">
                    <text>更新</text>
                </view>
            </view>
            <view class="cu-time">昨天</view>
                <view class="cu-item cur cuIcon-noticefill">
                    <view class="content bg-green light shadow-blur">
                    <text>更新</text>
                </view>
            </view>
        </view>  
  </view>
</template>

<script>
export default {

}
</script>

<style>

</style>