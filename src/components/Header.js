import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { Menu, SubMenu, Icon, Row  } from 'antd';


class Header extends React.Component{	

	constructor(props){
		super(props);
		this.state = {
		   current: 'home'
		}
	}

	handleClick(e){		
	    this.setState({
	      current: e.key
		});
	}


	render(){
		return (
			<div>
				<Menu					
					onClick={this.handleClick.bind(this)}
        			selectedKeys={[this.state.current]}
					mode="horizontal"					
				>
				  	<Menu.Item key="home">
			        	<Link to="/">Home</Link>
			    	</Menu.Item>
				  	<Menu.Item key="card">
          				<Link to="/addcard">Add a Card</Link>
        			</Menu.Item>
				</Menu>
			</div>
		)
	}
}

export default Header;