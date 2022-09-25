<template>
	<view>

		<uni-card :title="data.name" :subTitle="data.id" note="Tips" thumbnail="/static/icons/project.svg">
			<uni-list :border="false">
				<uni-list-item title="ID" :rightText="data.id"></uni-list-item>
				<uni-list-item title="创建时间" :rightText="format(data.created)"></uni-list-item>
			</uni-list>
			
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
		</uni-list>
		
		<uni-section title="变量" type="line">
			<uni-grid :column="3">
				<uni-grid-item>温度：30</uni-grid-item>
				<uni-grid-item>温度：30</uni-grid-item>
				<uni-grid-item>温度：30</uni-grid-item>
				<uni-grid-item>温度：30</uni-grid-item>
				<uni-grid-item>温度：30</uni-grid-item>
				<uni-grid-item>温度：30</uni-grid-item>
				<uni-grid-item>温度：30</uni-grid-item>
			</uni-grid>
		</uni-section>
		
		<uni-section title="日志" type="line">
			TODO：Event
		</uni-section>
		
	</view>
</template>

<script>
	import dayjs from 'dayjs';
	import {
		requestAPI
	} from '../../const';
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
