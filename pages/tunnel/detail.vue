<template>
	<view>
			
		<uni-card :title="data.name" note="Tips">
			<uni-list :border="false">
				<uni-list-item title="ID" :rightText="data.id"></uni-list-item>
				<uni-list-item title="网关" rightText=""></uni-list-item>
				<uni-list-item title="地址" rightText=""></uni-list-item>
				<uni-list-item title="远程" rightText=""></uni-list-item>
				<uni-list-item title="创建时间" :rightText="data.created"></uni-list-item>
			</uni-list>
			
		</uni-card>
		
		<uni-section title="串口参数" type="line">
			<uni-list>
				<uni-list-item title="端口" note=""></uni-list-item>
				<uni-list-item title="波特率" note=""></uni-list-item>
				<uni-list-item title="数据长度" note=""></uni-list-item>
				<uni-list-item title="停止位" note=""></uni-list-item>
				<uni-list-item title="校验" note=""></uni-list-item>
			</uni-list>
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
					url: 'tunnel/'+this.id,
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
