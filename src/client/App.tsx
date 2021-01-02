import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './views/Admin';
import Home from './views/Home';
import Login from './views/Login';


const App: React.FC<AppProps> = (props, state) => {

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/admin/:id">
					<Admin />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/login"> 
					<Login />
				</Route>
			</Switch>
		</BrowserRouter>
	);

}

interface AppProps {}

export default App;