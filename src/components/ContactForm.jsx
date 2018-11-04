import React, { Component } from 'react';
import axios from 'axios';

export default class ContactForm extends Component {
    constructor(props) {
		super(props);
		this.state = {
            name: '',
            email: '',
            text: ''
		}
    };
    
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name: name, 
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm = () => {
        document.getElementById('contact-form').reset();
    }

      handleChangeName = (event) => {
        this.setState({
            name: event.target.value,
        })
      }

      handleChangePhone = (event) => {
        this.setState({
            phone: event.target.value,
        })
      }

      handleChangeEmail = (event) => {
          this.setState({
              email: event.target.value
          })
      }

      handleChangeText = (event) => {
          this.setState({
              text: event.target.value
          })
      }

    render() {
        return (
            <div>
                <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                    <div className="control-group form-group">
                        <div className="controls">
                            <label htmlFor="name">Imię i nazwisko:</label>
                            <input id="name" type="text" className="form-control" value={this.state.name} onChange={this.handleChangeName} required data-validation-required-message="To pole jest wymagane" />
                            <p className="help-block"></p>
                        </div>
                    </div>
                    {/* <div className="control-group form-group">
                        <div className="controls">
                            <label htmlFor="phone">Numer telefonu:</label>
                            <input id="phone" type="tel" className="form-control" value={this.state.phone} onChange={this.handleChangePhone}/>
                        </div>
                    </div> */}
                    <div className="control-group form-group">
                        <div className="controls">
                            <label htmlFor="email">Email:</label>
                            <input id="email" type="email" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} aria-describedby="emailHelp"/>
                        </div>
                    </div>
                    <div className="control-group form-group">
                        <div className="controls">
                            <label htmlFor="message">Wiadomość:</label>
                            <textarea id="message" rows="10" cols="100" className="form-control" value={this.state.text} onChange={this.handleChangeText}
                                maxLength="999"></textarea>
                        </div>
                    </div>
                    {/* <!-- For success/fail messages --> */}
                    <button type="submit" className="btn btn-info" value="Submit">Wyślij</button>
                </form>
            </div>
        )
    }
}
