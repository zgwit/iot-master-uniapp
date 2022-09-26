<template>
	<view class="p20">
		<uni-forms>
			<uni-forms-item label="名称" name="name">
				<uni-easyinput  v-model="data.name" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="类型" name="type">
				<uni-easyinput  v-model="data.type" placeholder="serial,tcp-client,udp-client,tcp-server,udp-server" />
			</uni-forms-item>
			<uni-forms-item label="地址" name="addr">
				<uni-easyinput  v-model="data.addr" placeholder="" />
			</uni-forms-item>
			
			<uni-section title="串口参数" type="line" v-if="data.type=='serial'">
				<uni-forms-item label="串口" name="name">
					<uni-easyinput  v-model="data.serial.port" placeholder="TODO:改为下拉选择" />
				</uni-forms-item>
				<uni-forms-item label="波特率" name="name">
					<uni-easyinput  v-model="data.serial.baud_rate" placeholder="TODO:改为下拉选择" />
				</uni-forms-item>
				<uni-forms-item label="字长" name="name">
					<uni-easyinput  v-model="data.serial.data_bits" placeholder="TODO:改为下拉选择" />
				</uni-forms-item>
				<uni-forms-item label="停止位" name="name">
					<uni-easyinput  v-model="data.serial.stop_bits" placeholder="TODO:改为下拉选择" />
				</uni-forms-item>
				<uni-forms-item label="校验" name="name">
					<uni-easyinput  v-model="data.serial.party" placeholder="TODO:改为下拉选择" />
				</uni-forms-item>
			</uni-section>
			
			<uni-section title="协议" type="line">
				<uni-forms-item label="名称" name="name">
					<uni-easyinput  v-model="data.protocol.name" placeholder="TODO:改为下拉选择" />
				</uni-forms-item>
			</uni-section>
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
					type: "",
					addr: "",
					protocol: {
						name: ""
					},
					serial: {
						port: "",
						baud_rate: 9600,
						data_bits: 8,
						stop_bits: 1,
						party: 0
					}
				}
			};
		},
		onLoad(options) {
			this.id = options.id
			this.data.server_id = options.server
			this.data.gateway_id = options.gateway
			if (this.id) this.load()
		},
		methods: {
			load(){
				requestAPI({
					url: 'tunnel/'+this.id,
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
