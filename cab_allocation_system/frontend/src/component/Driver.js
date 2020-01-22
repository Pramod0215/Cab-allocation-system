import React, { Component } from 'react';
import axios from 'axios';
import { Nav,Navbar } from 'react-bootstrap';
class Driver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: [],
      ride: [],
      drivername: ""
    }
    this.refresh = this.refresh.bind(this);
    this.getUpdate = this.getUpdate.bind(this);

  }
  refresh() {
    axios.get("http://127.0.0.1:8000/driver/")
      .then(res => {
        this.setState({ driver: res.data });
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
    this.getUpdate();
    console.log("This is component did mount");
  }


  acceptingCab = (id, drivername) => {
   
    if (this.state.ride.filter(items => items.driver === drivername && items.ride_status === "ac").length > 0) {
      alert("You are already on a ride, You cannot accept another ride")
    } else {
      axios.put('http://127.0.0.1:8000/rider/' + id + '/', {
        driver: drivername,
        ride_status: "ac"
      }).then(res => this.refresh())
      alert("Thank you for accepting the ride")
    }
  }


  render() {
    return (
      <div className="Driver" >
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="http://localhost:3000/Home">Cab Allocation</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="http://localhost:3000/users">User</Nav.Link>
                    <Nav.Link href=" http://localhost:3000/settings">Setting</Nav.Link>
                </Nav>
            </Navbar>
        <div style={{flexDirection:'row',justifyContent:'center'}}>
        <h1>Driver page</h1>
        </div>
        <div>
          <select value={this.state.value} onChange={(event) => this.setState({ drivername: event.target.value })}>
            <option value="0">Select a Driver name</option>
            {this.state.driver.map((item, index) => (
              <option key={index} value={item.driver_name}>{item.driver_name}</option>
            ))}
          </select>
         
          {this.state.ride.filter(item => item.driver === this.state.drivername && item.ride_status === 'ac').map((item, index) =>
            (<div key={index}>
            
              <p>This is on ride {item.driver_name} </p></div>))}
        </div>

        <div className='card'>
          <h1> User Requested</h1>
          <table >
            <thead>

              <tr className="table-row">

                <th>User</th>
                <th>Ride On</th>
                <th>Status</th>


              </tr>
            </thead>
            <tbody>

              {this.state.ride.filter(item => item.ride_status === "rq").map((item, index) => (
                <tr key={index} item={item}>

                  <td>{item.user}</td>
                  <td>{item.ride_created}</td>

                  <td>{item.ride_status}</td>
                  {item.ride_status === 'rq' ?
                    <td><button onClick={() => this.acceptingCab(item.id, this.state.drivername)}>accept</button></td>
                    :
                    <td></td>}

                </tr>
              ))}


            </tbody>
          </table>
        </div>
        <h1>Driver History</h1>
        <table striped bordered hover variant="dark">
          <thead>
            <tr className="table-row">
              <th>User</th>
              <th>Ride On</th>
              <th>Status</th>


            </tr>
          </thead>
          <tbody>

            {this.state.ride.filter(item => item.driver === this.state.drivername).map((item, index) => (
              <tr key={index} item={item}>

                <td>{item.user}</td>
                <td>{item.ride_created}</td>

                <td>{item.ride_status}</td>
                

              </tr>
            ))}


          </tbody>
        </table>

      </div>
    );
  }
}

export default Driver;
