<script>
	import { scaleLinear, range, max, rgb } from "d3";
	import { animation } from "$stores/misc.js";
	import { tweened } from "svelte/motion";
	import { fade } from "svelte/transition";
	import { flip } from "svelte/animate";
	import { interpolateLab } from "d3-interpolate";

	export let data;
	export let middleLine;
	export let colorByMajority;

	const randomColor = () => {
		var o = Math.round,
			r = Math.random,
			s = 255;
		return (
			"rgba(" +
			o(r() * s) +
			"," +
			o(r() * s) +
			"," +
			o(r() * s) +
			"," +
			r().toFixed(1) +
			")"
		);
	};

	const width = 800;
	const height = 600;
	const barWidth = 25;
	const numTicks = 7;
	const color = "rgb(89, 149, 227)";
	const highlightColor = "rgb(230, 69, 101)";
	const colorTween = tweened(color, {
		interpolate: interpolateLab,
		duration: 800
	});

	$: maxY = max(data.map((d) => d.female_year_2022));
	$: heightScale = scaleLinear().domain([0, maxY]).range([0, height]);
	$: t = { duration: $animation === "on" ? 1000 : 0 };
	$: colorByMajority, updateColor();

	const updateColor = () => {
		if (colorByMajority) $colorTween = highlightColor;
		else $colorTween = color;
	};
</script>

<figure style:width={`${width}px`} style:height={`${height}px`}>
	<!-- axis -->
	<div class="axis">
		{#each range(numTicks) as tick}
			{@const value = ((maxY / (numTicks - 1)) * tick).toFixed(1)}
			<div>{value === "0.0" ? 0 : value}</div>
		{/each}
	</div>

	<!-- bars -->
	{#each data as bar (bar.genre)}
		{@const height = `${heightScale(bar.female_year_2022)}px`}
		{@const width = `${barWidth}px`}
		{@const highlight = colorByMajority && bar.female_listeners_2020 >= 0.5}
		{@const background =
			$animation === "on" && highlight
				? $colorTween
				: $animation === "off" && highlight
				? highlightColor
				: color}
		<div class="bar-group" animate:flip={t}>
			<div class="bar" style:height style:width style:background />
			<div class="label">{bar.genre}</div>
		</div>
	{/each}

	<!-- middle line -->
	{#if middleLine}
		<div class="line-group" style:bottom={`${heightScale(0.5)}px`} in:fade={t}>
			<div class="line" />
			<div class="line-label">
				majority streams by female or mixed-gender artists
			</div>
		</div>
	{/if}
</figure>

<style>
	.axis {
		display: flex;
		flex-direction: column-reverse;
		height: 100%;
		justify-content: space-between;
		align-items: flex-end;
	}
	figure {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		font-family: var(--mono);
		color: var(--color-gray-500);
		position: relative;
	}
	.bar-group {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.label {
		position: absolute;
		bottom: 0;
		transform: translate(-14px, 25px) rotate(-30deg);
		transform-origin: 100% 0;
	}
	.line-group {
		position: absolute;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.line {
		height: 4px;
		width: 95%;
		background: black;
	}
	.line-label {
		position: absolute;
		margin-top: 4px;
		color: black;
	}
</style>
