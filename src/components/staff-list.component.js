import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

//The Staff component is implemented as a functional React component.
//The key thing that makes this type of component different from a class component is the lack of state and lifecycle methods. 
//If all you need to do is to accept props and return JSX, use a functional component instead of a class component.
const Staff = props => (
  <tr>
    <td>{props.staff.staff_ID}</td>
    <td>{props.staff.staff_Fname}</td>
    <td>{props.staff.staff_Lname}</td>
    <td>{props.staff.designation}</td>
    <td>{props.staff.date_commence.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.staff._id}>edit</Link> | <a href="#" onClick={() => { props.deleteStaff(props.staff._id) }}>delete</a>
    </td>
  </tr>
)

export default class StaffList extends Component {
  constructor(props) {
    super(props);

    this.deleteStaff = this.deleteStaff.bind(this);

    this.state = { staff: [] };
  }

  //Get the list of exercises from the database
  componentDidMount() {
    axios.get('http://localhost:5000/staffs/')
      .then(response => {
        this.setState({ staff: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  //use the axios.delete method, 
  //then we update the state of exercises 
  //and filter out the exercise that was deleted.
  deleteStaff(id) {
    axios.delete('http://localhost:5000/staffs/' + id)
      .then(res => console.log(res.data));

    this.setState({
      staff: this.state.staff.filter(el => el._id !== id)
    })
  }

  //to return the rows of the table
  //This method iterates through the list of staff items by using the map function. 
  //Each staff item is output with the Staff component.
  staffList() {
    return this.state.staff.map(currentstaff => {
      return <Staff staff={currentstaff} deleteStaff={this.deleteStaff} key={currentstaff._id} />;
    })
  }

  render() {
    return (
      <div className= "container">
        <h3>STAFF LIST</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Staff ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Date of Commencement</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.staffList()}
          </tbody>
        </table>
      </div>
    )
  }
}