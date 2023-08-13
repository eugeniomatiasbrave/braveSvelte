<script>
	import "bootstrap/dist/css/bootstrap.min.css"
  import { updateDoc, addDoc, collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
  import { db } from '../routes/firebase';
  import { onDestroy } from 'svelte';

  
	let afi = {credencial:'',dni:'',nombre:'',os:'',dx:'',tel:'', fecha_empa:'',HbA1c:''};
 
  let isOpenModal = false;
  let editStatus= false;
  let editafiId=''; // creo variable vacia para editar el Id en firestore.
  let inputBusquedaAfi;
  let afis = []; 

  const findAfi = () => {
    let bu = afis.find(afi => afi.dni === inputBusquedaAfi);
    if (!bu) {
      Swal.fire({
        title: 'Credencial No encontrada!!',
        text: 'Volver a intentar',
        icon: 'error',
        confirmButtonText: 'Volver',
        confirmButtonColor: 'rgb(235, 60, 150)',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Afiliado: ' + bu.nombre,
        html: '<b>Credencial:</b> ' + bu.credencial + '<br><b>Dni:</b> ' + bu.dni+'<br><b>Obra Social:</b> ' + bu.os +'<br><b>Diagnostico:</b> ' + bu.dx + '<br><b>Tel:</b> ' + bu.tel+'<br><b>fecha_empa:</b> ' + bu.fecha_empa +'<br><b>HbA1c:</b> ' + bu.HbA1c,
        confirmButtonText: 'Volver',
        confirmButtonColor:'var(--color-bg-1)',
      });
    }
  };

 const addData= async ()=>{
    await addDoc (collection (db,'afis'), afi);
                		 
		Swal.fire({  //resultado en Alert
          icon: 'success',
          title:'ALTA REGISTRADA CON EXITO ',
          text: 'Afiliado: ' + afi.nombre ,
          backdrop: true,
          confirmButtonText: 'Volver',
          confirmButtonColor:'var(--color-bg-1)',
          }); 
};

const updateAfis= async ()=>{
  await updateDoc (doc(db,'afis', editafiId), afi)
};

const handleSubmit = async ()=> {
  if (editStatus) {
    updateAfis()
      Swal.fire({  //resultado en Alert
          icon: 'success',
          title:'EDITADO CON EXITO ',
          text: 'Afiliado: ' ,
          backdrop: true,
          confirmButtonText: 'Volver',
          confirmButtonColor:'var(--color-bg-1)',
          }); 
        } else {  
           addData();
        };
  
      afi = {credencial:'',dni:'',nombre:'',os:'',dx:'' ,tel:'', fecha_empa:'',HbA1c:''};
    };

	const unSub= onSnapshot ( collection (db,'afis'), //consulta a la coleccion de tareas de firestore...
	  (querySnpshot) => { 
	    afis= querySnpshot.docs.map(doc => { 
	     	return {...doc.data(), id:doc.id}
	  })
    }, 
	 (err) => { console.log (err) },
	);

 const deleteData= async (id)=>{
    await deleteDoc (doc (db,'afis', id))
     Swal.fire({  //resultado en Alert
          icon: 'success',
          title:'Afiliado Eliminado',
          backdrop: true,
          confirmButtonText: 'Volver',
          confirmButtonColor:'var(--color-bg-1)',
          }); 
     }

  const editData = (editafi) => {
    openModal();

    afi.credencial = editafi.credencial;
    afi.dni = editafi.dni;
    afi.nombre = editafi.nombre;
    afi.os = editafi.os;
    afi.dx = editafi.dx;
    afi.dx = editafi.tel;
    afi.dx = editafi.fecha_empa;
    afi.dx = editafi.HbA1c;

    editafiId= editafi.id;
    editStatus= true;
  };
       
 ////manejo del modal/////
    
  function closeModal() {
		isOpenModal = false;
	};

  function openModal() {
    isOpenModal = true;
  };

  onDestroy (unSub);

</script>
 <div class="titulo">
   <h1>Registros de Afiliados:</h1>
   <p>Altas, bajas, edición y búsqueda de pacientes.</p>
</div>

  <form class="card border-dark text-center"> <!--registro de afiliado-->
    <div class="card-header"><h6 class="text-center m-0">Registro de Afiliados</h6></div>
      <div class="d-flex justify-content-between mx-2">
        <div class=" pt-2">
          <button on:click={openModal} id="bo2">Alta Afiliado</button>
          <div id="modal" class="rounded-top" style="--display: {isOpenModal ? 'block' : 'none'};">
            <form  on:submit|preventDefault={handleSubmit} class="card border-dark ">
              <div class="card-header"><h6 class=" m-0">Alta de Afiliados</h6></div>
              <div class=" row justify-content-around">
                <div class="col-5 ">
                <input
                  bind:value={afi.credencial}
                  type="number"
                  class="form-control mt-2 "
                  id="inputcredencial"
                  placeholder="Ingresar Credencial"
                  required
                />
                <input
                  bind:value={afi.dni}
                  type="number"
                  class="form-control mt-1"
                  id="inputdni"
                  placeholder="Ingresar DNI"
                  required
                />
                <input
                  bind:value={afi.nombre}
                  type="text"
                  class="form-control mt-1"
                  id="inputnombre"
                  placeholder="Ingresar Nombre y Apellido"
                  required
                />
                <input
                  bind:value={afi.os}
                  type="text"
                  class="form-control mt-1"
                  id="inputobrasocal"
                  placeholder="Ingresar OS"
                  required
                />
              </div>
              <div  class="col-5">
                <input
                  bind:value={afi.dx}
                  type="text"
                  class="form-control mt-2 "
                  id="inputdx"
                  placeholder="Dx DBT tipo"
                  required
                />
                <input
                  bind:value={afi.tel}
                  type="number"
                  class="form-control mt-1"
                  id="inputtel"
                  placeholder="Telefono"
                  required
                />
                <input
                  bind:value={afi.fecha_empa}
                  type="text"
                  class="form-control mt-1 "
                  id="inputfecha_empa"
                  placeholder="Fecha Empa."
                  required
                />
                <input
                  bind:value={afi.HbA1c}
                  type="text"
                  class="form-control mt-1"
                  id="inputHbA1c"
                  placeholder="HbA1c"
                  required
                />
              </div>
              </div>
              <div class="d-flex my-2 mx-3 gap-1">
                <button type="submit" id="bo1">Guardar</button>
                <button type="button" id="bo1" on:click={closeModal}>Cancelar</button>
                <button type="reset" id="bo1" value="Reset">Reset</button>
              </div>
            </form>
          </div>
        </div>

        <div class=" d-flex pt-2">
          <input type="number" bind:value={inputBusquedaAfi} class="form-control" placeholder="Nº de Dni" />
          <button  id="bo" on:click|preventDefault={findAfi}>Buscar</button>
        </div>
      </div>
   
        <!--tabla de afiliado-->
<div class="rounded-top" id="scroll">
  <table class="table m-0 ">
   <thead>
    <tr>
      <th class="col-1">Eliminar|Editar</th>
      <th class="">Credencial</th>
      <th class="">Dni</th>
      <th class="">Nombre</th>
      <th class="">OS</th>
      <th class="">Dx</th>
      <th class="">Tel</th>
      <th class="">Fecha_empa</th>
      <th class="">HbA1c</th>  
    </tr>
  </thead>
      <tbody> 
        {#each afis as afi}   
	     <tr>
	    	<td>
          <button on:click={deleteData(afi.id)} id='bo3'><ion-icon name="trash"></ion-icon></button>
          <button on:click={editData(afi)} id="bo3"><ion-icon name="pencil"></ion-icon></button> 
        </td>
        <td>{afi.credencial}</td>
		    <td>{afi.dni}</td>
		    <td>{afi.nombre}</td>
		    <td>{afi.os}</td>
		    <td>{afi.dx}</td>
        <td>{afi.tel}</td>
        <td>{afi.fecha_empa}</td>
        <td>{afi.HbA1c}</td>
	    </tr>
    {/each}
      </tbody>
    </table> <!--fon tabla de afiliado-->
  </div>
</form>
 
 <style>

.titulo{
 margin-bottom: 60px;
 
}

h6, h1, p {
 color: var(--color-text)
}

#bo {
   height: 28px;
   width: 55px;
   background-color: var(--color-bg-1);
   border: none;
   border-radius: 4px;
   color: #fff;
   margin-left: 3px;
}

#bo1 {
   height: 28px;
   width: 100%;
   background-color: var(--color-bg-1);
   border: none;
   border-radius: 4px;
   color: #fff;
}

