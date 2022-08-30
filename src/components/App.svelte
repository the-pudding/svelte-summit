<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import BarChartAbsolute from "$components/BarChartAbsolute.svelte";
	import BarChartFlex from "$components/BarChartFlex.svelte";
	import LineChart from "$components/LineChart.svelte";
	import Toggle from "$components/helpers/Toggle.svelte";
	import raw from "$data/data_extended.csv";
	import { animation } from "$stores/misc.js";
	import _ from "lodash";
	import { extent } from "d3";
	import { tweened } from "svelte/motion";

	let scrollValue;

	const stepText = [
		"Here are the top _ genres and their share of streams by women/mixed gender bands.",
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

	const data = raw.map((d) =>
		_.mapValues(d, (value, key) => {
			if (key !== "genre") return +value;
			return value;
		})
	);

	const prepLine = (genre) => {
		const row = data.filter((d) => d.genre === genre)[0];

		const keys = Object.keys(row).filter((d) =>
			d.startsWith("female_performers")
		);

		const result = keys.map((key) => {
			const dateString = key.replace("female_performers_", "");
			const date = new Date(
				dateString.substring(0, 4),
				dateString.substring(4, 6),
				dateString.substring(6, 8)
			);
			return { date, value: row[key] };
		});

		return result;
	};

	$: lineDomain = tweened(
		lineData.slice(0, 2).map((d) => d.date),
		{ duration: 1000 }
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
	$: barData =
		scrollValue < 2 || scrollValue === undefined
			? data
			: _.orderBy(data, (d) => d.female_year_2022);
	$: middleLine = scrollValue >= 1;
	$: colorByMajority = scrollValue >= 3;
	$: lineData = prepLine("k-pop");
</script>

<div class="toggle">
	<Toggle label="animation" style="inner" bind:value={$animation} />
</div>

<section id="scrolly">
	<div class="sticky">
		{#if showBar}
			<BarChartAbsolute data={barData} {middleLine} {colorByMajority} />

			<!-- <BarChartFlex data={barData} {middleLine} {colorByMajority} /> -->
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
