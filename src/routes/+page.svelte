<script>
	import { GetProducts } from '../services/GetProducts';
	import Producto from '../components/producto.svelte';
	const ProductPromise = GetProducts();
</script>

<!-- {#await ProductPromise then products}
	<sections>
		{#each products as items}
			<Producto datos={items} />
		{/each}
	</sections>
{/await} -->
<div>
	<h2>En construccion 🛠️</h2>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h2 {
		font-size: 50px;
	}
</style>
