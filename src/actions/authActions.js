// Stretch

// import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
// import toast from "toasted-notes";
// import "toasted-notes/src/styles.css";

// export const userPostFetch = (user) => {
//   return (dispatch) => {
//     return fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({ user }),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         if (data.message) {
//           toast.notify(data.message, {
//             position: "bottom-right",
//           });
//         } else {
//           localStorage.setItem("token", data.jwt);
//           dispatch(loginUser(data.user));
//         }
//       });
//   };
// };

// const loginUser = (userObj) => ({
//   type: LOGIN_USER,
//   payload: userObj,
// });

// export const userLoginFetch = (user) => {
//   return (dispatch) => {
//     return fetch("http://localhost:3000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({ user }),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         if (data.message) {
//           toast.notify(data.message, {
//             position: "bottom-right",
//           });
//         } else {
//           localStorage.setItem("token", data.jwt);
//           dispatch(loginUser(data.user));
//           console.log(data.user);
//         }
//       });
//   };
// };



// export const logoutUser = () => ({
//   type: LOGOUT_USER,
// });
