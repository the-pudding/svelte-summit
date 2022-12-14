<script>
	import { scaleLinear, scaleBand, max, tickStep } from "d3";
	import { animation } from "$stores/misc.js";
	import _ from "lodash";
	import { fade } from "svelte/transition";

	export let data;
	export let middleLine;

	const width = 800;
	const height = 600;
	const margin = { left: 150, top: 40, right: 100, bottom: 20 };

	const xAccessor = (d) => d.female_year_2022;
	const yAccessor = (d) => d.genre;
	const formatTick = (d) => d * 100;

	$: sortedData = _.orderBy(data, xAccessor);
	$: xScale = scaleLinear()
		.domain([0, max(data, xAccessor)])
		.range([margin.left, width - margin.right]);
	$: yScale = scaleBand()
		.domain(data.map(yAccessor))
		.range([margin.top, height - margin.bottom])
		.paddingInner(0.03);
	$: t = { duration: $animation === "on" ? 1000 : 0 };
	$: ticks = xScale.ticks(5);
</script>

<figure style:width={`${width}px`} style:height={`${height}px`}>
	<svg {width} {height}>
		<g class="axis">
			{#each ticks as tick, i}
				<g class="tick" transform={`translate(${xScale(tick)}, 0)`}>
					<line x1={0} y1={margin.top} x2={0} y2={height - margin.bottom} />
					<text x={0} y={height - margin.bottom + 20}
						>{`${formatTick(tick)}${i === ticks.length - 1 ? "%" : ""}`}</text
					>
				</g>
			{/each}
		</g>

		<g class="bars">
			{#each sortedData as bar (bar.genre)}
				{@const x = margin.left}
				{@const y = yScale(yAccessor(bar))}
				{@const h = yScale.bandwidth()}
				{@const w = xScale(xAccessor(bar))}
				{@const label = yAccessor(bar)}
				<g
					id={_.kebabCase(bar.genre)}
					class:animated={$animation === "on"}
					transform={`translate(${x}, ${y})`}
				>
					<rect height={h} width={w} />
					<text x={-10} y={h - 10} class="label">{label}</text>
				</g>
			{/each}
		</g>

		{#if middleLine}
			<g
				class="anno"
				transform={`translate(${xScale(0.5)}, 0)`}
				transition:fade|local={t}
			>
				<line x1={0} y1={25} x2={0} y2={height - margin.bottom} />
				<text x={0} y={15}
					>majority streams by female or mixed-gender artists</text
				>
			</g>
		{/if}
	</svg>
</figure>

<style>
	rect {
		fill: orange;
	}
	.animated {
		transition: all 1500ms;
	}
	text {
		fill: var(--color-gray-600);
		font-size: 14px;
		text-anchor: middle;
	}
	.tick line {
		stroke: var(--color-gray-300);
		stroke-dasharray: 3;
		stroke-width: 1;
	}

	.label {
		text-anchor: end;
	}

	.anno line {
		stroke: var(--color-gray-800);
		stroke-width: 4px;
	}
	.anno text {
		fill: var(--color-gray-900);
		font-size: 16px;
	}
</style>
