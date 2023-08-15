<script lang="ts">
	
	import "bootstrap/dist/css/bootstrap.min.css" 
    
	import ApiWeather from "../lib/ApiWeather.svelte";
	import Login from "../lib/Login.svelte";
	import Logo from "../lib/Logo.svelte";
	
	let username:string;
	let password:string;

	let usuarioVal = "euge"
	let contraseñaVal= "1" ;

	function handleLogin(event: MouseEvent) {
		username = event.detail.username;
		password = event.detail.password;
	}
	
</script>


{#if (username !== usuarioVal || password !== contraseñaVal)}

<Login on:login={handleLogin} />


{:else}
<div class="d-flex">
<nav>
	<div class="text-start">
	  <ul class="nav justify-content">
		  <li class="nav-item">
			  <a class="nav-link" href="/In">Home</a>
			  <hr/>
		  </li>
		  <li class="nav-item">
			  <a class="nav-link" href="/Registro">Registros</a>
			  <hr/>
		  </li>
		  
		  <li class="nav-item">
			<a class="nav-link" href="/Vademecum">Vademécum</a>
			<hr/>
		  </li>
		  
		  <li class="nav-item">
			  <a class="nav-link" href="/Calculador">Calculador de Insulinas</a>
			  <hr/>
		  </li>
		  <li class="nav-item">
			  <a class="nav-link" href="/LeyDbt">Ley de DBT</a>
			  <hr/>
		  </li>
		</ul>
		<div class="pt-4 mt-2">
		  <ApiWeather/>
		</div>
  </div> 
  </nav>
  <div>
	<Logo/>
  </div>
</div>

  {/if}

<style>

nav {
	    background-color: var(--color-bg-3);
		display: flex;
		justify-content: space-between;
		font-family: var(--font-body);
		padding: 0px;
		margin: 0 0 0 -10px;
		height: 95vh;
		width: 190px ;
		border-right: 1.5px solid #d0d0d0;
		font-weight: 600;
		
	}

a {
	color: #eceff4;
    text-decoration: none;
	font-size: 16px;
	width: 150px;
}

a:hover {
  color: #009acd ;
}

li:hover{
	background-color: var(--color-bg-0);
	border-right: 1.5px solid #d0d0d0;
}

hr {
	color: #edf1f7;
	margin: 0;
	width: 190px;
}

</style>