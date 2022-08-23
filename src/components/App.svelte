<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import Bar from "$components/Bar.svelte";
	import Line from "$components/Line.svelte";
	import Toggle from "$components/helpers/Toggle.svelte";
	import raw from "$data/data.csv";
	import { animation } from "$stores/misc.js";
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

	const data = raw.map((d) =>
		_.mapValues(d, (value, key) => {
			if (key !== "genre") return +value;
			return value;
		})
	);

	const prepLine = (genre) => {
		const row = data.filter((d) => d.genre === genre)[0];
		const years = [2018, 2020, 2022];

		let prefix;
		if (scrollValue === 6) prefix = `shareskew`;
		else prefix = `female_year`;

		return years.map((year) => ({ year, value: row[`${prefix}_${year}`] }));
	};

	$: showBar = scrollValue < 4 || scrollValue === undefined;
	$: showLine = scrollValue >= 4;
	$: barData =
		scrollValue < 2 || scrollValue === undefined
			? data
			: _.orderBy(data, (d) => d.female_year_2022);
	$: middleLine = scrollValue >= 1;
	$: colorByMajority = scrollValue >= 3;
	$: lineData = scrollValue === 4 ? prepLine("pop") : prepLine("k-pop");
</script>

<div class="toggle">
	<Toggle label="animation" style="inner" bind:value={$animation} />
</div>

<section id="scrolly">
	<div class="sticky">
		{#if showBar}
			<Bar data={barData} {middleLine} {colorByMajority} />
		{:else if showLine}
			<Line data={lineData} />
		{/if}
	</div>

	<Scrolly bind:value={scrollValue}>
		{#each stepText as text, i}
			{@const active = scrollValue === i}
			<div class="step" class:active>
				<p>{text}</p>
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
		width: 500px;
		background: var(--color-gray-100);
		text-align: center;
	}

	.step p {
		padding: 1rem;
	}

	.spacer {
		height: 85vh;
	}
</style>
