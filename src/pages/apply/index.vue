<template>
	<view>
		<cu-custom bgColor="#fa8c15" isBack="true">
            <block slot="back">返回</block>
            <block slot="right">申请信息填写</block>
        </cu-custom>
		<form>
            <!-- 校友信息 -->
			<view class="cu-form-group">
				<view class="title">姓名</view>
				<input placeholder="姓名" name="input"></input>
			</view>
            <view class="cu-form-group">
				<view class="title">专业</view>
				<input placeholder="专业" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">年级</view>
				<input placeholder="年级" name="input"></input>
			</view>
            <!-- 当前状态 -->
			<view class="cu-form-group margin-top">
				<view class="title">当前状态</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{picker[0]}}
					</view>
				</picker>
			</view>
            <!-- 所在公司 -->
            <view class="cu-form-group">
				<view class="title">所在公司</view>
				<input placeholder="所在公司" name="input"></input>
			</view>
            <!-- 头衔 -->
            <view class="cu-form-group">
				<view class="title">头衔</view>
				<input placeholder="头衔" name="input"></input>
			</view>
            <!-- 擅长领域标签 -->
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					职位标签
				</view>
			</view>
			<checkbox-group class="block" @change="CheckboxChange">
				<view class="cu-form-group" v-for="item in tagsList" :key="item.id">
					<view class="title" >{{ item.name}}</view>	
					<checkbox  value="前端"></checkbox>				
				</view>
			</checkbox-group>
            <!-- 个人简述 -->
            <view class="cu-form-group margin-top">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" 
					placeholder="个人简述"></textarea>
			</view>
            <!-- 擅长话题 -->
            <view class="cu-form-group margin-top">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput2" 
					placeholder="擅长话题"></textarea>
			</view>
			<!-- 上传真实头像 -->
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					上传真实头像
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[0]">
					 <image :src="imgList[0]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<1">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
		</form>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-yellow lg">发布</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: ['学生', '工作'],
				imgList: [],
				modalName: null,
				textareaAValue: '',
				tagsList:[
					{id:'1',name:'考研保研'},
					{id:'2',name:'考研保研'},
					{id:'3',name:'考研保研'},
					{id:'4',name:'考研保研'},
                    {id:'1',name:'考研保研'},
					{id:'2',name:'考研保研'},
					{id:'3',name:'考研保研'},
					{id:'4',name:'考研保研'}
				]
			};
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			CheckboxChange(e) {
				console.log(e.detail.value);
			},
			ChooseImage() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定要删除这张图片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
            textareaAInput2(e) {
				this.textareaAValue2 = e.detail.value
			},
			gettagsList(){
				//获得擅长标签
			}
		},
		created(){
			this.gettagsList();
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}

</style>
