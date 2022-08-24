<script>
	import { flip } from "svelte/animate";

	export let height;
	export let width;
	export let background;
	export let t;
</script>

<div class="bar-group" animate:flip={t}>
	<div class="bar" style:height style:width style:background />
	<div class="label">{bar.genre}</div>
</div>

<style>
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
</style>
