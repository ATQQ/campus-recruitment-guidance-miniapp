<template>
	<view class="background">
		<!-- 首页 -->
		<cu-custom bgColor="#fff" isSearch="true" @topage="showpage">
			<!-- <text class="cuIcon-search"></text> -->
			<block slot="search">柚子帮</block>
		</cu-custom>
		<!-- 轮播图 -->
		<view class="banner">
			<!-- <view class="bg-pic"></view> -->
			<Swiper :swiperList="swipersList"></Swiper>
		</view>
		<!-- 导航栏 -->
		<view class="notice">
			<h1>近期公告</h1>
			<view class="notice-list">
				<view class="notice-item" @tap="showModal"  data-target="Notice">
					<text class="cuIcon-activityfill text-red notice-number"></text>
					<text class="notice-content">面试要理解</text>
					<text class="notice-hottag">爆</text>
				</view>
				<view class="notice-item" @tap="showModal"  data-target="Notice">
					<text class="cuIcon-activityfill text-red notice-number"></text>
					<text class="notice-content">面试要理解</text>
					<text class="notice-hottag">爆</text>
				</view>
				<view class="notice-item" @tap="showModal"  data-target="Notice">
					<text class="cuIcon-activityfill text-red notice-number"></text>
					<text class="notice-content">面试要理解</text>
					<text class="notice-hottag">爆</text>
				</view>
				<view class="notice-item mycontent" @tap="toMoreNotice">
					<text class="notice-content text-blue">查看更多</text>
					<text class="cuIcon-right text-blue"></text>
				</view>
			</view>
			<!-- <IndexList></IndexList> -->
		</view>
		<!-- 公告弹窗 -->
		<view class="cu-modal" :class="modalName=='Notice'?'show':''">
			<view class="cu-dialog">
				<view>
					公告
					XXXXXX
				</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">我知道了</view>
				</view>
			</view>
		</view>

		
		<!-- 动态卡片 -->
		<view class="movecard">
			<view class="cu-card dynamic" v-for="item in movecardList" :key="item.id">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view class="text-orange">{{item.username}}</view>
								<view class="text-gray text-sm flex justify-between">
									{{item.company}}
								</view>
							</view>
							<text class="cuIcon-moreandroid text-gray"  @tap="showModal" data-target="RadioModal"></text>
						</view>
					</view>
					<view class="text-content" @tap=tomovePage>
						{{item.content}}
					</view>
					<view class="grid flex-sub padding-lr col-1">
						<view class="bg-img" :class="isCard?'':'only-img'" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
						</view>
					</view>
					<view class="movecard-tag  padding">
						<view class='cu-tag radius'>{{item.tags}}</view>
					</view>
					<view class="movecard-icon text-gray padding">
						<text class="cuIcon-appreciate">10</text>
						<text class="cuIcon-favor"></text>
						<text class="cuIcon-forward">分享</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 动态发布 -->
		<view class="msg-publish" @tap="toPublish">
			<view class="msg-content">
				<text class="cuIcon-writefill text-black"></text>
				<text class="msg-text">发布</text>
			</view>
		</view>
	</view>
</template>

<script>
	import Swiper from '@/components/Swiper';
	export default {
		data() {
			return {
				
				swipersList:[{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}],
				movecardList:[
					{ id:0,username:'aa',content:'11111',company:'AA',tags:'#标签标签标签标签'},
					{ id:1,username:'bb',content:'22222',company:'BB',tags:'#标签标签标签'},
					{ id:2,username:'cc',content:'33333',company:'CC',tags:'#标签标签标签'},
					{ id:3,username:'dd',content:'44444',company:'DD',tags:'#标签标签标签标签'}
				],
				modalName:null
			}
		},
		components:{
			Swiper
		},
		onLoad() {

		},
		methods: {
			showpage(){
				uni.navigateTo({url:'../search/index'})
			},
			toNotice(){
				uni.navigateTo({ url:'../notice/index'})
			},
			toPublish(){
				uni.navigateTo({ url:'../publish/index'})
			},
			getSwiperList(){},
			showModal(e){
				this.modalName = e.currentTarget.dataset.target
			},
			tomovePage(){
				uni.navigateTo({url:'../detail/index'})
			},
			hideModal(e){
				this.modalName = null;
			},
			toMoreNotice(){
				uni.navigateTo({ url:'../morenotice/index'})
			}
		},
		created(){
			this.getSwiperList();
		}
	}
</script>

<style lang="scss">
	.background{
		width: 100vw;
		height: 100vh;
	}
	.banner{
		height: 200px;
	}
	.notice{
		margin: 10px;
		padding: 10px;
		border-radius: 8px;
		background: #fff;
		
		.notice-item{
			margin:8px 2px;
		}

		.notice-number{
			margin-right: 6px;
		}
		.notice-hottag{
			float: right;
			padding: 2px;
			border:1px solid red;
			border-radius: 4px;
			font-size: 12px;
		}
	}
	.movecard-icon{
		display: flex;
		justify-content: space-around;
	}
	.msg-publish{
		position: fixed;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		width: 25%;
		height: 50px;
		border-radius: 25px;
		background: #fa8c15;
		display: flex;
		justify-content: center;
		align-items: center;

		.msg-text{
			margin-left: 4px;
		}
	}
	.mycontent{
		text-align: center;
	}
</style>
