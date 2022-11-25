import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
   const {userLogin} = useContext(AuthContext)
   const [loginError, setLoginError] = useState('')
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from.pathname || '/'
   const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setLoginError('')

    userLogin(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      navigate(from,{replace:true})
      
    })
    .catch(error=> {
      setLoginError(error.message)
    })
    
   }
    

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="lg:w-96 border border-black rounded-xl p-10 shadow-md" >
        <h2 className="text-4xl text-center font-serif font-bold">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control w-full">
         <label className="label"><span className="label-text">Email Address</span></label>
            <input
              type="email" name="email" placeholder="Type your email"className="input input-bordered w-full"/>
          </div>
          <div className="form-control w-full">
         <label className="label"><span className="label-text">Password</span></label>
            <input
              type="password" name="password" placeholder="*******"className="input input-bordered w-full"/>
              <label className="label"><span className="label-text-alt">Forget Password</span></label>
          </div>
          <input  className="w-full btn btn-primary" type="submit" value="Login" />
        </form>
        {loginError && <p className="text-red-500" >{loginError}</p>}
        <p className="text-lg font-serif my-2" >New to bookbite ? <Link className="text-primary"  to='/signup'>Signup</Link> </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-secondary w-full" >Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
