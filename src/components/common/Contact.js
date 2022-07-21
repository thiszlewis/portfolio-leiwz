import React, {Component} from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
    this.updateState = this.updateState.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  successMessage(title, message) {
    return (`<div class="alert alert-success" role="alert">
              <strong>${title}</strong>
              ${message}
             </div>`);
  }

  errorMessage(title, message) {
    return (`<div class="alert alert-danger" role="alert">
              <strong>${title}</strong>
              ${message}
             </div>`);
  }

  updateState(e) {
    let newState = {}
    newState[e.target.id] = e.target.value;
    if (e.target.value === '') {
      $(`#${e.target.id}`).addClass('is-invalid');
      $(`#${e.target.id}`).removeClass('is-valid');
    } else {
      $(`#${e.target.id}`).addClass('is-valid');
      $(`#${e.target.id}`).removeClass('is-invalid');
    }
    this.setState(newState);
  }

  formIsValid() {
    const form = this.state;
    const check = (form.firstName !== '' && form.lastName !== '');

    const result = (check && form.email !== '' && form.message !== '')
      ? true
      : false;

    return result;
  }

  handleSubmit() {
    // const form = this.state;

      const message = this.successMessage('Success!!', 'Form Submitted');
      $('#alertMessage').append(message);
      setTimeout(() => {
        $('#alertMessage').empty();
      }, 4000);
    // }
  }

  render() {
    return (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="contact">
      <br/>
      <div className="my-auto">
        <h2 className="mb-5">Contact</h2>
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <div>
              <div className="form-row">
                <div className="col">
                  <input id="firstName" onChange={this.updateState} type="text" className="form-control" placeholder="First name"/>
                </div>
                <div className="col">
                  <input id="lastName" onChange={this.updateState} type="text" className="form-control" placeholder="Last name"/>
                </div>
              </div>
            </div>
            <br/>
            <div className="form-group row">
              <div className="col-sm-10">
                <input name="email" onChange={this.updateState} type="email" className="form-control" id="email" placeholder="Email"/>
              </div>
            </div>
            <br/>
            <div className="form-group">
              <textarea id="message" onChange={this.updateState} placeholder="Have a question? Ask me anything." className="form-control" rows="8"></textarea>
            </div>
            <div id="alertMessage"></div>
            <button onClick={this.handleSubmit} type="button" className="btn bg-primary btn-lg btn-block text-white">Submit</button>
            <br/>
          </div>
        </div>
      </div>
    </section>);
  }
}

export {
  Contact
}
