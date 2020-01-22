import React, { Component } from 'react'

import { Dropdown } from 'react-bootstrap';
import { Nav,Navbar} from 'react-bootstrap';
class Home extends Component {
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
                 <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Menu
  </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="http://localhost:3000/users">User</Dropdown.Item>
                        <Dropdown.Item href="http://localhost:3000/drivers">Driver</Dropdown.Item>

                    </Dropdown.Menu> 
                 </Dropdown>
               {/* <NavLink to="/" >Home</NavLink>
                <NavLink to="/users">User</NavLink> */}

            </div>
        )
    }
}

export default Home;