#bo2 {
   height: 28px;
   width: 100px;
   background-color: var(--color-bg-1);
   border: none;
   border-radius: 4px;
   color: #fff; 
}

#bo3 {
  height: 28px;
  border: none;
  background-color:#e9f6fd;
  color: var(--color-bg-3);
  padding-top: 2px;
  border-radius: 4px;
}

#bo:hover,#bo1:hover,#bo2:hover {
   background-color: var(--color-bg-4);
}

ion-icon {
  font-size: 20px;
  margin: 0px 0px 0px 15px;
  
}

ion-icon:hover{
transform: scale(1.25);
}

.form-control{
  height: 28px;
  width: 250px;
  border-radius: 4px;
}

table {
  width: 1200px;
  
}
 
#scroll {
  margin: 5px 10px 10px 10px;
  overflow: scroll;
  scrollbar-width: 1000px;
}

form {
 max-width: 880px;
 max-height: 300px; 
 color:rgb(45, 190, 205); 
 background-color:  var(--color-bg-3) ; 
margin-bottom: 90px;
}

.card-header {
 background-color: var(--color-bg-1);
 color: var(--color-bg-0);
}

.table td, .table tr{
  border-bottom: 2px solid #afc2d2;
  padding: 0px;
  background-color:  #e9f6fd;
  font-size: 14px;
}

.table th {
  border-bottom: 2px solid #a1a6ab;
  padding: 0px;
  background-color:  #b4b8ba;
  
}

#modal {
		display: var(--display);
		position: fixed;
		z-index: 1;
		top: 50%;
		left: 55%;
		transform: translate(-50%, -50%);
		filter: drop-shadow(0 0 20px #333);
		width: 580px;
	}
.row {
  width: 580px;
}
	form {
		background-color: var(--color-bg-3);
	}
	.card-header {
		background-color: var(--color-bg-1);
		color: var(--color-bg-0);
	}

</style>
