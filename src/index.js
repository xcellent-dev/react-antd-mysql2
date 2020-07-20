import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, Home, AddCard } from './containers';
 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
	    <Router history={browserHistory}>
	        <Route path="/" component={App}>
	            <IndexRoute component={Home}/>
	            <Route path="home" component={Home}/>
	            <Route path="addcard" component={AddCard}/>
	        </Route>
	    </Router>
    </Provider>, rootElement
);