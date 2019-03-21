/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from './routes';

const App = props => (
    <Router>
		<>			
			<Switch>
				{routes.map((route, key) => (
					<Route 
						key={key}
						exact
						path={route.path}
						component={route.component}
					/>
				))}
			</Switch>
		</>
    </Router>
);

if (document.querySelector('#root')) {
    ReactDOM.render(<App />, document.querySelector('#root'));
}

export default App;
