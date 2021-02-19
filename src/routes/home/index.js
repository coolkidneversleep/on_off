import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>This is the current light intensy</h1>
		<div><h2>420</h2> <h3> w/m2</h3></div>
		<p>Did you want to turn on / off your light?</p>
		<div>
			<button class={style.button}>
				ON
			</button>
			<button class={style.button1}>
				OFF
			</button>
			</div>
		
	</div>
);

export default Home;
