<script>
	
	import Header from "../lib/Header.svelte";
	import Nav from "./Nav.svelte";
	import "./styles.css";

  </script>

<div class="app">
	<Header />
	<div class="row align-items-center m-0">
	  <div class="col-2 m-0">
		<Nav />	
	  </div>
	  <main class="col-10">
		<slot />
	  </main>
	</div>
  </div>

<style>
	.app {
        background-color: var(--color-bg-0);	
		display: flex;
		flex-direction: column;
		min-height: 92vh;	
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0;
		width: 100%;
		max-width: 63rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	
</style>
