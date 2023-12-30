import { } from '@firebase/util';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const {createUser,signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();



    const handleSignUp=event=>{
        event.preventDefault()
        const form =event.target;
        const name = form.name.value;
        const email = form.email.value;;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log('signup user',user);
            toast.success('signup successfully');
            navigate('/')
            form.reset();
            
        })

        .catch(err=>console.error(err));
        
    }

    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast.success('signup success fully with google');
            navigate('/')
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div className="hero w-full my-20">
        <div className="">
          
          <div className="card flex-shrink-0 w-full  shadow-2xl">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
      
            <form onSubmit={handleSignUp}className="card-body w-96">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-4">
                  <input className='btn btn-primary' type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='text-center'>Already have an account <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success m-10 ">sign in google</button>
            </div>

          </div>
        </div>
      </div>
    );
};

export default SignUp;