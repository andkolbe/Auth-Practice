import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import Admin from './views/Admin';
import Details from './views/Details';
import Home from './views/Home';
import Login from './views/Login';
import NewPost from './views/NewPost';


const App: React.FC<AppProps> = props => {

	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<PrivateRoute exact path='/admin/:id'>
					<Admin />
				</PrivateRoute>
				<Route exact path='/details/:id'>
					<Details />
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/login'> 
					<Login />
				</Route>
				<PrivateRoute exact path='/new'>
					<NewPost />
				</PrivateRoute>
			</Switch>
		</BrowserRouter>
	);

}

interface AppProps {}

export default App;