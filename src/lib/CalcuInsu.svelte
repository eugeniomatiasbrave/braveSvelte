<script lang="ts">
  
	import "bootstrap/dist/css/bootstrap.min.css"

  let inputUnidades;
  let inputInsulinas;
  let selected;
  let checkDispensa = 30;
  let cajasDispensa;

let UiCajas = [
{id:1,nombre:"INSULINA APIDRA SOLOSTAR 100UI/ml lap.prellx5x3ml",dosis_representa:1500},
{id:2,nombre:"INSULINA BASAGLAR KWIKPEN 100U/ml iny.prell.x5x3ml",dosis_representa:1500},
{id:3,nombre:"INSULINA DENSULIN N Hum.recomb.100UI/mlx10ml",dosis_representa:1000},
{id:4,nombre:"INSULINA DENSULIN N 100 UI cart.x5 x3 ml",dosis_representa:1500},
{id:5,nombre:"INSULINA DENSULIN R Hum.recomb.100UI/mlx10ml",dosis_representa:1000},
{id:6,nombre:"INSULINA DENSULIN R 100 UI cart.x5 x3ml",dosis_representa:1500},
{id:7,nombre:"INSULINA FIASP FLEXTOUCH 100 UI lapic.x5 x3ml",dosis_representa:1500},
{id:8,nombre:"INSULINA FIASP PENFILL 100 UI cart.x5 x3ml",dosis_representa:1500},
{id:9,nombre:"INSULINA HUMALOG 100 UI 3.0 ml cart.x5",dosis_representa:1500},
{id:10,nombre:"INSULINA HUMALOG 100 UI fco.x 10 ml",dosis_representa:1000},
{id:11,nombre:"INSULINA HUMALOG KWIKPEN Lap.aplic.desc. x5x3ml",dosis_representa:1500},
{id:12,nombre:"INSULINA HUMALOG KWIKPEN 200 U/ML 200U/ml iny.prell.x5x3ml",dosis_representa:1800},
{id:13,nombre:"INSULINA HUMALOG MIX 25 100 UI 3.0 ml cart. x5",dosis_representa:1500},
{id:14,nombre:"INSULINA HUMALOG MIX 25 KWIKPEN Lap.aplic.desc. x5x3ml",dosis_representa:1500},
{id:15,nombre:"INSULINA HUMALOG MIX 50 100 UI 3.0 ml cart. x5",dosis_representa:1500},
{id:17,nombre:"INSULINA HUMALOG MIX 50 KWIKPEN Lap.aplic.desc. x5x3ml",dosis_representa:1500},
{id:18,nombre:"INSULINA HUMULIN NPH 100 UI fco.x 10ml",dosis_representa:1000},
{id:19,nombre:"INSULINA HUMULIN NPH 3.0 ml cart. x5",dosis_representa:1500},
{id:20,nombre:"INSULINA HUMULIN R 3.0 ml cart.x 5",dosis_representa:1500},
{id:21,nombre:"INSULINA HUMULIN R fco.x 10 ml",dosis_representa:1000},
{id:22,nombre:"INSULINA HUMULIN N KWIKPEN Lap.aplic.desc.x 5 x 3ml",dosis_representa:1500},
{id:23,nombre:"INSULINA INSULATARDHM 100 UI f.a. x10ml",dosis_representa:1000},
{id:24,nombre:"INSULINA INSULATARD FLEXPEN HM 100UI lap.prell x5x3ml",dosis_representa:1500},
{id:25,nombre:"INSULINA INSULATARD PENFILL HM 100 UI cart. x5x3ml",dosis_representa:1500},
{id:26,nombre:"INSULINA INSUMAN R 100 UI vial x1x5ml",dosis_representa:1500},
{id:27,nombre:"INSULINA INSUMAN N 100 UI cart. x5x3ml",dosis_representa:1500},
{id:28,nombre:"INSULINA INSUMAN R 100 UI cart. x5x3ml",dosis_representa:1500},
{id:29,nombre:"INSULINA INSUMAN N SOLOSTAR 100UI lap.prell. x5x3ml",dosis_representa:1500},
{id:30,nombre:"INSULINA LANTUS cart. x5x3ml",dosis_representa:1500},
{id:31,nombre:"INSULINA LANTUS SOLOSTAR 100UI/ml lap.prell x5x3ml",dosis_representa:1500},
{id:32,nombre:"INSULINA LEVEMIR FLEXPEN 100 UI lapiceras x5x3ml",dosis_representa:1500},
{id:33,nombre:"INSULINA NOVOMIX 30 FLEXPEN 100 UI lapiceras x5x3ml",dosis_representa:1500},
{id:34,nombre:"INSULINA NOVORAPID FLEXPEN 100 UI lapic.x5x3ml",dosis_representa:1500},
{id:35,nombre:"INSULINA NOVORAPID FLEXTOUCH 100 UI lapic.x5x3ml",dosis_representa:1500},
{id:36,nombre:"INSULINA NOVORAPID PENFILL 100 UI cart. x5x3ml",dosis_representa:1500},
{id:37,nombre:"INSULINA OPTISULIN SOLOSTAR lap.prell.descart. x5x3ml",dosis_representa:1500},
{id:38,nombre:"INSULINA OPTISULIN SOLOSTAR lap.prell.descart. x5x3ml",dosis_representa:1500},
{id:39,nombre:"INSULINA TRESIBA FLEXTOUCH 100 U lapiceras x5x3ml",dosis_representa:1500},
{id:40,nombre:"INSULINA TRESIBA FLEXTOUCH 200 U lapiceras x3x3ml",dosis_representa:1800}
];

                  
  const Calculador = () => {
       let unidadesDispensa = inputUnidades*checkDispensa;
       cajasDispensa=unidadesDispensa/selected.dosis_representa;


        if (inputUnidades>6 && inputUnidades<200){
        Swal.fire({  
          icon: 'success',
          title:'Dispensar ' + Math.ceil(cajasDispensa)+ ' Cajas', 
          text: 'Calculo exacto '+ cajasDispensa.toFixed(2)+ ' cajas de insulinas.',
          backdrop: true,
          confirmButtonText: 'VOLVER',
          confirmButtonColor:'var(--color-bg-1)',
          }); 
      }else{
          Swal.fire({ 
            icon: 'question',
            title:'UI dia Fuera de Rango', 
            text: 'No dispensar, Consultar a Auditoria',
            backdrop: true,
            confirmButtonText: 'VOLVER',
            confirmButtonColor:'var(--color-bg-1)',
            })}
       }
  
