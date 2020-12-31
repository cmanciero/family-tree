import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Family from './components/family/Family';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Person from './components/person/Person';
import { ROUTES } from './router/routes';

function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route path={ROUTES.ABOUT}>
					<About />
				</Route>
				<Route path={ROUTES.FAMILY}>
					<Family />
				</Route>
				<Route path={`${ROUTES.PERSON}/:id`}>
					<Person />
				</Route>
				<Route path={ROUTES.HOME}>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
