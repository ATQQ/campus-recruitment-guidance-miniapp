<template>
  <view>
        <cu-custom bgColor="#fa8c15" isBack="true">
            <block slot="back">返回</block>
            <block slot="right">详情</block>
        </cu-custom>
        <!-- 动态详情 -->
        <view class="movecard">
			<view class="cu-card dynamic no-card">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view class="text-orange">用户名</view>
								<view class="text-gray text-sm flex justify-between">
									公司名
								</view>
							</view>
							<view class="my-moreand cuIcon-moreandroid text-gray"
								@tap="showModal" data-target="RadioModal"></view>
						</view>
					</view>
					<view class="text-content" >
						内容
					</view>
                    <!-- 图片 -->
					<view class="grid flex-sub padding-lr col-1">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
					</view>
                    <!-- 分享 -->
                    <view class="fenx">
                        <view class="text-gray">分享至</view>
                        <view class="fenx-box">
                            <view class="fenx-item bg-green round">
                                <text class="cuIcon-new"></text>
                            </view>
                            <view class="fenx-item bg-green round">
                                <text class="cuIcon-album"></text>
                            </view>
                        </view>
                    </view>
                    <!-- 点赞 -->
                    <view class="dian-name" @tap="moreDian">
                        <text class="cuIcon-appreciate text-blue"></text>
                        <text class="text-orange">name1,name2等X人觉得很赞</text>
                    </view>
                    <view class="dian-box">
                        <button class="cu-btn line-gray round lg"
                            @tap="toDian">
                            <text class="cuIcon-appreciate" :class="isDian?'text-orange':'text-gray'">点赞</text>
                        </button>
                        <button class="cu-btn line-gray round lg" @tap="toShou">
                            <text class="cuIcon-favor" :class="isShou?'text-orange':'text-gray'">收藏</text>
                        </button>
                    </view>
				</view>
			</view>
		</view>
        <!-- 弹框 -->
        <view class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="RadioChange">
					<view class="cu-list menu text-left">
						<view class="cu-item">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">删除</view>
								<radio class="round"></radio>
							</label>
                        </view>
                        <view class="cu-item">
                            <label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">修改</view>
								<radio class="round"></radio>
							</label>
                        </view>
                        <view class="cu-item">
                            <label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">收藏</view>
								<radio class="round"></radio>
							</label>
                        </view>
                        <view class="cu-item">
                            <label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">投诉</view>
								<radio class="round"></radio>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>
  </view>
</template>

<script>
export default {
    data(){
        return{
            isDian:false,
            isShou:false,
            modalName:null
        }
    },
    methods: {
        showModal(e){
            this.modalName = e.currentTarget.dataset.target
        },
        hideModal(){
            this.modalName=null;
        },
        RadioChange(e){
            console.log(e);
        },
        toDian(){
            if(!this.isDian){
                this.isDian=true;
            }else{
                this.isDian=false;
            }
        },
        toShou(){
            if(!this.isShou){
                this.isShou=true;
            }else{
                this.isShou=false;
            }
        },
        moreDian(){
            uni.navigateTo({ url:'../dianzan/index'})
        }
    },
}
</script>

<style lang="scss">
    .my-moreand{
        width: 30px;
        height: 100%;
        display: flex;
        align-items: center;
        z-index: 99;
    }
    .dian-box{
        display: flex;
        justify-content: space-around;
        background: #fff;
        margin-top:20px;
    }
    .dian-name{
        font-size:20px;
        padding: 0 20px;
        margin-top:10px;
    }
    .fenx{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        margin-top:20px;
        .fenx-box{
            margin-top: 20px;
            display: flex;
            justify-content: space-around;
        }
        .fenx-item{
            width: 40px;
            height: 40px;
            margin: 5px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            text{
                font-size: 30px;
            }
        }
    }
</style>