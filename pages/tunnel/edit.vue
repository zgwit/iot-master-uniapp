<template>
	<view class="p10">
		<uni-forms>
			<uni-forms-item label="名称" name="name">
				<uni-easyinput  v-model="data.name" placeholder="" />
			</uni-forms-item>
			
			TODO：编辑 协议，串口参数
		</uni-forms>
				
		<button type="primary" @click="save">保存</button>
	</view>
</template>

<script>
import { HOST, requestAPI } from '../../const';
	export default {
		data() {
			return {
				id: '',
				data:{
					name:"",
				}
			};
		},
		onLoad(options) {
			this.id = options.id
			if (this.id) this.load()
		},
		methods: {
			load(){
				requestAPI({
					url: 'project/'+this.id,
					success: data=> {
						this.data = data
					}
				})
			},
			save(){
				console.log(this.id)
				uni.showLoading({})
				requestAPI({
					url: 'tunnel/' + (this.id || 'create'),
					method: 'POST',
					data: this.data,
					success() {
						uni.navigateBack()
					},
					complete() {
						uni.hideLoading()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
