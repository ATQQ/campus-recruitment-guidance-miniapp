<template>
    <view>
        <cu-custom bgColor="#fa8c15" isBack="true">
            <block slot="back">返回</block>
            <block slot="right">个人资料设置</block>
        </cu-custom>
        <view class="mine-info">
            <view class="cu-avatar xl round margin-left bg-red">
                头像
            </view>
        </view>
        <!-- 设置信息 -->
        <form>
            <view class="cu-bar bg-white neitui-bar margin-top">
                <view class="action">
                    <text class="cuIcon-titles text-orange"></text>基本信息
                </view>
            </view>
            <view class="cu-form-group">
				<view class="title">昵称</view>
				<input name="input"></input>
			</view>
            <view class="cu-form-group">
				<view class="title">普通选择</view>
				<picker @change="PickerChange" :value="index" :range="sexPicker">
					<view class="picker">
						{{sexPicker[0]}}
					</view>
				</picker>
			</view>
            <view class="cu-form-group">
				<view class="title">真实姓名</view>
				<input name="input"></input>
			</view>
            <view class="cu-form-group">
				<view class="title">手机号码</view>
				<input name="input"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view>
            <view class="cu-form-group">
				<view class="title">邮箱</view>
				<input name="input"></input>
			</view>
            <view class="cu-bar bg-white neitui-bar margin-top">
                <view class="action">
                    <text class="cuIcon-titles text-orange"></text>当前状态
                </view>
            </view>
            <view class="cu-form-group">
				<view class="title">当前状态</view>
				<picker @change="PickerChange" :value="index" :range="nowPicker">
					<view class="picker">{{nowPicker[0]}}</view>
				</picker>
			</view>
            <view class="cu-bar bg-white neitui-bar margin-top">
                <view class="action">
                    <text class="cuIcon-titles text-orange"></text>教育信息
                </view>
            </view>
            <view class="cu-form-group">
				<view class="title">学校名称</view>
				<picker @change="PickerChange" :value="index" :range="schPicker">
					<view class="picker">{{schPicker[0]}}</view>
				</picker>
			</view>
            <view class="cu-form-group">
				<view class="title">专业名称</view>
				<picker @change="PickerChange" :value="index" :range="proPicker">
					<view class="picker">{{proPicker[0]}}</view>
				</picker>
			</view>
            <view class="cu-form-group">
				<view class="title">学历</view>
				<picker @change="PickerChange" :value="index" :range="quaPicker">
					<view class="picker">{{quaPicker[0]}}</view>
				</picker>
			</view>
            <view class="cu-bar bg-white neitui-bar margin-top">
                <view class="action">
                    <text class="cuIcon-titles text-orange"></text>工作信息
                </view>
            </view>
            <view class="cu-form-group">
				<view class="title">公司名称</view>
				<input name="input"></input>
			</view>
            <view class="cu-form-group">
				<view class="title">职位名称</view>
				<input name="input"></input>
			</view>
            <view class="cu-form-group">
				<view class="title">所在部门</view>
				<input name="input"></input>
			</view>
        </form>
        <!-- 更新 -->
        <view class="cu-bar btn-group margin-top">
            <button class="cu-btn bg-orange shadow-blur round lg">更新信息</button>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return{
            sexPicker:['男','女'],
            schPicker:['西南石油大学'],
            quaPicker:['本科','硕士','博士及以上'],
            proPicker:[''],
            nowPicker:['学生（提交教育信息）','就业（提交教育信息和工作信息）']
        }
    },
    methods:{
        toUpdate(){},
        PickerChange(){},
        SwitchB(e){
            console.log(e)
        }
    }
}
</script>

<style lang="scss">
    .mine-info{
        height: 250upx;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .msg-publish{
		position: fixed;
		bottom: 30px;
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
</style>