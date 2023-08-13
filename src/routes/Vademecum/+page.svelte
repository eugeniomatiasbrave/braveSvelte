
<script>
	import "bootstrap/dist/css/bootstrap.min.css"
	
    import { vadeData } from "../vadeData";

    let searchTerm = '';
    let filteredVadeData = vadeData;

    function filterVadeData() {
        filteredVadeData = vadeData.filter(va => {
            return va.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                va.presentacion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                va.monodroga.toLowerCase().includes(searchTerm.toLowerCase()) ||
                va.troquel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                va.laboratorio.toLowerCase().includes(searchTerm.toLowerCase()) ||
                va.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }

	function reset() {
    searchTerm = "";
	filteredVadeData = vadeData;
}

</script>

<svelte:head>
	<title>Vademecum</title>
	<meta name="description" content="Vademecum" />
</svelte:head>


<form class="contenedor">
		<div class="d-flex justify-content mx-3">
		 <button  id= "bo" on:click|preventDefault={filterVadeData}>Filtrar</button>
		 <button id= "bo5" on:click|preventDefault={reset}>Reset</button>
         <input type="text" bind:value={searchTerm}  class="form-control" placeholder="Busqueda...marca, presentacion, monodroga, troquel y laboratorio" />
		
	   </div>
   
	  <div id="scroll">
         {#each filteredVadeData as va}
          <div class="card m-2">
            <div class="card-body">
                <h6 >{va.nombre}</h6>
                <p>Presentacion: {va.presentacion}</p>
                <p>Monodroga: {va.monodroga}</p>
                <p>Troquel: {va.troquel}</p>
                <p>Laboratorio: {va.laboratorio}</p>               
            </div>
          </div>
        {/each}
	  </div>
	</form>
<style>

p {
 color: var(--color-text);
 margin: 0;
 font-size: 14px;
}

#scroll {
  overflow: scroll;
  scrollbar-width: 1000px;
  height: 72vh;
  margin: 5px 0 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center ;
  scrollbar-color: light ;
}

.card  {
	width: 20rem;
	height: 8.6rem ;
	background-color:  #364362;
	color:#fff;
	margin: 0;
}

#bo {
   height: 30px;
   width: 90px;
   background-color: var(--color-bg-1);
   border: none;
   border-radius: 4px;
   color: #fff;
   margin: 0 0 0 0;
   
}

#bo5 {
   height: 30px;
   width: 50px;
   background-color: rgb(72, 82, 93);
   border: none;
   border-radius: 4px;
   color: #fff;
   margin: 0 0 0 5px;
   
}

.form-control{
	width: 900px;
	height: 30px;
	border-radius: 4px;
	margin-left: 5px ;
}
.contenedor {
	margin:  50px 0px 0 -50px;	
}
</style>