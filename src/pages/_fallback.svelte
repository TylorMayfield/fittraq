<script>
  import { url } from "@roxi/routify";
  import { Button } from "carbon-components-svelte";
</script>

<div class="e404">
  <div class="huge">Nope</div>
  <div class="big">
    <br />
    <br />
    <a href={$url("../")}><Button kind="secondary">Go back</Button></a>
  </div>
</div>

<style>
  .huge {
    font-size: xx-large;
  }
  .e404 {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>
