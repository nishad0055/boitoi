import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="lg:w-96 border border-black rounded-xl p-10">
        <h2 className="text-4xl text-center font-serif font-bold">SignUp</h2>
        <form>
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
        </form>
        <p className="text-lg font-serif my-2">
          Already have an account  ?
          <Link className="text-primary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-secondary w-full">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
