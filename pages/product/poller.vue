<template>
	<view class="p20">
		<uni-forms>
			<uni-forms-item label="区域" name="area">
				<uni-easyinput v-model="data.area" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="地址" name="address">
				<uni-easyinput v-model="data.address" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="长度" name="length">
				<uni-easyinput type="number" v-model="data.length" placeholder="" />
			</uni-forms-item>
		</uni-forms>
		
		<button type="primary" @click="save">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {
					length: 0,
					area: "",
					address: ""
				}
			};
		},
		onLoad() {
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on("data", res => {
				console.log("data", res)
				this.data = res
			})
		},
		methods: {
			save() {
				this.getOpenerEventChannel().emit("result", this.data)
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">

</style>
