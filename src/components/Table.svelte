<script>
	import { flip } from "svelte/animate";
	import { animation } from "$stores/misc.js";

	export let data;
	export let scrollValue;

	const columns = [
		{ key: "genre", label: "Genre" },
		{ key: "female_year_2022", label: "Female performers" },
		{ key: "female_listeners_2020", label: "Female listeners" }
	];

	$: t = { duration: $animation === "on" ? 1200 : 0 };
	$: sortedBy =
		scrollValue === 3
			? "female_listeners_2020"
			: scrollValue === 4
			? "female_year_2022"
			: undefined;
</script>

<table>
	<tr class="row">
		{#each columns as { key, label }}
			{@const sorted = key === sortedBy}
			<th class="item title" class:sorted>{label}</th>
		{/each}
	</tr>

	{#each data as row (row.genre)}
		<tr class="row" animate:flip={t}>
			{#each columns as { key }}
				{@const sorted = key === sortedBy}
				{@const value =
					key !== "genre" ? `${(row[key] * 100).toFixed(1)}%` : row[key]}
				<td class="item" class:sorted>{value}</td>
			{/each}
		</tr>
	{/each}
</table>

<style>
	table {
		width: 70%;
	}
	.item {
		background: var(--color-gray-100);
		width: 200px;
		text-align: center;
		padding: 0.5em;
	}
	.title {
		background: var(--color-gray-300);
		font-weight: 800;
	}
	.sorted {
		background: #f2cc96;
	}
</style>
