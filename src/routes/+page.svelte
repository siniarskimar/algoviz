<script>
    /** @type {import('$lib/types').TimelineNode[] | null} */
    let timeline = null;

    /** @type {string | null} */
    let comment = "Hellloo";
</script>

<div id="topbar">
    {#if comment}
        <p>{comment}</p>
    {/if}
</div>

<style>
</style>
