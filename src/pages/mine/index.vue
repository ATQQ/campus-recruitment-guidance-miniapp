<template>
    <view class="Func">
        <cu-custom bgColor="#fa8c15">
            <block slot="navname">我</block>
        </cu-custom>
        <view class="mine-info">
            <view class="cu-avatar xl round margin-left bg-red">
                头像
            </view>
            <text class="mine-name">username</text>
        </view>

        <!-- 功能 -->
        <view class="func-box margin-top">
            <view class="myline" @tap="toPerson">
                <view class="func-item">
                    <text class="cuIcon-friend myicon"></text>
                </view>
                <text>个人信息管理</text>
            </view>
            <view class="myline" @tap="toGong">
                <view class="func-item">
                    <text class="cuIcon-friend myicon"></text>
                </view>
                <text>功能管理</text>
            </view>
            <view class="myline" @tap="toContent">
                <view class="func-item">
                    <text class="cuIcon-friend myicon"></text>
                </view>
                <text>内容管理</text>
            </view>
        </view>

        <view class="cu-list menu sm-border card-menu margin-top" >
            <view class="cu-item arrow">
                <button class="cu-btn content">
                    <text class="cuIcon-btn text-olive"></text>
                    <text class="text-grey">万能客服</text>
                </button>
            </view>
            <view class="cu-item arrow">
                <button class="cu-btn content" @tap="toFankui">
                    <text class="cuIcon-btn text-olive"></text>
                    <text class="text-grey">产品反馈</text>
                </button>
            </view>
            <view class="cu-item arrow">
                <button class="cu-btn content" @tap="toAbout">
                    <text class="cuIcon-btn text-olive"></text>
                    <text class="text-grey">关于产品</text>
                </button>
            </view>
            <view class="cu-item arrow">
                <button class="cu-btn content" @tap="toAddur">
                    <text class="cuIcon-btn text-olive"></text>
                    <text class="text-grey">加入我们</text>
                </button>
            </view>
        </view>

    </view>
</template>

<script>
export default {
    methods:{
        toPerson(){
            uni.navigateTo({ url:'../permsg/index'});
        },
        toFankui(){
            uni.navigateTo({ url:'../fankui/index'});
        },
        toAbout(){
            uni.navigateTo({ url:'../about/index'})
        },
        toAddur(){
            uni.navigateTo({ url:'../ourselves/index'})
        },
        toGong(){
            uni.navigateTo({ url:'../gong/index'})
        },
        toContent(){
            uni.navigateTo({ url:'../content/index'});
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
        .mine-name{
            margin: 0 40upx;
        }
    }
    .mine{
        width: 100vw;
        padding: 20upx;
    }
    .func-box{
        width: 100vw;
        height: 120px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #fff;

        .func-item{
            width: 60px;
            height: 60px;
            background: #fa8c15;
            border-radius: 50%;
            line-height: 60px;
            text-align: center;
            
            .myicon{
                font-size: 30px;
                color: #fff;
            }
        }
        .myline{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;          
        }
    }
</style>