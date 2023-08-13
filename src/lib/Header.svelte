<script>

import "bootstrap/dist/css/bootstrap.min.css"
	
import { time } from '../routes/stores.js';

const formatter = new Intl.DateTimeFormat('en', {
	month: 'numeric',
	day: 'numeric',
	year: 'numeric',
	hour12: true,
	hour: 'numeric',
	minute: '2-digit',
	second: '2-digit'
});

</script>

<header class="header">
  <p>Fecha: {formatter.format($time)}</p>
</header>


<style>
	
  header {
    background-color: var(--color-bg-3);
    color: var(--color-text);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
        padding: 0;
		margin: 0;
		border-bottom: 1.5px solid #d0d0d0;
		
	}
	p {
		color: #fbf6f6;
		font-size: 14px;
		padding-top: 5.5px;
		height: 18px ;
	}

	@media (min-width: 480px) {
		header {
			padding: 0 ;
			margin: 0;
			background-color: var(--color-bg-1);
		}
	}

</style>