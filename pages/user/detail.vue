<template>
	<view>
		
		<uni-card :title="data.username" note="Tips">
			<uni-list :border="false">
				<uni-list-item title="昵称" :rightText="data.nickname"></uni-list-item>
				<uni-list-item title="邮箱" :rightText="data.email"></uni-list-item>
				<uni-list-item title="创建时间" :rightText="data.created"></uni-list-item>
			</uni-list>
			
		</uni-card>
		
		<uni-list>
			<uni-list-item title="编辑" link :to="'./edit?id='+id"></uni-list-item>
		</uni-list>
		
	</view>
</template>

<script>
import { requestAPI } from '../../const';
	export default {
		data() {
			return {
				data: {}
			};
		},
		onLoad(options) {
			this.id = options.id
			this.load()
		},
		methods:{
			load(){
				requestAPI({
					url: 'user/'+this.id,
					success: res=>{
						this.data = res;
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
