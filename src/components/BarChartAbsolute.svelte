<script>
	import { scaleLinear, scaleBand, max } from "d3";
	import { animation } from "$stores/misc.js";
	import _ from "lodash";
	import { tweened } from "svelte/motion";
	import { interpolateLab } from "d3-interpolate";
	import { fade } from "svelte/transition";
	import { flip } from "svelte/animate";

	export let data;
	export let middleLine;
	export let colorByMajority;

	$: sortedData = _.orderBy(data, xAccessor);

	const width = 800;
	const height = 600;
	const margin = { left: 0, top: 0, right: 0, bottom: 20 };
	const color = "rgb(247, 141, 42)";
	const highlightColor = "rgb(219, 211, 189)";
	const colorTween = tweened(color, {
		interpolate: interpolateLab,
		duration: 800
	});

	const xAccessor = (d) => d.genre;
	const yAccessor = (d) => d.female_year_2022;
	$: xScale = scaleBand()
		.domain(data.map(xAccessor))
		.range([margin.left, width - margin.right]);
	$: yScale = scaleLinear()
		.domain([0, max(data, yAccessor)])
		.range([height - margin.bottom, margin.top]);
	$: t = { duration: $animation === "on" ? 1000 : 0 };
	$: colorByMajority, updateColor();

	const updateColor = () => {
		if (colorByMajority) $colorTween = highlightColor;
		else $colorTween = color;
	};
</script>

<figure style:width={`${width}px`} style:height={`${height}px`}>
	<svg {width} {height}>
		<g transform={`translate(${margin.left}, ${margin.top})`}>
			{#each sortedData as bar (bar.genre)}
				{@const x = xScale(xAccessor(bar))}
				{@const y = yScale(yAccessor(bar))}
				{@const h = yScale(0) - yScale(yAccessor(bar))}
				{@const w = xScale.bandwidth()}
				{@const highlight = colorByMajority && bar.female_listeners_2020 >= 0.5}
				{@const fill =
					$animation === "on" && highlight
						? $colorTween
						: $animation === "off" && highlight
						? highlightColor
						: color}
				{@const label = xAccessor(bar)}
				<g
					id={_.kebabCase(bar.genre)}
					class:animated={$animation === "on"}
					transform={`translate(${x}, ${y})`}
					animate:flip={t}
				>
					<rect height={h} width={w} {fill} />
					<text x={0} y={h + 20}>{label}</text>
				</g>
			{/each}
		</g>

		{#if middleLine}
			<g transform={`translate(0, ${yScale(0.5)})`} in:fade={t}>
				<line x1={margin.left} y1={0} x2={width - margin.right} y2={0} />
				<text x={0} y={-10}
					>majority streams by female or mixed-gender artists</text
				>
			</g>
		{/if}
	</svg>
</figure>

<style>
	/* .animated {
		transition: all 2s;
	} */
	line {
		stroke: black;
		stroke-width: 4px;
	}
</style>
