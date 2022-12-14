import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";


const SignUp = () => {
    
    const {createUser , updateUser , googleSignIn} = useContext(AuthContext)
    const provider = new GoogleAuthProvider()
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/'


    const handleSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        const role = form.role.value;
        const name = form.name.value;
        const email = form.email.value;
        const password= form.password.value;

      createUser(email, password)
      .then(result =>{
        const user =result.user;
        console.log(user)
        toast.success('user created successfully')
        
        
        const userInfo = {
          displayName: name
        }
        updateUser(userInfo)
        .then(()=>{
          
          event.target.reset()
        })
        .catch(e=> console.log(e))
        
      })
      .catch(error=>console.log(error))

      const users = {
        name: name,
        role: role,
        email: email,
      }
      
      fetch('https://book-reselling-server.vercel.app/users',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(users)
      })
      .then(res => res.json())
      .then( data =>{
         console.log(data)
         navigate(from,{replace:true})
      })

    }

    const handleGoogle = ()=>{
      googleSignIn(provider)
      .then(()=>{})
      .catch(()=>{})
    }

   

  return (
    <div className="h-[800px] flex justify-center items-center my-10">
      <div className="lg:w-1/3 border border-black rounded-xl p-10">
        <h2 className="text-4xl text-center font-serif font-bold mb-7">SignUp</h2>
        <form onSubmit={handleSignUp} >
          <div>
            <h2 className="text-lg font-serif font-semibold text-blue-900" >Select Profile Type</h2>
             <div className="flex items-center gap-2" >
             <input
              className=" h-[20px] w-[20px]"
              name="role"
              type="radio"
              value="seller"
              required
            />
            <h2 className="text-md font-semibold font-serif" >SELLER</h2>
             </div>
              <div className="flex items-center gap-2" >
              <input
              className=" h-[20px] w-[20px]"
              name="role"
              type="radio"
              value="user" required />
            <h2 className="text-md font-semibold font-serif" >USER</h2>
              </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type your name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="*******"
              className="input input-bordered w-full"
            />
          </div>
          <input
            className="w-full btn btn-primary my-3"
            type="submit"
            value="SignUp"
          />
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Select Profile Type</span>
            </label>
          </div>
        </form>
        <p className="text-lg font-serif my-2">
          Already have an account ?
          <Link className="text-primary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogle} className="btn btn-outline btn-secondary w-full">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
