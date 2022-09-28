<template>
	<view>

		<uni-card :title="data.name" :subTitle="data.id" note="Tips" thumbnail="/static/icons/project.svg">
			<uni-section title="变量表 [更新时间]" type="square">
				<uni-tag text="温度:30℃" type="success"></uni-tag>
				<uni-tag text="湿度:90%" type="error"></uni-tag>
			</uni-section>
		</uni-card>
		
		<uni-list>
			<uni-list-item title="可视化组态" link :to="'./interface?id='+id">
				<template v-slot:header>
					<uni-icons class="list-icon" type="color"></uni-icons>
				</template>
			</uni-list-item>
			<uni-list-item title="编辑项目" link :to="'./edit?id='+id">
				<template v-slot:header>
					<uni-icons class="list-icon" customPrefix="iconfont" type="icon-pen"></uni-icons>
				</template>
			</uni-list-item>
			<uni-list-item title="删除项目" @click="remove" :clickable="true">
				<template v-slot:header>
					<uni-icons class="list-icon" customPrefix="iconfont" type="icon-dustbin"></uni-icons>
				</template>
			</uni-list-item>
			<uni-list-item title="收藏到首页">
				<template v-slot:header>
					<uni-icons class="list-icon" customPrefix="iconfont" type="icon-collect"></uni-icons>
				</template>
			</uni-list-item>
		</uni-list>
		
		<uni-section title="日志" type="line">
			TODO：Event
		</uni-section>
		
	</view>
</template>

<script>
	import dayjs from 'dayjs';
	import {
		requestAPI
	} from '../../lib/request';
	import {
		dateFormat
	} from '../../lib/time';
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
		onPullDownRefresh() {
			this.load()
		},
		methods: {
			format: dateFormat,
			load() {
				requestAPI({
					url: 'project/'+this.id,
					success: res=>{
						this.data = res;
					},
					complete() {
						uni.stopPullDownRefresh()
					}
				})
			},
			remove() {
				uni.showModal({
					title: '提示',
					content: '确定删除？',
					success: res => {
						if (res.confirm) {
							console.log('用户点击确定');
							requestAPI({
								url: 'project/' + this.id + '/delete',
								success: res => {
									uni.navigateBack();
									uni.showToast({
										title: "删除成功"
									})
								}
							})
						}
					},
					fail: console.error
				});
			}
		}
	}
</script>

<style lang="scss">

</style>
