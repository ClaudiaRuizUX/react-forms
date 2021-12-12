import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { fistName: this.state.firstName,
      lastName: this.state.lastName }
      let dataArray = this.state.submittedData.concat(formData)
    // this.sendFormDataSomewhere(formData)
    this.setState({submittedData: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <form onSubmit={event => this.hanleSubmit(event)}>
        <input type="text" 
        onChange={event => this.handleFirstNameChange(event)}
        value={this.state.firstName}
      />
        <input
        type="text" 
        onChange={event => this.handleLastNameChange(event)}
        value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;