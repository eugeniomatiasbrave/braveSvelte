<script>
	import 'bootstrap/dist/css/bootstrap.min.css';

	async function getWeather() {
		const res = await fetch(
			'https://api.openweathermap.org/data/2.5/weather?lat=-34.6&lon=-58.45&lang=es&appid=a1a89df45f2c69d5e98224a8cf667099&units=metric'
		);
		const result = await res.json();
		return result;
	};

	let promise = getWeather();
	
</script>

<div class="tiempo">
	{#await promise}
		<p>...waiting</p>
	{:then value}
		<div class="text-center">
			<img
				src="https://openweathermap.org/img/wn/{value.weather[0].icon}@2x.png"
				height="130"
				width="130"
				alt=""
			/>
			<hr />
			<h5>{value.weather[0].description}</h5>
			<hr />
			<h2>{value.main.temp}ºC</h2>
			<hr />
			<p>{value.name}, AR</p>
			<p>
				<img
					src="http://openweathermap.org/images/flags/ar.png"
					alt=""
					height="27"
					width="32"
					class="pt-1"
				/>
			</p>
		</div>
	{:catch error}
		<p>No {error.message}</p>
	{/await}
</div>

<style>
	h5,
	h2,
	p,
	hr {
		color: #1e2e49;
		text-align: center;
		padding: 2px;
		margin: 2px;
	}

	.tiempo {
		background-color: #9ec7f4;
		width: 150px;
		height: 350px;
		border-radius: 15px;
		padding: 5px;
		margin-top: 10px;
		margin-left: 20px;
		font-weight: 600;
		border: 1.5px solid #d0d0d0;
	}
</style>
