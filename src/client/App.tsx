import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import Admin from './views/Admin';
import Details from './views/Details';
import Donate from './views/Donate';
import Home from './views/Home';
import Login from './views/Login';
import NewPost from './views/NewPost';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51HyS4gIXqaK8Y2qAvhIXEiF3auu4hmNfnyaa6DsaqtvIrokmGdmfa2y4rWgsJEKTz8j52JicFaDUkm0eHmf3WjXi00TDOeQRFM');

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
				<Route exact path='/donate'>
					<Elements stripe={stripePromise}><Donate/></Elements>
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