<script>
	import { scaleLinear, range, max } from "d3";

	export let data;
	export let middleLine;
	export let colorByMajority;

	const height = 600;
	const barWidth = 25;
	const numTicks = 7;
	const colors = ["cornflowerblue", "red"];

	$: maxY = max(data.map((d) => d.female_year_2022));
	$: heightScale = scaleLinear().domain([0, maxY]).range([0, height]);

	// 1) fade in line
	// import { fade } from "svelte/transition";
	// add transition:fade to .line-group

	// 2) animate sort
	// import { flip } from "svelte/animate";
	// add animate:flip to .bar-group
	// add (bar.genre) as a key in the {#each data as bar} loop

	// 3) color tween
	// TODO: i think i'm doing the coloring wrong
</script>

<figure style:height={`${height}px`}>
	<!-- axis -->
	<div class="axis">
		{#each range(numTicks) as tick}
			{@const value = ((maxY / (numTicks - 1)) * tick).toFixed(1)}
			<div>{value === "0.0" ? 0 : value}</div>
		{/each}
	</div>

	<!-- bars -->
	{#each data as bar}
		{@const height = `${heightScale(bar.female_year_2022)}px`}
		{@const width = `${barWidth}px`}
		{@const majorityFemale = bar.female_year_2022 >= 0.5}
		{@const background =
			colorByMajority && majorityFemale ? colors[1] : colors[0]}
		<div class="bar-group">
			<div class="bar" style:height style:width style:background />
			<div class="label">{bar.genre}</div>
		</div>
	{/each}

	<!-- middle line -->
	{#if middleLine}
		<div class="line-group" style:bottom={`${heightScale(0.5)}px`}>
			<div class="line" />
			<div class="line-label">
				majority streams by female or mixed-gender artists
			</div>
		</div>
	{/if}
</figure>

<style>
	.bar {
		background: cornflowerblue;
	}
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
		width: 80%;
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
