<template>
    <view class="neitui-search">
        <!-- 顶部 -->
        <cu-custom bgColor="#fa8c15" isBack="true" >
            <block slot="back">返回</block>
            <block slot="right"></block>
        </cu-custom>
        <!-- 搜索框 -->
        <view class="cu-bar bg-white search">
            <view class="search-form radius">
                <text class="cuIcon-search"></text>
                <input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索" confirm-type="search"></input>
            </view>
        </view>
        <!-- 搜索页面 -->
      <view class="search-view">
        <!-- 职业标签 -->
        <view class="search-histroy">
          <view class="search-histroy-box">
            <h1>
              职业标签
            </h1>
          </view>
          <view class="search-box">
            <view class='cu-tag round line-gray search-tag'>
              <text>Java研发工程师</text>
            </view>
          </view>
        </view>
        <!-- 搜索记录 -->
        <view class="search-tags">
          <h1>搜索记录</h1>
          <view class="search-box">
            <view class='cu-tag round line-gray search-tag'>
                <text>Java研发工程师</text>
            </view>
          </view>
        </view>
      </view>
    </view>
</template>

<script>
export default {
    components:{

    },
    data(){
        return{
           
        }
    },
    methods: {
        InputBlur(){},
        InputFocus(){}
    },
    created(){
        
    }
}
</script>

<style lang="scss">
    .neitui-search{
        height: 100vh;
        width: 100vw;
        background: #fff;
    }
    .search-view{
      padding: 10px;
    }
    .search-histroy,
    .search-tags,
    .search-hot{
      padding: 10px;
      margin: 5px 0;

      .search-box{
        width:98%;
        margin-top:5px;
        display: flex;
        flex-wrap: wrap;      
        .search-tag{
          margin:5px;
          text-overflow: ellipsis;
        }
      }
    }
</style>