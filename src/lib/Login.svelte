<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { createEventDispatcher } from 'svelte';

	export let username = '';
	export let password = '';

	const dispatch = createEventDispatcher();

	function Login() {
		dispatch('login', { username, password });
	}
</script>

<div>
	<form class="card border-dark text-center">
		<div class="card-header"><p class="text-center">Inicio</p></div>
		<label>
			<input
				type="text"
				bind:value={username}
				class="form-control"
				placeholder="Ingresar usuario"
				required
			/>
		</label>
		<label>
			<input
				type="password"
				bind:value={password}
				class="form-control"
				placeholder="Ingresar contraseña"
				required
			/>
		</label>
		<button id="bo" type="button" on:click|preventDefault={Login}>Iniciar Sesion</button>
	</form>
</div>

<style>
	form {
		position: absolute;
		top: 200px;
		left: 630px;
		background-color: var(--color-bg-3);
	}

	.form-control {
		height: 28px;
		width: 250px;
		border-radius: 4px;
		margin: 7px 7px 0px 7px;
	}

	p {
		color: white;
	}

	#bo {
		height: 28px;
		width: 110px;
		background-color: var(--color-bg-1);
		border: none;
		border-radius: 4px;
		color: #fff;
		margin: 8px;
	}

	.card-header {
		background-color: var(--color-bg-1);
		color: var(--color-bg-0);
		height: 25px;
		padding-top: 0;
	}
</style>
