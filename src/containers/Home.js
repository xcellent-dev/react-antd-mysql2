import React from 'react';

class Home extends React.Component{

	render(){
		return (
			<div style={{textAlign:'center', fontSize:20, marginTop:40}}>
				<p>This is React client side project developed using Antd design + React + React Redux</p>
				<p>Please click <b>Add a card</b> to add a card contents to Mysql Database</p>
			</div>
		)
	}

}

export default Home;