<template>
	<view>

		<uni-card :title="data.name" extra="在线" note="Tips">
			<uni-list :border="false">
				<uni-list-item title="ID" :rightText="data.id"></uni-list-item>
				<uni-list-item title="MQTT账号" :rightText="data.username"></uni-list-item>
				<uni-list-item title="MQTT密码" :rightText="data.password"></uni-list-item>
				<uni-list-item title="创建时间" :rightText="data.created"></uni-list-item>
			</uni-list>

		</uni-card>

		<uni-list>
			<uni-list-item title="连接通道" link :to="'/pages/tunnel/tunnel?gateway='+id">
				<template v-slot:header>
					<uni-icons class="list-icon" customPrefix="iconfont" type="icon-link"></uni-icons>
				</template>
			</uni-list-item>
			<uni-list-item title="服务器(TCP-Server)" link :to="'/pages/server/server?gateway='+id">
				<template v-slot:header>
					<uni-icons class="list-icon" customPrefix="iconfont" type="icon-server"></uni-icons>
				</template>
			</uni-list-item>
			<uni-list-item title="编辑网关" link :to="'./edit?id='+id">
				<template v-slot:header>
					<uni-icons class="list-icon" customPrefix="iconfont" type="icon-pen"></uni-icons>
				</template>
			</uni-list-item>
			<uni-list-item title="配置文件" link disabled>
				<template v-slot:header>
					<uni-icons class="list-icon" customPrefix="iconfont" type="icon-warning"></uni-icons>
				</template>
			</uni-list-item>
		</uni-list>

	</view>
</template>

<script>
	import {
		requestAPI
	} from '../../const';
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
			load() {
				requestAPI({
					url: 'gateway/' + this.id,
					success: res => {
						this.data = res;
					},
					complete(){
						uni.stopPullDownRefresh()
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
