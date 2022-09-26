<template>
	<view class="p20">
		<uni-forms>
			<uni-forms-item label="名称" name="name">
				<uni-easyinput v-model="data.name" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="厂商" name="type">
				<uni-easyinput v-model="data.manufacturer" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="版本" name="version">
				<uni-easyinput v-model="data.version" placeholder="" />
			</uni-forms-item>
		</uni-forms>

		<uni-section title="数据点位" type="line">
			<uni-grid :column="3">
				<uni-grid-item v-for="(point,index) in data.points" @click="editPoint(point)" :key="index">
					{{point.name}} {{point.lable}} {{point.type}} {{point.area}} {{point.address}}
				</uni-grid-item>
				<uni-grid-item @click="addPoint">
					<uni-icons type="plus" size="50"></uni-icons>
					添加
				</uni-grid-item>
			</uni-grid>
		</uni-section>

		<uni-section title="数据轮询" type="line">
			<uni-grid :column="3">
				<uni-grid-item v-for="(point,index) in data.pollers" @click="editPoller(point)" :key="index">
					{{point.area}} {{point.address}} {{point.length}}
				</uni-grid-item>
				<uni-grid-item @click="addPoller">
					<uni-icons type="plus" size="50"></uni-icons>
					添加
				</uni-grid-item>
			</uni-grid>
		</uni-section>


		<button type="primary" @click="save">保存</button>
	</view>
</template>

<script>
	import cryptoRandomString from 'crypto-random-string';
	import {
		
		requestAPI
	} from '../../lib/request';
	export default {
		data() {
			return {
				id: '',
				data: {
					id: "",
					name: "",
					type: "",
					version: "",
					points: [],
					pollers: [],
				}
			};
		},
		onLoad(options) {
			this.id = options.id
			if (this.id) this.load()
		},
		methods: {
			load() {
				requestAPI({
					url: 'product/' + this.id,
					success: data => {
						this.data = data
					}
				})
			},
			save() {
				console.log(this.id)
				uni.showLoading({})
				requestAPI({
					url: 'product/' + (this.id || 'create'),
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
			addPoint() {
				let pt = {
					name: "",
					label: "",
					unit: "",
					type: "int",
					le: false,
					dot: 0,
					area: "",
					address: ""
				}
				this.data.points.push(pt)
				this.editPoint(pt)
			},
			addPoller() {
				let pt = {
					length: 0,
					area: "",
					address: ""
				}
				this.data.pollers.push(pt)
				this.editPoller(pt)
			},
			editPoint(pt) {
				uni.navigateTo({
					url: "./point",
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
			editPoller(pl) {
				uni.navigateTo({
					url: "./poller",
					success: (res) => {
						res.eventChannel.emit("data", pt)
					},
					events: {
						result: res => {
							Object.assign(pl, res)
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
