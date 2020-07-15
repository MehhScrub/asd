import React, { Component } from "react";
import "./Contactus.css";
import "./contactusreview";

class contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      reason: "",
      email: "",
      message: "",
      value: false,
    };
  }

  render() {
    return (
      <div id="firstdiv">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label id="cntus">Contact US</label>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Reason</label>
            <input
              type="text"
              className="form-control"
              value={this.state.reason}
              onChange={this.onReasonChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onReasonChange(event) {
    this.setState({ reason: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    alert("Thanks for your message, " + this.state.name);
    this.setState({});
  }
}
export default contactus;
