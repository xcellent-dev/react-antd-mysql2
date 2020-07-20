import React from 'react';

import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
const FormItem = Form.Item;

class AddForm extends React.Component {
	constructor(props){
		super(props);		
	}

  handleSubmit(e){
   	e.preventDefault();
    
    this.props.form.validateFields((err, values) => {
      if (!err) {        
        this.props.onSubmitCard(values);
      }
    });

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    
    //console.log(this.props.cardFormStatus);
    if( this.props.cardFormStatus.status=="SUCCESS" ){
    	alert("Success");
    }else if( this.props.cardFormStatus.status=="FAILURE" ){
    	alert("Failure");
    }

    return (

    	<Row type="flex" align="middle" justify="center" style={{marginTop:20}}>
    		<Col xs={18} sm={17} md={12} lg={9}>
			<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
				<FormItem>
				  {getFieldDecorator('question', {
				    rules: [{ required: true, message: 'Please input your question!' }],
				  })(
				    <Input prefix={<Icon type="question" style={{ fontSize: 13 }} />} placeholder="Question" />
				  )}
				</FormItem>

				<FormItem>
				  {getFieldDecorator('answer', {
				    rules: [{ required: true, message: 'Please input your Password!' }],
				  })(
				    <Input prefix={<Icon type="exclamation" style={{ fontSize: 13 }} />} placeholder="Answer" />
				  )}
				</FormItem>

				<FormItem>
				  {getFieldDecorator('hint', {
				    rules: [{ required: true, message: 'Please input your hint!' }],
				  })(
				    <Input prefix={<Icon type="smile-o" style={{ fontSize: 13 }} />} placeholder="Hint" />
				  )}
				</FormItem>

				<FormItem>          
				  <Button type="primary" htmlType="submit" className="login-form-button">
				    Submit
				  </Button>
				</FormItem>
			</Form>
			</Col>
		</Row>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(AddForm);

export default WrappedHorizontalLoginForm;