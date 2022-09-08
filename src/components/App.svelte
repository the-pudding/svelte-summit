<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import BarChart from "$components/BarChart.svelte";
	import Table from "$components/Table.svelte";
	import LineChart from "$components/LineChart.svelte";
	import Toggle from "$components/helpers/Toggle.svelte";
	import { animation } from "$stores/misc.js";
	import { extent } from "d3";
	import { tweened } from "svelte/motion";
	import { getBarData, getTableData, getLineData } from "$utils/prepData.js";

	let scrollValue;

	const stepText = [
		"Here are the top 15 genres and their share of streams by women/mixed gender bands.",
		"Genres above the line have majority of streams by women/mixed gender bands.",
		"Let’s sort by the percentage of streams by women/mixed gender bands.",
		"This is a table sorted by share women/mixed gender performers.",
		"Now we can sort it by women/mixed gender listeners.",
		"This is the share skew of k-pop in the last year. Pretty stationary.",
		"Zooming out, we can see that this is part of a larger growth since 2018."
	];

	let barData;
	let middleLine;

	const lineData = getLineData("k-pop");

	$: showBar = scrollValue < 3 || scrollValue === undefined;
	$: showTable = scrollValue >= 3 && scrollValue < 5;
	$: showLine = scrollValue >= 5;
	$: barData = getBarData(scrollValue);
	$: tableData = getTableData(scrollValue);
	$: middleLine = scrollValue >= 1;

	const lineDomain = tweened([new Date("5-1-2021"), new Date("9-1-2022")], {
		duration: $animation === "on" ? 2000 : 0
	});

	$: if (scrollValue > 6) scrollValue = 6;
	$: console.log({ scrollValue });

	$: $lineDomain =
		scrollValue === 6
			? extent(lineData, (d) => d.date)
			: [new Date("5-1-2021"), new Date("9-1-2022")];
</script>

<div class="toggle">
	<Toggle label="animation" style="inner" bind:value={$animation} />
</div>

<section id="scrolly">
	<div class="sticky">
		{#if showBar}
			<BarChart data={barData} {middleLine} />
		{:else if showTable}
			<Table data={tableData} {scrollValue} />
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
		top: 1em;
		right: 1em;
	}

	.sticky {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: sticky;
		top: 6em;
		z-index: -1000;
	}

	.step {
		margin-top: 90vh;
		margin-left: 1em;
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
