<script>
	import { parse } from 'cookie';
	import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<svelte:head>
	<title>Ley de Diabetes</title>
	<meta name="description" content="Ley de Diabetes" />
</svelte:head>

<h2 class="mt-3">Resolución 2820/2022</h2>
<h5>MEDICAMENTOS E INSUMOS COMPRENDIDOS:</h5>
<div class="d-flex mx-3 gap-5">
	<p>Medicamentos/insumos basicos</p>
	<p>Cantidad de referencia (1) y descripcion del insumo</p>
</div>
<div class="scroller">
	<table>
		<tr>
			<th>A) PERSONAS EN TRATAMIENTO CON INSULINAS</th>
			<th>TRATAMIENTO NO INTENSIFICADO SOLO O COMBINADO CON ANTIDIABÉTICOS ORALES</th>
			<th>TRATAMIENTO INTENSIFICADO (2)</th>
		</tr>
		<tr>
			<td>INSULINAS</td>
			<td
				>Concentración de: U 100, 200 (3) y 300 (4). ● Origen o Humano: regular, NPH y premezclas. o
				Análogos de insulina: a Acción rápida: lispro, aspártica, glulisina. b Acción prolongada:
				detemir, glargina, degludec 5 c premezclas.</td
			>
			<td>idem.</td>
		</tr>

		<tr>
			<td>Jeringas descartables para insulina</td>
			<td>365 anuales</td>
			<td>800 anuales</td>
		</tr>
		<tr>
			<td>Agujas descartables para uso subcutáneo</td>
			<td>365 anuales</td>
			<td>800 anuales</td>
		</tr>
		<tr>
			<td>Lancetas descartables para punción digital </td>
			<td>365 anuales</td>
			<td>730 anuales</td>
		</tr>
		<tr>
			<td>Tiras reactivas para automonitoreo glucémico (AMG) </td>
			<td>500 anuales</td>
			<td>1500 anuales y 2100 anuales en situaciones especiales (6) </td>
		</tr>
		<tr>
			<td>Tiras reactivas para acetona en sangre y/u orina</td>
			<td>50 anuales</td>
			<td>100 anuales</td>
		</tr>
		<tr>
			<td>Sistema de Monitoreo de Glucosa Intermitente o Flash: lector y sensores (7) </td>
			<td>---</td>
			<td>▪ 1 lector cada 3 años ▪ 26 sensores por año ▪ 750 tiras reactivas para AMG por año</td>
		</tr>
		<tr>
			<td>Tiras reactivas para glucosa en orina </td>
			<td>100 anuales </td>
			<td>100 anuales </td>
		</tr>
		<tr>
			<td>Infusor subcutáneo continuo de insulina (bomba) y sus insumos descartables (8)</td>
			<td>Según prescripción médica especializada (9)</td>
			<td>Según prescripción médica especializada (9)</td>
		</tr>
		<tr>
			<td>Glucagón (10)</td>
			<td>Glucagón 1 mg</td>
			<td>1 por año</td>
		</tr>
		<tr>
			<td
				>B) PERSONAS EN TRATAMIENTO CON ANTIDIABÉTICOS ORALES: metformina, sulfonilureas, iDPP4,
				pioglitazona, iSGLT2.
			</td>
			<td
				>Metformina. iDPP4 (11): sitagliptina, vildagliptina. Pioglitazona. iSGLT2 (12):
				empagliflozina, canagliflozina, dapagliflozina.
			</td>
			<td>Sulfonilureas: gliclazida, glipizida, glimepirida. Según prescripción médica. </td>
		</tr>
		<tr>
			<td>Tiras reactivas para automonitoreo glucémico (AMG)</td>
			<td>50 anuales</td>
			<td>100 anuales</td>
		</tr>
		<tr>
			<td>Lancetas descartables para punción digital.</td>
			<td>50 anuales</td>
			<td>100 anuales</td>
		</tr>
		<tr>
			<td>REFLECTÓMETRO PARA LA LECTURA DE LAS TIRAS REACTIVAS PARA AMG (13)</td>
			<td>1 cada 2 años Todas las personas con diabetes</td>
			<td>idem.</td>
		</tr>
	</table>

	<p>
		(1) Cantidades de referencia: son aquellas establecidas para dar respuesta adecuada a la gran
		mayoría de las personas con diabetes en los diferentes esquemas terapéuticos recomendados.
		Pueden ser modificadas ante casos particulares debidamente documentados mediante historia
		clínica y registro semanal de glucemias.
	</p>

	<p>
		(2) Tratamiento intensificado: consiste en administración de insulina basal (NPH dos a tres
		veces al día, insulina detemir dos veces al día o insulina glargina/degludec una vez al día),
		más insulina adicional de acción rápida en relación a las ingestas (insulina regular o análogos
		rápidos), o infusor subcutáneo continuo de insulina. El tratamiento intensificado será indicado
		por médico/a especializado/a (9).
	</p>
	<p>
		(3) Insulina lispro U200: solamente si el precio por unidad de insulina lispro de la
		concentración U200 no supera el precio por unidad de insulina lispro de concentración U100.
	</p>
	<p>
		(4) Insulina glargina U300: solamente en personas con DM1 si el precio por unidad de insulina
		glargina de la concentración U300 no supera el precio por unidad de insulina glargina de
		concentración U100.
	</p>
	<p>
		(5) Insulina degludec: personas con DM1 que presenten hipoglucemias nocturnas con insulina
		glargina y/o detemir, habiéndose evaluado previamente: técnica de inyección, sitios de
		inyección, habilidades de autocontrol, conocimiento y habilidades de autogestión, estilo de
		vida, dificultades psicológicas y psicosociales, posibles causas orgánicas como la
		gastroparesia. Deberán presentar la indicación acompañada de un resumen de historia clínica del
		médico/a especializado/a que incluya el registro de las hipoglucemias y la evaluación de los
		criterios mencionados previamente.
	</p>
	<p>
		(6) Situaciones especiales: tratamiento intensificado con riesgo frecuente de hipoglucemias o
		infusor subcutáneo continuo de insulina o gestantes con diabetes pregestacional o gestacional
		con insulina o mujer con diabetes que planifica su embarazo.
	</p>
	<p>
		(7) Sistema de Monitoreo de Glucosa Intermitente o Flash (MG-i): ante indicación expresa y
		fundamentada de médico/a especializado/a y entrenado/a en el manejo de la tecnología. Su
		otorgamiento deberá ser evaluado y aprobado por la auditoría de la entidad que corresponda,
		utilizando como referencia los siguientes criterios: Personas con Diabetes Mellitus tipo 1 que
		presenten todas las siguientes condiciones en forma simultánea: 1. estar bajo tratamiento
		intensificado con insulina (2) durante por lo menos 6 meses, 2. realizar 6 o más AMG por día,
		durante por lo menos los últimos 3 meses, 3. haber recibido educación diabetológica para el
		automanejo (EDAM) y realizar adecuadamente conteo de hidratos de carbono, 4. tener capacidad de
		realizar las tareas necesarias para el uso de esta tecnología en forma segura y efectiva, por
		parte de la persona con DM1 o su cuidador, 5. compromiso a utilizar el MG-i por lo menos el 70%
		del tiempo, 6. a las anteriores debe sumarse al menos una de las siguientes: ❖ requerir la
		realización de 6 o más AMG por día para conseguir la meta individualizada de control glucémico
		(HbA1c), ❖ presentar uno o más episodios por año de hipoglucemia nivel 3 (hipoglucemia asociada
		a disfunción cognitiva severa que requiere ayuda externa) sin causa obvia prevenible, ❖ padecer
		hipoglucemias nocturnas a pesar del refuerzo de EDAM y haber descartado causas obvias
		prevenibles, ❖ pérdida de la sensibilidad en los pulpejos de los dedos por el uso frecuente de
		la medición de glucosa capilar afectando el desempeño en su actividad laboral (ejemplo músicos)
		o personas con discapacidad visual que leen Braille. Criterios de suspensión del MG-i, uno o más
		de los siguientes: ● Cuando la persona con DM1 lo desea. ● Ante reacciones cutáneas asociadas al
		adhesivo del sensor u otros efectos adversos causados por el dispositivo. ● Paciente que no
		utilice el sistema al menos el 70% del tiempo, medido a través de las lecturas del sensor. ● Si
		la tasa de ocurrencia de hipoglucemias nivel 3 y/u otras complicaciones graves sean iguales o
		mayores a la tasa del año previo al inicio del uso del dispositivo. ● Si el/la paciente utiliza
		un número de tiras de glucemia capilar similar al que venía usando antes de facilitarle el
		sensor. Nota: la persona con Diabetes Mellitus tipo 1 beneficiaria del MG-i requiere continuar
		con la cobertura de 750 tiras reactivas para automonitoreo glucémico (AMG) por año.
	</p>
	<p>
		(8) Infusor subcutáneo continuo de insulina (ISCI) (también denominado bomba de infusión
		continua de insulina): ante indicación expresa y fundamentada de médico/a especializado/a y
		entrenado/a en el manejo de la tecnología. No prescribir por nombre comercial. Su otorgamiento
		deberá ser evaluado y aprobado por la auditoría de la entidad que corresponda, utilizando como
		referencia los Lineamientos Técnicos para la prescripción de los ISCI del Ministerio de Salud de
		la Nación, los cuales serán publicados en la página web oficial del mismo.
	</p>
	<p>
		(9) Prescripción médica especializada: Médicos/as especialistas en Endocrinología y/o Nutrición,
		y aquellos especialistas en Clínica Médica, Medicina General y Pediatría, que acrediten
		capacitación en Diabetes (Especialización Universitaria a través de carreras de especialización
		y/o maestrías, capacitación en sociedades científicas afines).
	</p>
	<p>
		(10) Glucagón: Glucagón 1 mg en personas con diagnóstico de DM1. Uno por año. Se autorizará la
		cobertura del glucagón más de una vez al año si la persona con DM1 confirma su utilización a
		través de resumen de historia clínica del profesional tratante.
	</p>
	<p>
		(11) Sitagliptina o Vildagliptina (gliptinas o iDPP-4): 1. En personas adultas con DM2 como
		tratamiento complementario de la metformina cuando la persona presente todos estos criterios
		simultáneamente: ● No logre la meta de HbA1c con dosis máxima tolerada de metformina (con 3 a 6
		meses de tratamiento documentado). ● No tenga contraindicaciones para la utilización de iDPP-4.
		● Los valores de HbA1c no superen en más del 1% del valor meta. ● Presente riesgo aumentado de
		hipoglucemia. 2. En personas adultas con DM2 como tratamiento alternativo a la metformina cuando
		la persona presente todos estos criterios simultáneamente: ● Contraindicaciones para el uso de
		la metformina. No tenga contraindicaciones para la utilización de iDPP-4. ● Sus valores de HbA1c
		no superen en más del 1% del valor meta. ● Presente riesgo aumentado de hipoglucemia.
	</p>

	<p>
		(12) Empaglifloziona, Canagliflozina o Dapagliflozina (iSGLT2) en personas adultas con DM2 que
		no alcancen meta individualizada de HbA1c con el tratamiento antidiabético instaurado y que
		además presenten: ● enfermedad cardiovascular establecida y/o ● nefropatía diabética en
		tratamiento con IECA o ARAII. Nota: a los fines de implementar la cobertura se considera: •
		enfermedad cardiovascular establecida: antecedentes de infarto agudo de miocardio, angina
		crónica estable diagnosticada por prueba provocadora de isquemia con ejercicio o fármacos,
		cirugía de revascularización miocárdica o angioplastia previa, y/o internación por angina
		inestable con cambios en el ECG y/o marcadores serológicos (troponina).
		Nefropatía diabética: índice de filtrado glomerular estimado igual o menor a 60 ml/min y/o presencia
		de albuminuria mayor a 30 mg/g por más de 3 meses.
	</p>
	
	<p>
		(13) Incluye reflectómetro parlante en aquellas personas con DM y discapacidad visual. La
		prescripción de los mismos no podrá efectuarse por nombre comercial.
	</p>
</div>

<style>
	h2,
	h5,
	td,
	th,
	tr {
		color: white;
		margin: 0;
	}

	p {
		color: white;
		margin: 20px 0 0 0;
	}

	table,
	th,
	td,
	tr {
		border-collapse: collapse;
		border: rgb(254, 251, 251) 1px solid;
		padding: 15px;
	}

	.scroller {
		width: 1140px;
		height: 530px;
		overflow-y: scroll;
		padding: 0 170px 0 0;
	}
</style>
