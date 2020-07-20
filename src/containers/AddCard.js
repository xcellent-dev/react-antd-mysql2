import React from 'react';
import { AddForm } from 'components';
import { connect } from 'react-redux';
import { cardPostRequest } from '../actions/addCard';


class AddCard extends React.Component{

	constructor(props){
		super(props);
	}

	onSubmitCard(formInfo){
		this.props.cardPostRequest(formInfo);
	}

	render(){
		return (
			<div>
				<AddForm
					onSubmitCard = {this.onSubmitCard.bind(this)}
					cardFormStatus = {this.props.cardFormStatus}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        cardFormStatus: state.addCard.post
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        cardPostRequest: (contents) => {
            return dispatch(cardPostRequest(contents));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);