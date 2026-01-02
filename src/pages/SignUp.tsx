import React from "react";
import { Nav } from "../components/Nav";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen ">
      

      
      <section className="min-h-screen flex items-center justify-center px-4 pt-24">
        {/* Sign Up Container */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-semibold text-gray-900 text-center">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 text-center mt-2">
            Sign up to get started.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                className="mt-2 w-full border border-gray-300 rounded-lg p-3 outline-none"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                className="mt-2 w-full border border-gray-300 rounded-lg p-3 outline-none"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                className="mt-2 w-full border border-gray-300 rounded-lg p-3 outline-none"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-full hover:scale-[1.01] transition"
            >
              Sign Up
            </button>

            <p className="text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <Link className="text-blue-600 underline" to="/login">
                Log in
              </Link>
            </p>

            {/* NOTE: Optional: link back home */}
            <p className="text-sm text-gray-500 text-center">
              <Link to="/" className="underline">
                Back to Home
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
