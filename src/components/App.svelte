<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import Bar from "$components/Bar.svelte";
	import Line from "$components/Line.svelte";
	import raw from "$data/data.csv";
	import barUnsorted from "$data/bar_unsorted.csv";
	import barSorted from "$data/bar_sorted.csv";
	import _ from "lodash";

	let scrollValue;

	const stepText = [
		"Ok so here’s genres and their share of streams by women/mixed gender bands",
		"Let’s add in a line that’s the cut off of women majority.",
		"let’s resort these by % women/mixed-gender",
		"and then also add in one more data-point, the genres that are majority listened to by women.",
		"We also have this data over time. Here’s pop music.",
		"And k-pop. There are now fewer women artists in k-pop by streams.",
		"We can look at a different data point: where female listeners play female artists more than male listeners do, which is most of them"
	];

	let barData;
	let middleLine;
	let colorByMajority;

	// TODO: use data.csv for everything
	// TODO: don't do genre
	const nums = raw.map((d) => _.mapValues(d, (v) => +v));
	console.log({ nums });

	$: showBar = scrollValue && scrollValue < 4;
	$: showLine = scrollValue >= 4;
	$: barData =
		scrollValue < 2 || scrollValue === undefined
			? barUnsorted.map((d) => ({
					...d,
					female_year_2022: +d.female_year_2022
			  }))
			: barSorted.map((d) => ({
					...d,
					female_year_2022: +d.female_year_2022,
					female_listeners_2020: +d.female_listeners_2020
			  }));
	$: middleLine = scrollValue >= 1;
	$: colorByMajority = scrollValue >= 3;
</script>

<section id="scrolly">
	<div class="sticky">
		{#if showBar}
			<Bar data={barData} {middleLine} {colorByMajority} />
		{:else if showLine}
			<Line />
		{/if}
	</div>

	<Scrolly bind:value={scrollValue}>
		{#each stepText as text, i}
			{@const active = scrollValue === i}
			<div class="step" class:active>
				<p>{text}</p>
			</div>
		{/each}
	</Scrolly>
</section>

<style>
	.sticky {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: sticky;
		top: 4em;
		z-index: -1000;
	}

	.step {
		margin-top: 100vh;
		width: 500px;
		background: var(--color-gray-100);
		text-align: center;
	}

	.step p {
		padding: 1rem;
	}
</style>
