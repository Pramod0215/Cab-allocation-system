import React, { Component } from 'react';
import axios from 'axios'



class User extends Component {
    constructor(props){
        super(props);
        this.state={
            user : []
        }
        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        axios.get("http://127.0.0.1:8000/users/")
        .then(res => {
            // console.log(res.data);
          this.setState({ user: res.data });
        });
      }
    componentDidMount(){
        this.refresh();
    }

  render() {
    return (
      <div className="User">
        <h1>User page</h1>
            {this.state.user.map((item,index)=>(<span key={index}>
                <span>{ item.user_name}</span>
            </span>))}
      </div>
    );
  }
}

export default User;
