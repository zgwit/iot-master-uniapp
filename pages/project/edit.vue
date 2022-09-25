<template>
	<view class="p20">
		<uni-forms>
			<uni-forms-item label="名称" name="name">
				<uni-easyinput  v-model="data.name" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="组态" name="interface_id">
				<uni-easyinput  v-model="data.interface_id" placeholder="选择" />
			</uni-forms-item>
		</uni-forms>
		
		<uni-section title="绑定设备" type="line">
			
			<uni-grid :column="3">
				<uni-grid-item v-for="(point,index) in data.devices" @click="editDevice(point)" :key="index">
					{{point.id}} {{point.name}}
				</uni-grid-item>
				<uni-grid-item @click="addDevice">
					<uni-icons type="plus" size="50"></uni-icons>
					添加
				</uni-grid-item>
			</uni-grid>
			
		</uni-section>
				
		<button type="primary" @click="save">保存</button>
	</view>
</template>

<script>
	import {
		HOST,
		requestAPI
	} from '../../const';
	export default {
		data() {
			return {
				id: '',
				data:{
					name:"",
					interface_id:"",
					devices: []
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
					url: 'project/' + (this.id || 'create'),
					method: 'POST',
					data: this.data,
					success() {
						uni.navigateBack()
					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			addDevice() {
				let pt = {
					id: "",
					name: ""
				}
				if (!this.data.devices)
					this.data.devices = []
				this.data.devices.push(pt)
				this.editDevice(pt)
			},
			editDevice(pt) {
				uni.navigateTo({
					url: "./device",
					success: (res) => {
						res.eventChannel.emit("data", pt)
					},
					events: {
						result: res => {
							console.log("result", res)
							Object.assign(pt, res)
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
