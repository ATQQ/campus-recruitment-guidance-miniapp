<template>
	<view>
		<view class="cu-custom"
			:style="{'height':navHeight,'padding-top':navTop,'background':bgColor}">
			<!-- 返回 -->
			<view class="left" v-if="isBack" @tap="BackPage">
				<text class="cuIcon-back"></text>
				<slot name="back"></slot>
			</view>
			<!-- 搜索栏 -->
			<view class="left" v-if="isSearch">
				<text class="cuIcon-search" @tap="ToPage"></text>
				<slot name="search"></slot>
			</view>
			<!-- 切换 -->
			<view class="left" v-if="isOrder" @tap="ToOrder">
				<text class="cuIcon-order"></text>
				<slot name="order"></slot>
			</view>
			<view class="content">
				<slot name="navname"></slot>
			</view>
			<view class="right">
				<slot name="right"></slot>
			</view>
		</view>
		<view class="cu-block" :style="{'height':navHeight}"></view>
	</view>
</template>

<script>
	export default {
		name: 'cu-custom',
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			isSearch:{
				type:[Boolean, String],
				default: false
			},
			isOrder:{
				type:[Boolean,String],
				default:false
			},
			bgImage: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				navHeight:0,
				navTop:0
			};
		},
		methods: {
			BackPage() {
				if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
					let url = '/' + __wxConfig.pages[0]
					return uni.redirectTo({url})
				}
				uni.navigateBack({
					delta: 1
				});
			},
			ToPage(){
				this.$emit('topage');
			},
			ToOrder(){
				this.$emit('chtype');
			},
			init(){
				let menuButtonObj = uni.getMenuButtonBoundingClientRect(),
				that=this;
				uni.getSystemInfo({
					success:function(res){
						let statusBarHeight = res.statusBarHeight,
							navTop = menuButtonObj.top,
							navHeight = statusBarHeight+menuButtonObj.height+(menuButtonObj.top- statusBarHeight)*2;
						that.navHeight= navHeight + 'px';
						that.navTop = navTop +'px';
					}
				})
			}
		},
		created() {
			this.init();
		}
	}
</script>

<style lang="scss">
	.cu-custom{
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;

		.left{
			display: flex;
			position: fixed;
			left: 5px;

			text{
				margin-right: 5px;
			}
		}
		.cuIcon-order{
			transform: rotate(90deg);
		}
	}
</style>
