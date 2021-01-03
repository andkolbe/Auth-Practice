import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Admin from './views/Admin';
import Details from './views/Details';
import Home from './views/Home';
import Login from './views/Login';
import NewPost from './views/NewPost';


const App: React.FC<AppProps> = (props, state) => {

	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path='/admin'>
					<Admin />
				</Route>
				<Route exact path='/details'>
					<Details />
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/login'> 
					<Login />
				</Route>
				<Route exact path='/new'>
					<NewPost />
				</Route>
			</Switch>
		</BrowserRouter>
	);

}

interface AppProps {}

export default App;