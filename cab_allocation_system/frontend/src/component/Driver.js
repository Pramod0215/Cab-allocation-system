import React, { Component } from 'react';
import axios from 'axios';

class Driver extends Component {
    constructor(props){
        super(props);
        this.state={
            driver : [],
            ride:[],
            drivername:""
        }
        this.refresh = this.refresh.bind(this);

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
   

  
    componentDidMount(){
        this.refresh();
    }
    

  render() {
    return (
      <div className="Driver">
        <h1>Driver page</h1>
        <div>
            <select value={this.state.value} onChange={(event) =>this.setState({drivername:event.target.value})}>
                    <option value="0">Select a Driver name</option>
                    {this.state.driver.map((item, index) => (
                    <option key={index} value={item.driver_name}>{item.driver_name}</option>
                       ))}
            </select>
            {console.log("drivername", this.state.drivername)}
            {console.log("ride-details", this.state.ride)}
            {this.state.ride.filter(item => item.driver == this.state.drivername && item.ride_status =='ac').map((item,index)=>
            (<div key={index}>
                {console.log("Displaying", item.driver_name)}
                <p>This is on ride {item.driver_name} </p></div>))}
            <button>Accepted</button>
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
            
            {this.state.ride.map((item,index)=>(
                <div key={index} item={item}>
                    <td>{item.user}</td>
                    <td>{item.ride_created}</td>
                    <td>{item.ride_status}</td>
                    
                </div>
          ))}
             {this.state.ride.filter(item => item.ride_status =='rq').map((item,index)=>
            (<div key={index}>
                {console.log("Displaying", item.ride_status)}
                <td><button>Accepted</button> </td></div>))}
       </tbody>
       </table>   

      </div>
    );
  }
}

export default Driver;
