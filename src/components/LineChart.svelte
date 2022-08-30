<script>
	import { LayerCake, Svg } from "layercake";
	import _ from "lodash";
	import Line from "$components/charts/Line.svelte";
	import AxisX from "$components/charts/AxisX.svg.svelte";
	import AxisY from "$components/charts/AxisY.svg.svelte";
	import { extent, max, timeFormat } from "d3";
	import { tweened } from "svelte/motion";
	import { animation } from "$stores/misc.js";

	export let data;
	export let domain;

	const xKey = "date";
	const yKey = "value";

	const yDomain = tweened([0, max(data, (d) => d.value)], { duration: 1000 });

	$: data, updateDomain();
	const updateDomain = () => {
		$yDomain = [0, max(data, (d) => d.value)];
	};

	const timeFormatter = timeFormat("%b %Y");
</script>

<div class="chart-container">
	<LayerCake
		padding={{ right: 10, bottom: 20, left: 25 }}
		x={xKey}
		y={yKey}
		xDomain={domain}
		yDomain={$animation === "on" ? $yDomain : [0, null]}
		yNice={true}
		{data}
	>
		<Svg>
			<AxisX ticks={2} formatTick={(d) => timeFormatter(d)} />
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
