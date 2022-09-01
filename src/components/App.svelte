<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import BarChart from "$components/BarChart.svelte";
	import LineChart from "$components/LineChart.svelte";
	import Toggle from "$components/helpers/Toggle.svelte";
	import { animation } from "$stores/misc.js";
	import { extent } from "d3";
	import { tweened } from "svelte/motion";
	import { getBarData, getLineData } from "$utils/prepData.js";

	let scrollValue;

	const stepText = [
		"Here are the top 15 genres and their share of streams by women/mixed gender bands.",
		"Genres above the line have majority of streams by women/mixed gender bands.",
		"Let’s sort by the percentage of streams by women/mixed gender bands.",
		"We can layer on another data point - the highlighted genres are majority <strong>listened to</strong> by women.",
		"We also have this data over time. Here’s pop music.",
		"And k-pop. There are now fewer women artists in k-pop by streams.",
		"We can look at a different data point: where female listeners play female artists more than male listeners do, which is most of them"
	];

	let barData;
	let middleLine;
	let colorByMajority;

	const lineData = getLineData("k-pop");
	let lineDomain = tweened(
		lineData.slice(0, 2).map((d) => d.date),
		{ duration: $animation ? 1000 : 0 }
	);
	$: scrollValue, updateDomain();
	const updateDomain = () => {
		if (scrollValue === 4) {
			$lineDomain = lineData.slice(0, 2).map((d) => d.date);
		} else {
			$lineDomain = extent(lineData, (d) => d.date);
		}
	};

	$: showBar = scrollValue < 4 || scrollValue === undefined;
	$: showLine = scrollValue >= 4;
	$: barData = getBarData(scrollValue);

	$: middleLine = scrollValue >= 1;
	$: colorByMajority = scrollValue >= 3;
</script>

<div class="toggle">
	<Toggle label="animation" style="inner" bind:value={$animation} />
</div>

<section id="scrolly">
	<div class="sticky">
		{#if showBar}
			<BarChart data={barData} {middleLine} {colorByMajority} />
		{:else if showLine}
			<LineChart data={lineData} domain={$lineDomain} />
		{/if}
	</div>

	<Scrolly bind:value={scrollValue}>
		{#each stepText as text, i}
			{@const active = scrollValue === i}
			<div class="step" class:active>
				<p>{@html text}</p>
			</div>
		{/each}

		<div class="spacer" />
	</Scrolly>
</section>

<style>
	.toggle {
		position: fixed;
		top: 0;
		right: 0;
	}

	.sticky {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: sticky;
		top: 4em;
		z-index: -1000;
	}

	.step {
		margin-top: 90vh;
		margin-right: 1em;
		width: 500px;
		background: var(--color-gray-100);
		text-align: center;
	}

	.step p {
		padding: 1em;
		text-align: left;
	}

	.spacer {
		height: 85vh;
	}
</style>
