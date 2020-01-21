import React, { Component } from 'react';
import axios from 'axios';



class User extends Component {
    constructor(props){
        super(props);
        this.state={
            user : [],
            message:'',
            driver:'',
            username:'',
            ride:[],
            status:'rq'
        }
        this.refresh = this.refresh.bind(this);
        this.createRide = this.createRide.bind(this);
    }

    

    refresh() {
        axios.get("http://127.0.0.1:8000/users/")
        .then(res => {
            console.log(res.data);
          this.setState({ user: res.data });
        });

        axios.get("http://127.0.0.1:8000/rider/")
        .then(res => {
          this.setState({ ride: res.data });
        });
      }


    componentDidMount(){
        this.refresh();
    }

    createRide(username){
      const user = this.state.user.filter(item=> item.user_name === username)
      console.log('user detail:', user)
      // const username = this.state.username;
      console.log("user id",user[0].id)
      console.log("length", this.state.ride.filter(items => items.user == username && items.ride_status == "ac").length)
      if (this.state.ride.filter(items => items.user == username && items.ride_status == "ac").length > 0) {
          alert("You can't book the cab as you are already on board")
      } else if (this.state.ride.filter(items => items.user == username && items.ride_status == "rq").length > 0) {
          alert("You have already requested for the cab")
      }
      else {
          axios.post(`http://127.0.0.1:8000/rider/`,{
              user:user[0].id,
              status:"rq",
          })
          alert("Thank you for booking the cab")
      }   
    };
    

  render() {
    return (
      <div className="User">
        <h1>User page</h1>
        <p>{this.state.message}</p>
       {/* <input type='text' onChange={(event)=>this.setState({message:event.target.value})} value={this.state.message}/> */}
       <button onClick={()=>this.createRide(this.state.username)}>Craete Ride</button>
       <button onClick={(event)=> this.setState({message:''})}>End</button>
        <div>
        <select value={this.state.value} onChange={(event) =>this.setState({username:event.target.value})}>
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
            
           
          </tr> 
          </thead>
          <tbody>
            
            {this.state.ride.filter(item=>item.user===this.state.username).map((item,index)=>(
                <div key={index} item={item}>
                    <td>{item.driver}</td>
                    <td>{item.ride_created}</td>
                </div>
          ))}
       </tbody>
       </table>  
        
      </div>
    );
  }
}

export default User;
