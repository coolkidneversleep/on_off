import { Fragment } from 'react';
import Header from './header/index';
import Home from './home/index';

const App = () => (
	<Fragment>
	<div id="app">
		<div className="">
		<Header />
		</div>
		<div >
			<Home/>
		</div>
	</div>
	<style jsx>
		{
		`
		#id {
			display:flex;
			flex-flow: column;
		}
		`	
		}
	</style>
	</Fragment>
)

export default App;
