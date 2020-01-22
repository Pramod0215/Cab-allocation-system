import React, { Component } from 'react';
import axios from 'axios';
import { Nav,Navbar } from 'react-bootstrap';
class AddNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      username: '',

    }
    this.addNewUser = this.addNewUser.bind(this)
  }
  addNewUser(username) {
    alert("You have successfully registered")
    axios.post('http://127.0.1:8000/users/', {
      user_name: username
    }).then(res => this.refresh());
    this.setState({
      username:""
    })
  }


  refresh() {
    axios.get("http://127.0.0.1:8000/users/")
      .then(res => {
        this.setState({ user: res.data });
      });
  }
  componentDidMount() {
    this.refresh();
  }


  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="http://localhost:3000/home">Cab Allocation</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="http://localhost:3000/home">Home</Nav.Link>
                    <Nav.Link href=" http://localhost:3000/settings">Setting</Nav.Link>
                </Nav>
            </Navbar>
        <h1>Add New user </h1>
        <input type='text' onChange={(event) => this.setState({ username: event.target.value })} value={this.state.username} />
        <button onClick={() => this.addNewUser(this.state.username)}>Add User</button>
        <table >
          <thead>
            <tr className="table-row">
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>

            {this.state.user.map((item, index) => (
              <tr key={index} >
                <td>{item.user_name}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

class AddNewDriver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: [],
      drivername: ''
    }
    this.AddNewDriver = this.addNewDriver.bind(this)
  }

  addNewDriver(drivername) {
    alert("You have successfully registered")
    axios.post('http://127.0.0.1:8000/driver/', {
      driver_name: drivername
    }).then(res => this.refresh());
    this.setState({
      drivername:""
    })

  }
  refresh() {
    axios.get("http://127.0.0.1:8000/driver/")
      .then(res => {
        console.log(res.data);
        this.setState({ driver: res.data });

      });
  }
  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <h1>Add New driver</h1>
        <input type='text' onChange={(event) => this.setState({ drivername: event.target.value })} value={this.state.drivername} />
        <button onClick={() => this.AddNewDriver(this.state.drivername)} >Add Driver</button>
        <table >
          <thead>
            <tr className="table-row">
              <th>Driver Name</th>
            </tr>
          </thead>
          <tbody>

            {this.state.driver.map((item, index) => (
              <tr key={index} >
                <td>{item.driver_name}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

class Setting extends Component {
  render() {
    return (
      <div>
        <AddNewUser />
        <AddNewDriver />
      </div>
    )
  }
}

export default Setting;