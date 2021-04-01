<template>
    <view>
        <cu-custom bgColor="#fa8c15" isOrder="true" @chtype="changType">
			<block slot="order">{{typename}}</block>
		</cu-custom>
        
        <!-- 内推卡片 -->
        <!-- 看内推 -->
        <Kanneitui v-if="neiType"></Kanneitui>
        <!-- 发内推 -->
        <Faneitui v-if="!neiType"></Faneitui>
    </view>
</template>

<script>

import Kanneitui from '@/components/Kanneitui.vue';
import Faneitui from '@/components/Faneitui.vue';

export default {
    components:{
        Kanneitui,
        Faneitui
    },
    data(){
        return{
            typename:'看内推',
            neiType:true
        }
    },
    methods: {
        changType(){
            if(this.typename==='发内推'){
                this.neiType=true;
                this.typename='看内推';
            }else if(this.typename==='看内推'){
                this.neiType=false;
                this.typename='发内推';
            }
        }
	}
}
</script>

<style lang="scss">
    
</style>