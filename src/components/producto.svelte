<script>
	export let datos;
</script>

<h3>{datos.Category}</h3>
<div>
	<iframe
		sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
		style="width:120px;height:240px;"
		title={datos.type}
		scrolling="no"
		src={datos.Item}
		marginwidth="0"
		marginheight="0"
		frameborder="0"
	/>
</div>

<style>
	iframe {
		width: 120px;
		height: 240px;
	}
</style>
