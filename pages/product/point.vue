<template>
	<view class="p20">
		<uni-forms>
			<uni-forms-item label="变量" name="name">
				<uni-easyinput v-model="data.name" placeholder="字母和数字组成,编程使用" />
			</uni-forms-item>
			<uni-forms-item label="名称" name="type">
				<uni-easyinput v-model="data.label" placeholder="显示名称" />
			</uni-forms-item>
			<uni-forms-item label="单位" name="unit">
				<uni-easyinput v-model="data.unit" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="类型" name="type">
				<uni-easyinput v-model="data.type" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="小端" name="le">
				<switch v-model="data.le" />
			</uni-forms-item>
			<uni-forms-item label="小数点位" name="dot">
				<uni-easyinput type="number" v-model="data.dot" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="区域" name="area">
				<uni-easyinput v-model="data.area" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="地址" name="address">
				<uni-easyinput v-model="data.address" placeholder="" />
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
					name: "",
					label: "",
					unit: "",
					type: "int",
					le: false,
					dot: 0,
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
