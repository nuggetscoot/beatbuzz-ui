// import React, { useEffect, useState } from "react";
// // import Image from "../assets/image.png";
// // import Logo from "../assets/logo.png";
// // import GoogleSvg from "../assets/icons8-google.svg";
// // import { FaEye } from "react-icons/fa6";
// // import { FaEyeSlash } from "react-icons/fa6";



// // const Register = () => {
// //   const [ showPassword, setShowPassword ] = useState(false);


// //   return (
// //     <div className="login-main">
// //       <div className="login-left">
// //         <img src={Image} alt="" />
// //       </div>
// //       <div className="login-right">
// //         <div className="login-right-container">
// //           <div className="login-logo">
// //             <img src={Logo} alt="" />
// //           </div>
// //           <div className="login-center">
// //             <h2>Welcome back!</h2>
// //             <p>Please enter your details</p>
// //             <form>
// //               <input type="email" placeholder="Email" />
// //               <div className="pass-input-div">
// //                 <input type={showPassword ? "text" : "password"} placeholder="Password" />
// //                 {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
// //               </div>

// //               <div className="login-center-options">
// //                 <div className="remember-div">
// //                   <input type="checkbox" id="remember-checkbox" />
// //                   <label htmlFor="remember-checkbox">
// //                     Remember for 30 days
// //                   </label>
// //                 </div>
// //                 <a href="#" className="forgot-pass-link">
// //                   Forgot password?
// //                 </a>
// //               </div>
// //               <div className="login-center-buttons">
// //                 <button type="button">Log In</button>
// //                 <button type="button">
// //                   <img src={GoogleSvg} alt="" />
// //                   Log In with Google
// //                 </button>
// //               </div>
// //             </form>
// //           </div>

// //           <p className="login-bottom-p">
// //             Don't have an account? <a href="#">Sign Up</a>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;

// // use axios for sending requests//


// const Register = () => {
//     const [submit, setSubmit] = useState(false);
//     return (
//         <div>
//             <div>
//                 <h1>Register</h1>
//                 <div>
//                     <input type='email'/>
//                     <label htmlfor="" >Username</label>
//                 </div>
//                 <div>
//                     <input type='password'/>
//                     <label htmlfor="" >Password</label>
//                 </div>

//                 <div>
//                     {/* <div>
//                         <input type="checkbox" name="" id="" />
//                         <label htmlFor="Remember Me"></label>
//                     </div> */}
//                     {/* <span>Forgot Password?</span> */}
//                 </div>
//                 <button onClick={(e) => setSubmit(true)} type="sumbit">Register</button>
//                 <div>
//                     {/* <span>New here?< link to='Register'>Create an Account</link> </span> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;

