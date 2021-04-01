<template>
  <view>
      <!-- 搜索 -->
      <!-- 顶部 -->
      <cu-custom bgColor="#fa8c15" isBack="true" >
          <block slot="back">返回</block>
          <block slot="right"></block>
      </cu-custom>
      <!-- 搜索框 -->
      <view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索" confirm-type="search"></input>
				</view>
				<view class="action">
					<text @tap="InputCancel">取消</text>
				</view>
			</view>
      <!-- 搜索页面 -->
      <view class="search-view">
        <!-- 搜索历史 -->
        <view class="search-histroy">
          <view class="search-histroy-box">
            <h1>
              搜索历史
              <text class="cuIcon-deletefill histroy-delete"></text>
            </h1>
          </view>
          <view class="search-box">
            <view class='cu-tag round bg-white search-tag' v-for="item in histroyList" :key="item.id">
              <text>{{item.name}}</text>
              <text class="cuIcon-close close-tag"></text>
            </view>
          </view>
        </view>
        <!-- 推荐标签 -->
        <view class="search-tags">
          <h1>推荐标签</h1>
          <view class="search-box">
            <view class='cu-tag radius bg-white search-tag' v-for="item in tuijiantagList" :key="item.id">{{item.name}}</view>
          </view>
        </view>

        <!-- 热门搜索 -->
        <view class="search-hot">
          <h1>热门搜索
            <text class="cuIcon-hot text-red text-shadow"></text>
          </h1>
          <view class="search-hot-list">
            <view class="search-hot-item" v-for="item in searchhotList" :key="item.id">
              <text class="search-hot-icon cuIcon-emoji text-red"></text>
              <text class="search-hot-text">{{item.name}}</text>
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
      tuijiantagList:[
      {
        id:1,
        name:'标签标签标签标签标签标签标签'
      },
      {
        id:2,
        name:'标签标签标签标签'
      },
      {
        id:3,
        name:'标签标签标签标签标签标签标签'
      },
      {
        id:4,
        name:'标签标签'
      }
    ],
    histroyList:[
      {id:1,name:'历史'},
      {id:1,name:'历史历史'},
      {id:1,name:'历史'},
      {id:1,name:'历史历史历史'},
    ],
    searchhotList:[
      {id:1,name:'热门搜索1'},
      {id:2,name:'热门搜索2'},
      {id:3,name:'热门搜索3'},
      {id:4,name:'热门搜索4'},
      {id:5,name:'热门搜索5'}
    ]
   }
  },
  methods:{
    InputFocus(){
      console.log('foucs');
    },
    InputBlur(){
      console.log('blur');
    },
    InputCancel(){
      console.log('cancel');
    }
  }
}
</script>

<style lang="scss">
    .search-view{
      padding: 10px;
    }
    .search-histroy,
    .search-tags,
    .search-hot{
      padding: 10px;
      margin: 5px 0;

      .histroy-delete{
        float: right;
      }

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

      .close-tag{
        margin-left:10px;
      }
    }
    .search-hot{
      background: #fff;
      border-radius: 8px;

      .search-hot-list{
        .search-hot-item{
          padding: 6px;
          border-bottom: 1px solid #f0f0f0;

          .search-hot-icon{
            margin-right: 10px;
          }
          .search-hot-text{
            text-overflow: ellipsis;
          }
        }
      }
    }
</style>