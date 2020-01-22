import React, { Component } from 'react';
import axios from 'axios';
import { Nav,Navbar } from 'react-bootstrap';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      driver: '',
      username: '',
      ride: [],
      ride_status: 'rq'
    }
    this.refresh = this.refresh.bind(this);
    this.getUpdate = this.getUpdate.bind(this);
    this.createRide = this.createRide.bind(this);
    this.endRide = this.endRide.bind(this);

  }



  refresh() {
    axios.get("http://127.0.0.1:8000/users/")
      .then(res => {
        this.setState({ user: res.data });
      });

    axios.get("http://127.0.0.1:8000/rider/")
      .then(res => {
        this.setState({ ride: res.data });
      });
  }
  getUpdate() {
    let obj = this;
    setInterval(function() {
      axios.get("http://127.0.0.1:8000/rider/")
      .then(res => {
        obj.setState({ ride: res.data });
      }), function() {
        console.log("Successful");
      };
    }, 1000, obj);
  }

  componentDidMount() {
    this.refresh();
    getUpdate() ;

  }

  createRide(username) {
    const user = this.state.user.filter(item => item.user_name === username)
    if (this.state.ride.filter(items => items.user === username && items.ride_status == "ac").length > 0) {
      alert("You can't book the cab as you are on board")
    } else if (this.state.ride.filter(items => items.user === username && items.ride_status === "rq").length > 0) {
      alert("You have already requested for the cab")
    }
    else {
      axios.post(`http://127.0.0.1:8000/rider/`, {
        user: user[0].id,
        ride_status: "rq",
      }).then(res => this.refresh())
      alert("Thank you for booking the cab, your request will be accepted soon...")
    }
  };

  endRide = (id) => {
    if (this.state.ride.filter(items =>items.ride_status === "ac").length > 0) {
      axios.put('http://127.0.0.1:8000/rider/' + id + '/', {
        ride_status: "dn"
      }).then(res =>
        this.refresh());
        alert("Ride done")
        
      }
    
  }

  changeUsername(event) {
    this.setState({ username: event.target.value });
    this.refresh();
  }

  render() {
    return (
      <div className="User">
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="http://localhost:3000/Home">Cab Allocation</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="http://localhost:3000/drivers">Driver</Nav.Link>
                    <Nav.Link href=" http://localhost:3000/settings">Setting</Nav.Link>
                </Nav>
            </Navbar>
          <h1> Logged as User:{this.state.username}</h1>
        <p>{this.state.message}</p>
        <button onClick={() => this.createRide(this.state.username)}>Book Ride</button>
        <div>
          <select value={this.state.value} onChange={(event) => this.changeUsername(event)}>
            <option value="0">Select user</option>
            {this.state.user.map((item, index) => (
              <option key={index} value={item.user_name}>{item.user_name}</option>
            ))}
          </select>
        </div>
        <table >
          <thead>
            <tr className="table-row">
              <th>Driver</th>
              <th>Ride On</th>
              <th>Status</th>


            </tr>
          </thead>
          <tbody>

            {this.state.ride.filter(item => item.user === this.state.username).map((item, index) => (
              <tr key={index} >
                <td>{item.driver}</td>
                <td>{item.ride_created}</td>
                <td>{item.ride_status}</td>
                {item.ride_status === 'ac' ?
                  <td><button onClick={() => this.endRide(item.id)}>End</button></td>
                  :
                  <td></td>}
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    );
  }
}

export default User;
