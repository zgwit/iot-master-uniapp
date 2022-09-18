<template>
	<view>
		
		<uni-card :title="data.name" note="Tips">
			<uni-list :border="false">
				<uni-list-item title="ID" :rightText="data.id"></uni-list-item>
				<uni-list-item title="创建时间" :rightText="data.created"></uni-list-item>
			</uni-list>
			
		</uni-card>
		
		<uni-list>
			<uni-list-item title="组态" link :to="'./interface?id='+id"></uni-list-item>
			<uni-list-item title="编辑" link :to="'./edit?id='+id"></uni-list-item>
		</uni-list>
		
		<uni-section title="变量" type="line">
			内容主体，可自定义内容及样式
		</uni-section>
		
		<uni-section title="设备" type="line">
			内容主体，可自定义内容及样式
		</uni-section>
		
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
					url: 'project/'+this.id,
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
