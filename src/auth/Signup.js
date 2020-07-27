// Stretch

// import React, {Component} from "react";
// import { connect } from "react-redux";
// import { userPostFetch } from "../actions/authActions";
// import { Typography, TextField, Button, Paper } from "@material-ui/core";

// class Signup extends Component {
//   state = {
//     email: '',
//     password: ''
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleSignup = event => {
//     event.preventDefault()
//     const { history } = this.props
//     this.props.userPostFetch(this.state)
//     history.push('/login')
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   render() {
//     return (
//       <Paper
//         square={true}
//         elevation={23}
//         style={{ padding: "1em", marginTop: "2em" }}
//       >
//         <Typography variant="h4" component="h3" align="center">
//           Sign-up Page
//         </Typography>
//         <Typography variant="subtitle1" component="p" align="center">
//           Sign up to <sup>upvote</sup>, <sub>downvote</sub> and{" "}
//           <em>so much more!</em>
//         </Typography>
//         <Paper>
//           <Paper square={true} style={{ marginTop: "1em" }}>
//             <form onSubmit={this.handleSignup} noValidate autoComplete="off">
//               <TextField
//                 required
//                 type="email"
//                 name="email"
//                 placeholder="E-mail"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//                 label="Required"
//                 variant="filled"
//                 fullWidth
//                 helperText="We will never share your e-mail!"
//               />
//               <TextField
//                 required
//                 name="password"
//                 label="Password"
//                 type="password"
//                 placeholder="Password"
//                 value={this.state.password}
//                 onChange={this.handleChange}
//                 variant="filled"
//                 fullWidth
//                 helperText="Enter your password"
//               />
//               <Button
//                 variant="contained"
//                 size="large"
//                 color="primary"
//                 type="submit"
//                 fullWidth
//               >
//                 Register
//               </Button>
//             </form>
//           </Paper>
//         </Paper>
//       </Paper>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// })

// export default connect(null, mapDispatchToProps)(Signup)