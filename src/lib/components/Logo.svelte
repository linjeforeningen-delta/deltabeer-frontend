<script lang="ts">
	export let color: string = '#005500';
	export let width: number = 130;
	let height: number = width * 1.2;

	let w = `${width}px`;
	let h = `${height}px`;
	let viewBox = `0 0 130 86`;
</script>

<svg
	width={w}
	height={h}
	{viewBox}
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
>
	<!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
	<title>Path</title>
	<desc>Created with Sketch.</desc>
	<defs></defs>
	<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		<g id="chrome-touch-icon-192x192" transform="translate(-31.000000, -23.000000)" fill={color}>
			<path
				d="M63.0345005,54.2297404 C63.0345005,54.2297404 79.5574028,54.1066336 79.8199977,53.8125421 C95.9713316,35.7239561 95.7272206,26.1240146 139.425775,92.3043124 C35.8911188,92.4301685 139.425775,92.3043124 35.1702517,92.3043124 C29.791105,93.1364938 29.4316314,107.90879 35.1702517,108.752486 C29.2300573,108.752486 158.578666,108.940284 158.578666,108.940284 C162.817612,103.201588 158.578666,93.7187958 158.578666,93.7187958 C99.0712274,8.79410876 99.8377802,6.55038932 63.0345005,54.2297404 Z"
				id="Path"
			></path>
		</g>
	</g>
</svg>