</script>


<section class="container-fluid">
  <div class="titulo">
    <h1>Calculador de Insulinas</h1>
      <p>Realizar el calculo ágil y preciso en el departamento de auditoría.</p>
      <p>Calcular las cajas a dispensar por los coordinadores ante la falla del sistema dispensador.</p>
      <p>Dar respuesta a los Afiliados en el contact center respecto a la cantidad por recibir.</p>
    </div>

  <form class="card border-dark text-center "> 
    <div class="card-header"><h6 class="text-center m-0">CALCULADOR DE INSULINAS A DISPENSAR</h6></div>
     <div class="p-2">
    <p >Ingresar los datos en los campos y ralizar el calculo.</p>  <!--uso el atributo "for" para asociarlo con el input  "id" -->
    <input  type="number" bind:value={inputUnidades} for={inputUnidades} class="form-control p-1 mt-1" placeholder="Ingresar las UI día que se aplica el paciente" required >
    <!--uso bind:valiu para asociar la variable estado-->

    <select  bind:value={selected} for={inputInsulinas} class="form-select p-1 mt-1" aria-label="Default select example" required> 
      {#each UiCajas as UiCaja}
        <option value={UiCaja}>
          {UiCaja.nombre}
        </option>
      {/each}
    </select>
  </div>
    <div class="d-flex justify-content-around p-1 mt-1" required>
      <p>Tipo de Dispensa:</p>
      <label>
        <input type="radio" bind:group={checkDispensa} value={30} />Mensual
      </label>
      
      <label>
        <input  type="radio" bind:group={checkDispensa} value={60} />
        Bimestral
      </label>
      
      <label>
        <input  type="radio" bind:group={checkDispensa} value={90} />
        Trimestral
      </label>
    </div>

    <div class="d-flex mx-2 gap-1">
      <button class="btn btn-primary btn-block w-100 mb-1 mt-1" id="bo" on:click|preventDefault={Calculador}>Calcular</button>
      <button class="btn btn-primary btn-block w-100  mt-1 mb-1" id="bo" type="reset" value="Reset">Reset</button>
    </div>

    <div class=" text-start fst-italic mt-3 mb-2 mx-2">
     <p class="lh-1 fs-6" >* Rango aceptable de UI es entre 6 y 200 UI.</p>
     <p class="lh-1 fs-6">* Las cajas de insulinas no son divisibles, se entregan cajas enteras.</p>
     <p class="lh-1 fs-6">* Cajas a dispensar mensual o trimestral según convenio.</p>
    </div>
</form>
</section>


<style>

h6, h1, label {
 color: var(--color-text);
 font-family: var(--font-body);
}

p {
font-size: 15px;
padding: 0px;
margin: 0;
font-family: var(--font-body);
color: var(--color-text);
}

  #bo {
    height: 30px;
    background-color: var(--color-bg-1);
    border: none;
    padding: 3px 5px 10px 5px;
    border-radius: 4px;
}

#bo:hover{
    background-color: var(--color-bg-4);
}

form {
  max-width: 34rem; 
  color:rgb(45, 190, 205); 
  background-color:  var(--color-bg-3) ; 
  margin: 30px 0px 20px 120px;
}

.form-control, .form-select {
  height: 28px;
  border-radius: 4px;
}

.card-header {
  background-color: var(--color-bg-1);
  color: var(--color-bg-0);
}



</style>
