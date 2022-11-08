// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



// const Login = () => {

//      const {login} = useContext(AuthContext);
//      const navigate = useNavigate()
    
//     const handleLogin = event=>{
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email,password);

//         login(email,password)
//         .then(result=>{
//             const user = result.user;
//             console.log(user)
//             navigate('/');
//             form.reset()
//         })

//         .catch(error=>console.log(error))
//     }

//     return (
//         <div className="hero w-full my-20">
//         <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row  ">
          
//           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-8">
//             <h1 className="text-5xl text-center font-bold">Login</h1>
      
//             <form onSubmit={handleLogin}className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input type="text" name='email' placeholder="email" className="input input-bordered" />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input type="text" name='password' placeholder="password" className="input input-bordered" />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                   <input className='btn btn-primary' type="submit" value="Login" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Login;