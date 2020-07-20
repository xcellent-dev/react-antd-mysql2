import React from 'react';
import {Header} from '../components';
import 'antd/dist/antd.css'; 

class App extends React.Component{
		
	render(){
		return(
			<div>
				<Header />				
				{this.props.children}
			</div>
		)
	}
}

export default App;