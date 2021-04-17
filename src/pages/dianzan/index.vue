<template>
  <view>
        <cu-custom bgColor="#fa8c15" isBack="true">
            <block slot="back">返回</block>
            <block slot="right">X人觉得很赞</block>
        </cu-custom>
        <!-- 详情 -->
        <view class="movecard">
			<view class="cu-card dynamic no-card">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view class="text-orange">用户名</view>
								<view class="text-gray text-sm flex justify-between">
									编号
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
            <view class="cu-card dynamic no-card">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view class="text-orange">用户名</view>
								<view class="text-gray text-sm flex justify-between">
									编号
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>


  </view>
</template>

<script>
export default {
    data(){
        return{
            isDian:false,
            isShou:false
        }
    },
    methods: {
    
    },
}
</script>

<style lang="scss">

</style>