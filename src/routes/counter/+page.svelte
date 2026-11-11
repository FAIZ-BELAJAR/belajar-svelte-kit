<script lang="ts">
    let counter = $state<number>(0)

    function incrCount(){
        counter++
    }
</script>

<h1>Counter: {counter}</h1>

<button onclick={incrCount}>Count</button>