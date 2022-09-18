<template>
	<view>
		<div id="container"></div>
	</view>
</template>

<script>
	import {
		Graph
	} from "@antv/x6"
	export default {
		data() {
			return {

			};
		},
		onReady() {
			const graph = new Graph({
				container: document.getElementById('container'),
				width: 800,
				height: 600,
				interacting: false,
			});

			graph.fromJSON({
				// 节点
				nodes: [{
						id: 'node1', // String，可选，节点的唯一标识
						x: 40, // Number，必选，节点位置的 x 值
						y: 40, // Number，必选，节点位置的 y 值
						width: 80, // Number，可选，节点大小的 width 值
						height: 40, // Number，可选，节点大小的 height 值
						label: 'hello', // String，节点标签
					},
					{
						id: 'node2', // String，节点的唯一标识
						x: 160, // Number，必选，节点位置的 x 值
						y: 180, // Number，必选，节点位置的 y 值
						width: 80, // Number，可选，节点大小的 width 值
						height: 40, // Number，可选，节点大小的 height 值
						label: 'world', // String，节点标签
					},
				],
				// 边
				edges: [],
			})
		}
	}
</script>

<style lang="scss">

</style>
