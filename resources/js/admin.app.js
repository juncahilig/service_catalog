/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Admin from './Admin';

if (document.querySelector('#root')) {
	ReactDOM.render(<Admin />, document.querySelector('#root'));
}
