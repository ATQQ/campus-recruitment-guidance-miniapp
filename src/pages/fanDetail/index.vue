<template>
  <view>
        <cu-custom bgColor="#fa8c15" isBack="true">
            <block slot="back">返回</block>
            <block slot="right">问题反馈</block>
        </cu-custom>
        <!-- 当前状态 -->
        <view class="neidetail">
            <view class="cu-list menu-avatar">
                <view class="cu-item">
                    <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
                    <view class="content flex-sub">
                        <view>username</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="cu-form-group">
            <view class="title">反馈类型</view>
            <picker @change="PickerChange" :value="index" :range="picker" placeholder="">
                <view class="picker">
                    {{picker[index]?picker[index]:'请选择类型'}}
                </view>
            </picker>
        </view>
        <view class="cu-form-group">
            <textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput"
             placeholder="有什么问题可以反馈给我们"></textarea>
        </view>
        <view class="cu-bar bg-white margin-top">
            <view class="action">
                图片上传
            </view>
            <view class="action">
                {{imgList.length}}
            </view>
        </view>
        <view class="cu-form-group">
            <view class="grid col-4 grid-square flex-sub">
                <view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
                    <image :src="imgList[index]" mode="aspectFill"></image>
                    <view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
                        <text class='cuIcon-close'></text>
                    </view>
                </view>
                <view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
                    <text class='cuIcon-cameraadd'></text>
                </view>
            </view>
        </view>
        <view class="cu-bar btn-group margin-top">
            <button class="cu-btn bg-orange shadow-blur round lg">提交</button>
        </view>
  </view>
</template>

<script>
export default {
    data(){
        return{
            picker:[''],
            imgList:[]
        }
    },
    methods:{
        textareaAInput(){},
        ChooseImage(){},
        DelImg(){},
        ViewImage(){}
    }
}
</script>

<style lang="scss">
 
</style>