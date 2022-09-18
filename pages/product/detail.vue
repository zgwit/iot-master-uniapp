<template>
	<view>
		
		<uni-card :title="data.name">
			<uni-list :border="false">
				<uni-list-item title="厂商" :rightText="data.manufacturer"></uni-list-item>
				<uni-list-item title="版本" :rightText="data.version"></uni-list-item>
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
					url: 'product/'+this.id,
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
