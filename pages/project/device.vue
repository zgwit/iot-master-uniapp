<template>
	<view class="p20">
		<uni-forms>
			<uni-forms-item label="变量" name="name">
				<uni-easyinput v-model="data.name" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="设备" name="id">
				<uni-easyinput v-model="data.id" placeholder="点击右边小图标选择" suffixIcon="plus" @iconClick="selectDevice"/>
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
					id: "",
					name: ""
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
			},
			selectDevice() {
				uni.navigateTo({
					url: "/pages/device/device?select=true",
					events:{
						select: id=>{
							this.data.id = id
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
