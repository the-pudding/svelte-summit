<script>
	import { getContext } from "svelte";
	import { line, curveLinear } from "d3";
	import { tweened } from "svelte/motion";
	import { interpolateString } from "d3-interpolate";
	import { animation } from "$stores/misc.js";

	const { data, xGet, yGet } = getContext("LayerCake");

	export let stroke = "#ccc";

	export let curve = curveLinear;

	let tweenedD = tweened(null, { interpolate: interpolateString });

	$: path = line().x($xGet).y($yGet).curve(curve);
	$: regularD = path($data);
	$: tweenedD.set(regularD);
</script>

<path d={$animation === "on" ? $tweenedD : regularD} {stroke} />

<style>
	path {
		fill: none;
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 2;
	}
</style>
