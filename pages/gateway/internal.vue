<template>
	<view>
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
				id: "internal",
				data: {}
			};
		},
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style lang="scss">

</style>
