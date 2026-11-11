<script lang="ts">
  import type { Produk } from "#lib/type.js";

    const {data} = $props()

    async function getProduct(): Promise<Produk>{
        const res = await fetch(`/api/products/${data.id}.json`);
        return res.json() as Promise<Produk>;
    }
</script>

{#await getProduct()}
    <p>Loading Product</p>
{:then prod} 
    <h1>{prod.id} - {prod.name}</h1>
    <p>{prod.description}</p>
    <p>{prod.price}</p>
{:catch err}
    <p>Error: {err.message}</p>
{/await}