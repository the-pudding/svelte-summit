<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import Bar from "$components/Bar.svelte";
	import barUnsorted from "$data/bar_unsorted.csv";
	import barSorted from "$data/bar_sorted.csv";

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

	$: scrollValue, update();
	// TODO: refactor into reactive variables?
	const update = () => {
		if (scrollValue === 0) {
			barData = barUnsorted.map((d) => ({
				...d,
				female_year_2022: +d.female_year_2022
			}));
			middleLine = false;
			colorByMajority = false;
		} else if (scrollValue === 1) {
			barData = barUnsorted.map((d) => ({
				...d,
				female_year_2022: +d.female_year_2022
			}));
			middleLine = true;
			colorByMajority = false;
		} else if (scrollValue === 2) {
			barData = barSorted.map((d) => ({
				...d,
				female_year_2022: +d.female_year_2022
			}));
			middleLine = true;
			colorByMajority = false;
		} else if (scrollValue === 3) {
			barData = barSorted.map((d) => ({
				...d,
				female_year_2022: +d.female_year_2022
			}));
			middleLine = true;
			colorByMajority = true;
		}
	};
</script>

<section id="scrolly">
	<div class="sticky">
		{#if barData}
			<Bar data={barData} {middleLine} {colorByMajority} />
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
