import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import '/Users/alicezhao/Code/courts/src/App.css';


let isLoggedIn = false;

function setLoggedIn(value) {
  isLoggedIn = value;
}


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      dob: '',
      error: '', // New error state
      redirectToSuccess: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, phone, dob } = this.state;

    fetch('http://localhost:3000/courts', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        dob,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Server response:', data);
        if (data.status === 'ok') {
          this.setState({ redirectToSuccess: true, error: '' });
        } else {
          this.setState({ error: 'Please try again.' });
        }
      })
      .catch(error => {
        console.error('Error:', error);
        this.setState({ error: 'An error occurred. Please try again later.' });
      });
  }

  render() {
    if (this.state.redirectToSuccess) {
      // Redirect to another page upon successful form submission
      setLoggedIn(true);
      return <Navigate to="src/pages/success" />;
    }

    return (
      
      <form onSubmit={this.handleSubmit}>
        {this.state.error && (
          <div>
            <h2>{this.state.error}</h2>
          </div>
        )}

        <div className="form-heading">
          <label>Name:</label>
          <input
            type="text"
            className="form-input"
            placeholder="Roger Federer"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-heading">
          <label>Phone:</label>
          <input
            type="text"
            className="form-input"
            placeholder="9021234567"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-heading">
          <label>Date of Birth:</label>
          <input
            type="text"
            className="form-input"
            placeholder="YYYY/MM/DD"
            name="dob"
            value={this.state.dob}
            onChange={this.handleChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="form-button">
            Get Code!
          </button>
        </div>
      </form>
    );
  }
}

export { isLoggedIn, setLoggedIn };

// import React, { Component } from 'react'

// export default class Login extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       name:"",
//       phone:"",
//       dob:"",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit(e){
//     e.preventDefault();
//     const { name, phone, dob } = this.state;
//     console.log(name, phone, dob);
    
//     fetch("http://localhost:3000/courts", {
//       method: "POST",
//       crossDomain: "true",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         name,
//         phone,
//         dob,
//       }),
//     })
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h3>Sign In</h3>

//         <div className="mb-3">
//           <label>Name</label>
//           <input
//             type="text"
//             className="name"
//             placeholder="Roger"
//           />
//         </div>

//         <div className="mb-3">
//           <label>Phone</label>
//           <input
//             type="text"
//             className="phone"
//             placeholder="90231777"
//           />
//         </div>

//         <div className="mb-3">
//           <label>DOB</label>
//           <input
//             type="text"
//             className="date of birth"
//             placeholder="YYYY/MM/DD"
//           />
//         </div>

//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//       </form>
//     )
//   }
// }

// // SimpleForm.js
// import React, { useState } from 'react';
// import '/Users/alicezhao/Code/courts/src/App.css'; // Import the CSS file for styling

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     dob: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-heading">Get Court Access!</h1>
//       <h2 className="form-heading">please input your sign up information</h2>
//       <form onSubmit={handleSubmit}>
//         <label className="form-label">
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="form-input"
//             placeholder='Roger Federer'
//             required
//           />
//         </label>
//         <br />
//         <label className="form-label">
//           Phone:
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="form-input"
//             placeholder='9021234567'
//             required
//           />
//         </label>
//         <br />
//         <label className="form-label">
//           Date of Birth:
//           <input
//             type="text"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             className="form-input"
//             placeholder='yyyy/mm/dd'
//             required
//           />
//         </label>
//         <br />
//         <button type="submit" className="form-button">Get Code!</button>
//       </form>
//     </div>
//   );
// };

// export default Form;
