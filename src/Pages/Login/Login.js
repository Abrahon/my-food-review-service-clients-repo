import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Login = () => {

     const {login} = useContext(AuthContext);
     const location = useLocation();
     const navigate = useNavigate();

     const from = location.state?.from?.pathname || '/'
    
    const handleLogin = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        login(email,password)
        .then(result=>{
            const user = result.user;
            
            const currentUser = {
              email: user.email

            }
            console.log(currentUser);
            toast.success('login successfully');


            //get jwt token
            fetch('https://y-ochre-five.vercel.app/jwt',{
              method: 'POST',
              headers: {
                'content-type':'application/json'
              },
              body: JSON.stringify(currentUser)
            })

            .then(res => res.json())
            .then(data=>{
              console.log(data)
              localStorage.setItem('food-token',data.token);
                navigate(from,{replace:true});
            })


          

            form.reset()
        })

        .catch(error=>console.log(error))
    }

    return (
        <div className="hero w-full my-20">
        <div className=" ">
          
          <div className="card flex-shrink-0 w-full shadow-2xl">
            <h1 className="text-5xl text-center font-bold">Login</h1>
      
            <form onSubmit={handleLogin}className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                  <input className='btn btn-primary' type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
   
      </div>
    );
};

export default Login;