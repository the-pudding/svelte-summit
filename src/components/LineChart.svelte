<script>
	import { LayerCake, Svg } from "layercake";
	import _ from "lodash";
	import Line from "$components/charts/Line.svelte";
	import AxisX from "$components/charts/AxisX.svg.svelte";
	import AxisY from "$components/charts/AxisY.svg.svelte";
	import { onMount } from "svelte";

	export let data;

	const xKey = "year";
	const yKey = "value";
</script>

<div class="chart-container">
	<LayerCake
		padding={{ right: 10, bottom: 20, left: 25 }}
		x={xKey}
		y={yKey}
		yDomain={[0, null]}
		yNice={true}
		{data}
	>
		<Svg>
			<AxisX ticks={2} />
			<AxisY ticks={4} />
			<Line />
		</Svg>
	</LayerCake>
</div>

<style>
	.chart-container {
		width: 800px;
		height: 600px;
	}
</style>
