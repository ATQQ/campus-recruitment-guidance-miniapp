<template>
    <view>
        <cu-custom bgColor="#f0f0f0" isBack="true">
            <block slot="back">取消</block>
            <block slot="navname">柚子帮-校招指导服务平台</block>
        </cu-custom>
        <view class="cu-form-group margin-top publish-content">
            <textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="说些什么..."></textarea>
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
            <button class="cu-btn bg-orange shadow-blur round lg">发布</button>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return{
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
    .publish-content{
    }
</style>